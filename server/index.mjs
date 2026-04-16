// Node.js entry point for production.
// Wraps the TanStack Start SSR bundle (a Web `fetch` handler) with srvx so it
// can run as a standard Node HTTP server on Docker / EasyPanel. Static client
// assets shipped in `../public` are served via srvx's `serveStatic` middleware
// before falling through to the SSR handler.
//
// This file is copied to `.output/server/index.mjs` by `scripts/postbuild.mjs`.
// Start the production server with:
//   node .output/server/index.mjs
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { serve } from "srvx";
import { serveStatic } from "srvx/static";
import handler from "./server.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "..", "public");

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || "0.0.0.0";

serve({
  port,
  hostname: host,
  middleware: [serveStatic({ dir: publicDir })],
  fetch: handler.fetch,
});

console.log(`▲ JMM site running on http://${host}:${port}`);
