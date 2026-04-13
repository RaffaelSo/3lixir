import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const INPUT_ROOT = path.resolve("public/images/projects");
const OUTPUT_ROOT_DEFAULT = path.resolve("public/images/projects-optimized");
const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const MIN_SAVING_BYTES = 16 * 1024;
const MIN_SAVING_RATIO = 0.03;
const DEFAULT_MAX_WIDTH = 2400;
const TOP_SAVINGS_LIMIT = 10;

function parseArgs(argv) {
  const args = {
    dryRun: true,
    write: false,
    replace: false,
    maxWidth: DEFAULT_MAX_WIDTH,
    outputDir: OUTPUT_ROOT_DEFAULT,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--dry-run") {
      args.dryRun = true;
      continue;
    }
    if (arg === "--write") {
      args.write = true;
      args.dryRun = false;
      continue;
    }
    if (arg === "--replace") {
      args.replace = true;
      continue;
    }
    if (arg === "--max-width") {
      const next = argv[i + 1];
      const value = Number(next);
      if (!next || !Number.isFinite(value) || value <= 0) {
        throw new Error('Invalid value for --max-width. Example: --max-width 2400');
      }
      args.maxWidth = Math.round(value);
      i += 1;
      continue;
    }
    if (arg === "--output-dir") {
      const next = argv[i + 1];
      if (!next) {
        throw new Error('Missing value for --output-dir. Example: --output-dir "public/images/projects-optimized"');
      }
      args.outputDir = path.resolve(next);
      i += 1;
      continue;
    }
  }

  if (args.replace && !args.write) {
    throw new Error("--replace requires --write.");
  }

  if (args.replace) {
    args.outputDir = INPUT_ROOT;
  }

  return args;
}

