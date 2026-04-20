import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, ".artifacts", "playwright");
const outputFile = path.join(outputDir, "smoke.png");
const targetUrl = process.env.PW_SMOKE_URL ?? "https://3liksir.site/en";

function resolveExecutablePath() {
  if (process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE) {
    return process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;
  }

  const tmpDir = process.env.TMPDIR;
  const candidates = [
    tmpDir
      ? path.join(
          tmpDir,
          "cursor-sandbox-cache",
          "79d1538f183ea943b00f5ff9555941e1",
          "playwright",
          "chromium_headless_shell-1217",
          "chrome-headless-shell-mac-arm64",
          "chrome-headless-shell",
        )
      : "",
    tmpDir
      ? path.join(
          tmpDir,
          "cursor-sandbox-cache",
          "79d1538f183ea943b00f5ff9555941e1",
          "playwright",
          "chromium_headless_shell-1217",
          "chrome-headless-shell-mac-x64",
          "chrome-headless-shell",
        )
      : "",
  ].filter(Boolean);

  return candidates.find((candidate) => fs.existsSync(candidate));
}

async function run() {
  const executablePath = resolveExecutablePath();
  const launchOptions = executablePath ? { executablePath } : undefined;
  const browser = await chromium.launch(launchOptions);
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  await page.goto(targetUrl, { waitUntil: "domcontentloaded", timeout: 30_000 });
  await page.waitForTimeout(1_000);

  fs.mkdirSync(outputDir, { recursive: true });
  await page.screenshot({ path: outputFile, fullPage: false });

  console.log(`Smoke test OK: ${await page.title()}`);
  console.log(`Screenshot: ${outputFile}`);

  await browser.close();
}

run().catch((error) => {
  console.error("Playwright smoke test failed.");
  console.error(error);
  process.exit(1);
});
