import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const sassOptions = {
  includePaths: [join(__dirname, "styles")],
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // You can remove the file-loader configuration
    // Instead, Next.js will handle static assets automatically
    return config;
  },
};

export default nextConfig;
