/**
 * Maps legacy `/images/projects/{slug}/{file}` URLs to Phase 2 WebP outputs under
 * `/images/projects-optimized/`, using the same basename + collision rules as
 * `scripts/optimize-project-images-phase2.mjs` (fallback `name.ext.webp` when two
 * sources share the same basename with different extensions).
 */
const LEGACY_PREFIX = "/images/projects/";
const OPTIMIZED_PREFIX = "/images/projects-optimized/";

/** Same-basename collisions resolved like phase2 (JPEG wins `*.webp`, JPG uses `*.jpg.webp`). */
const SAME_BASENAME_JPG: Record<string, string> = {
  "artica/013.JPG": "artica/013.jpg.webp",
  "artica/022.JPG": "artica/022.jpg.webp",
};

function optimizedRelativePath(slug: string, file: string): string {
  const key = `${slug}/${file}`;
  if (SAME_BASENAME_JPG[key]) {
    return SAME_BASENAME_JPG[key];
  }
  const dot = file.lastIndexOf(".");
  const base = dot === -1 ? file : file.slice(0, dot);
  return `${slug}/${base}.webp`;
}

/**
 * @param legacyPublicUrl - e.g. `/images/projects/slug/file.JPEG` or already-encoded segments
 */
export function toOptimizedProjectPublicPath(legacyPublicUrl: string): string {
  if (!legacyPublicUrl.startsWith(LEGACY_PREFIX)) {
    throw new Error(
      `Expected legacy path starting with ${LEGACY_PREFIX}, got: ${legacyPublicUrl}`,
    );
  }
  const rest = legacyPublicUrl.slice(LEGACY_PREFIX.length);
  const decoded = decodeURIComponent(rest);
  const slash = decoded.indexOf("/");
  if (slash === -1) {
    throw new Error(`Invalid legacy project path: ${legacyPublicUrl}`);
  }
  const slug = decoded.slice(0, slash);
  const file = decoded.slice(slash + 1);
  const relative = optimizedRelativePath(slug, file);
  return encodeURI(`${OPTIMIZED_PREFIX}${relative}`);
}
