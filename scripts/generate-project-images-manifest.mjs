import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const projectsBasePath = path.join(projectRoot, "public", "images", "projects");
const outputPath = path.join(projectRoot, "src", "data", "project-images.ts");
const projectsDataPath = path.join(projectRoot, "src", "data", "projects.ts");
const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const shouldIgnoreName = (name) => {
  const upper = name.toUpperCase();
  return (
    name.startsWith(".") ||
    name === ".gitkeep" ||
    upper.startsWith("COVER") ||
    upper.startsWith("IGNORE")
  );
};

const sortNaturally = (a, b) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });

async function getImageFilesRecursively(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getImageFilesRecursively(fullPath)));
      continue;
    }

    if (SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Same collision rules as `scripts/optimize-project-images-phase2.mjs` (non-replace output names).
 */
function computeOptimizedRelativeKey(sourcePath, inputRoot, destinationClaims) {
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
  return selectedRelative.split(path.sep).join("/");
}

async function buildLegacyToOptimizedUrlMap() {
  const files = await getImageFilesRecursively(projectsBasePath);
  const destinationClaims = new Map();
  const map = new Map();

  for (const filePath of files) {
    const legacyKey = path.relative(projectsBasePath, filePath).split(path.sep).join("/");
    const optRel = computeOptimizedRelativeKey(
      filePath,
      projectsBasePath,
      destinationClaims,
    );
    map.set(legacyKey, encodeURI(`/images/projects-optimized/${optRel}`));
  }

  return map;
}

async function main() {
  const projectsDataSource = await readFile(projectsDataPath, "utf8");
  const projectSlugMatches = projectsDataSource.matchAll(/slug:\s*"([^"]+)"/g);
  const projectSlugs = new Set(
    Array.from(projectSlugMatches, (match) => match[1]).filter(Boolean),
  );

  const directories = await readdir(projectsBasePath, { withFileTypes: true });
  const slugs = directories
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => !slug.toUpperCase().startsWith("IGNORE"))
    .filter((slug) => projectSlugs.has(slug))
    .sort(sortNaturally);

  const legacyToOptimized = await buildLegacyToOptimizedUrlMap();
  const manifest = {};

  for (const slug of slugs) {
    const slugPath = path.join(projectsBasePath, slug);
    const entries = await readdir(slugPath, { withFileTypes: true });

    const imagePaths = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => !shouldIgnoreName(name))
      .sort(sortNaturally)
      .map((name) => {
        const key = `${slug}/${name}`;
        const optimized = legacyToOptimized.get(key);
        if (!optimized) {
          throw new Error(`Missing optimized URL mapping for ${key}`);
        }
        return optimized;
      });

    manifest[slug] = imagePaths;
  }

  const fileContent =
    "export const projectImagesBySlug = " +
    JSON.stringify(manifest, null, 2) +
    " as const;\n";

  await writeFile(outputPath, fileContent, "utf8");
}

main().catch((error) => {
  console.error("Failed to generate project image manifest.");
  console.error(error);
  process.exit(1);
});