async function getFilesRecursively(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFilesRecursively(fullPath)));
      continue;
    }

    if (SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

function formatMB(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)}MB`;
}

function toPercent(value) {
  return `${(value * 100).toFixed(2)}%`;
}

function chooseWebpOptions(hasAlpha) {
  if (hasAlpha) {
    return {
      quality: 78,
      alphaQuality: 85,
      effort: 6,
    };
  }

  return {
    quality: 80,
    effort: 6,
  };
}

function computeTargetPath({
  sourcePath,
  inputRoot,
  outputRoot,
  replace,
  destinationClaims,
}) {
  if (replace) {
    return sourcePath;
  }

  const relative = path.relative(inputRoot, sourcePath);
  const sourceExt = path.extname(relative);
  const sourceExtLower = sourceExt.toLowerCase();
  const baseWithoutExt = relative.slice(0, -sourceExt.length);
  const primaryCandidate = `${baseWithoutExt}.webp`;
  const fallbackCandidate = `${baseWithoutExt}.${sourceExtLower.slice(1)}.webp`;
  const claimedByPrimary = destinationClaims.get(primaryCandidate);

  const selectedRelative =
    claimedByPrimary && claimedByPrimary !== relative ? fallbackCandidate : primaryCandidate;

  destinationClaims.set(selectedRelative, relative);
  return path.join(outputRoot, selectedRelative);
}

async function optimizeFile({
  filePath,
  inputRoot,
  outputRoot,
  maxWidth,
  write,
  replace,
  destinationClaims,
}) {
  const originalStat = await stat(filePath);
  const originalSize = originalStat.size;

  const source = sharp(filePath, { failOnError: false });
  const metadata = await source.metadata();
  const sourceWidth = metadata.width ?? null;
  const hasAlpha = Boolean(metadata.hasAlpha);
  const shouldResize = typeof sourceWidth === "number" && sourceWidth > maxWidth;

  let pipeline = sharp(filePath, { failOnError: false }).rotate();
  if (shouldResize) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  const optimizedBuffer = await pipeline.webp(chooseWebpOptions(hasAlpha)).toBuffer();
  const optimizedSize = optimizedBuffer.length;
  const savedBytes = originalSize - optimizedSize;
  const savedRatio = originalSize > 0 ? savedBytes / originalSize : 0;
  const shouldOptimize =
    savedBytes > MIN_SAVING_BYTES && savedRatio >= MIN_SAVING_RATIO;

  const outputPath = computeTargetPath({
    sourcePath: filePath,
    inputRoot,
    outputRoot,
    replace,
    destinationClaims,
  });

  if (write && shouldOptimize) {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, optimizedBuffer);
  }

  return {
    filePath,
    outputPath,
    originalSize,
    optimizedSize,
    savedBytes: shouldOptimize ? savedBytes : 0,
    savedRatio: shouldOptimize ? savedRatio : 0,
    shouldOptimize,
    resized: shouldResize,
    hasAlpha,
  };
}

function printReport({
  modeLabel,
  inputRoot,
  outputRoot,
  maxWidth,
  scannedCount,
  optimizedCount,
  skippedCount,
  totalBefore,
  totalAfter,
  errors,
  bestSavings,
}) {
  const savedBytes = totalBefore - totalAfter;
  const savedRatio = totalBefore > 0 ? savedBytes / totalBefore : 0;

  console.log("");
  console.log(`Mode: ${modeLabel}`);
  console.log(`Input: ${inputRoot}`);
  console.log(`Output: ${outputRoot}`);
  console.log(`Max width: ${maxWidth}px`);
  console.log("");
  console.log(`Files scanned: ${scannedCount}`);
  console.log(`Files optimized: ${optimizedCount}`);
  console.log(`Files skipped: ${skippedCount}`);
  console.log(`Size before: ${formatMB(totalBefore)}`);
  console.log(`Size after: ${formatMB(totalAfter)}`);
  console.log(`Saved: ${formatMB(savedBytes)} (${toPercent(savedRatio)})`);

  if (bestSavings.length > 0) {
    console.log("");
    console.log(`Top ${Math.min(TOP_SAVINGS_LIMIT, bestSavings.length)} savings:`);
    for (const item of bestSavings) {
      console.log(
        `- ${path.relative(process.cwd(), item.filePath)} -> ${path.relative(process.cwd(), item.outputPath)}: ${formatMB(item.originalSize)} -> ${formatMB(item.optimizedSize)} (saved ${formatMB(item.savedBytes)}, ${toPercent(item.savedRatio)})`,
      );
    }
  }

  if (errors.length > 0) {
    console.log("");
    console.log(`Errors (${errors.length}):`);
    for (const error of errors) {
      console.log(`- ${path.relative(process.cwd(), error.filePath)}: ${error.reason}`);
    }
  }
  console.log("");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const destinationClaims = new Map();
  const files = await getFilesRecursively(INPUT_ROOT);
  const errors = [];
  const results = [];

  let totalBefore = 0;
  let totalAfter = 0;
  let optimizedCount = 0;

  for (const filePath of files) {
    try {
      const result = await optimizeFile({
        filePath,
        inputRoot: INPUT_ROOT,
        outputRoot: args.outputDir,
        maxWidth: args.maxWidth,
        write: args.write,
        replace: args.replace,
        destinationClaims,
      });

      results.push(result);
      totalBefore += result.originalSize;
      totalAfter += result.shouldOptimize ? result.optimizedSize : result.originalSize;

      if (result.shouldOptimize) {
        optimizedCount += 1;
      }
    } catch (error) {
      errors.push({
        filePath,
        reason: error instanceof Error ? error.message : String(error),
      });
    }
  }

  const skippedCount = files.length - optimizedCount;
  const bestSavings = results
    .filter((result) => result.shouldOptimize)
    .sort((a, b) => b.savedBytes - a.savedBytes)
    .slice(0, TOP_SAVINGS_LIMIT);

  const modeLabel = args.write
    ? args.replace
      ? "WRITE + REPLACE (destructive on source files)"
      : "WRITE (safe output directory)"
    : "DRY RUN (no file writes)";

  if (args.replace) {
    console.log("WARNING: --replace is enabled. Source files may be overwritten.");
  }

  printReport({
    modeLabel,
    inputRoot: INPUT_ROOT,
    outputRoot: args.outputDir,
    maxWidth: args.maxWidth,
    scannedCount: files.length,
    optimizedCount,
    skippedCount,
    totalBefore,
    totalAfter,
    errors,
    bestSavings,
  });

  if (!args.write) {
    console.log(
      'This was a dry run. Re-run with "--write" to write optimized files, and optionally "--replace" for in-place replacement.',
    );
    console.log("");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
