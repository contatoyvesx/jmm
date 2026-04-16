// Postbuild: assemble a self-contained `.output/` directory that can be
// shipped in a Docker image.
//
// Layout produced:
//   .output/
//     server/
//       index.mjs        -> Node entry (from /server/index.mjs)
//       server.js        -> SSR bundle (from /dist/server/)
//       assets/          -> SSR chunks
//     public/            -> Static client assets (from /dist/client/)
//     package.json       -> Minimal manifest with runtime deps
//
// Start with: `node .output/server/index.mjs`
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const outDir = resolve(root, ".output");

if (!existsSync(resolve(dist, "server", "server.js"))) {
  console.error("[postbuild] dist/server/server.js not found. Did `vite build` succeed?");
  process.exit(1);
}

// Reset .output/
rmSync(outDir, { recursive: true, force: true });
mkdirSync(resolve(outDir, "server"), { recursive: true });

// Copy SSR build (server.js + chunks) into .output/server/
cpSync(resolve(dist, "server"), resolve(outDir, "server"), { recursive: true });

// Copy Node runtime entry next to it
cpSync(resolve(root, "server", "index.mjs"), resolve(outDir, "server", "index.mjs"));

// Copy client assets into .output/public/
cpSync(resolve(dist, "client"), resolve(outDir, "public"), { recursive: true });

// Write minimal package.json so `npm install --omit=dev` inside .output works
const rootPkg = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));
const runtimeDeps = {
  srvx: rootPkg.dependencies.srvx,
};
writeFileSync(
  resolve(outDir, "package.json"),
  JSON.stringify(
    {
      name: `${rootPkg.name}-output`,
      private: true,
      type: "module",
      scripts: { start: "node server/index.mjs" },
      dependencies: runtimeDeps,
    },
    null,
    2,
  ) + "\n",
);

console.log("[postbuild] .output/ ready. Start with: node .output/server/index.mjs");
