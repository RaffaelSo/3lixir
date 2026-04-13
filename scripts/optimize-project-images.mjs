import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const ROOT_DIR = path.resolve("public/images/projects");
const MAX_WIDTH = 2400;
const MIN_SAVING_RATIO = 0.03;
const MIN_SAVING_BYTES = 16 * 1024;

const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

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

function optimizePipeline(instance, ext) {
  switch (ext) {
    case ".jpg":
    case ".jpeg":
      return instance.jpeg({
        quality: 78,
        mozjpeg: true,
        progressive: true,
      });
    case ".png":
      return instance.png({
        compressionLevel: 9,
        palette: true,
        quality: 80,
        effort: 10,
      });
    case ".webp":
      return instance.webp({
        quality: 78,
        effort: 6,
      });
    default:
      return instance;
  }
}

async function optimizeFile(filePath, writeChanges) {
  const ext = path.extname(filePath).toLowerCase();
  const originalStat = await stat(filePath);
  const originalSize = originalStat.size;

  const image = sharp(filePath, { failOnError: false });
  const metadata = await image.metadata();

  const resized = metadata.width && metadata.width > MAX_WIDTH;
  const base = sharp(filePath, { failOnError: false }).rotate();
  const resizedPipeline = resized
    ? base.resize({ width: MAX_WIDTH, withoutEnlargement: true })
    : base;

  const outputBuffer = await optimizePipeline(resizedPipeline, ext).toBuffer();
  const optimizedSize = outputBuffer.length;
  const savedBytes = originalSize - optimizedSize;
  const savedRatio = savedBytes / originalSize;
  const shouldReplace =
    savedBytes > MIN_SAVING_BYTES && savedRatio >= MIN_SAVING_RATIO;

  if (shouldReplace && writeChanges) {
    await writeFile(filePath, outputBuffer);
  }

  return {
    filePath,
    originalSize,
    optimizedSize,
    savedBytes: shouldReplace ? savedBytes : 0,
    shouldReplace,
  };
}

function formatMB(bytes) {
  return (bytes / 1024 / 1024).toFixed(2);
}

async function main() {
  const writeChanges = process.argv.includes("--write");
  const files = await getFilesRecursively(ROOT_DIR);

  let totalOriginal = 0;
  let totalOptimized = 0;
  let totalSaved = 0;
  let replacedCount = 0;

  for (const filePath of files) {
    const result = await optimizeFile(filePath, writeChanges);
    totalOriginal += result.originalSize;
    totalOptimized += result.shouldReplace
      ? result.optimizedSize
      : result.originalSize;
    totalSaved += result.savedBytes;

    if (result.shouldReplace) {
      replacedCount += 1;
      console.log(
        `optimized ${path.relative(process.cwd(), result.filePath)}: ${formatMB(result.originalSize)}MB -> ${formatMB(result.optimizedSize)}MB`,
      );
    }
  }

  console.log("");
  console.log(writeChanges ? "Optimization complete." : "Dry run complete.");
  console.log(`Files scanned: ${files.length}`);
  console.log(`Files optimized: ${replacedCount}`);
  console.log(`Size before: ${formatMB(totalOriginal)}MB`);
  console.log(`Size after: ${formatMB(totalOptimized)}MB`);
  console.log(`Saved: ${formatMB(totalSaved)}MB`);
  console.log("");

  if (!writeChanges) {
    console.log('Re-run with "--write" to apply the optimization.');
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
