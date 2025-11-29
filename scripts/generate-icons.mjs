import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const svgPath = path.join(publicDir, "vite.svg");

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Icon sizes for PWA
const iconSizes = [192, 512];

async function generateIcons() {
  try {
    if (!fs.existsSync(svgPath)) {
      console.error(`SVG file not found at ${svgPath}`);
      process.exit(1);
    }

    console.log("Generating PWA icons...");

    for (const size of iconSizes) {
      const outputPath = path.join(publicDir, `pwa-${size}x${size}.png`);

      await sharp(svgPath)
        .resize(size, size, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toFile(outputPath);

      console.log(`✓ Generated ${outputPath}`);
    }

    console.log("✓ All icons generated successfully!");
  } catch (error) {
    console.error("Error generating icons:", error);
    process.exit(1);
  }
}

generateIcons();
