// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Disable the Cloudflare Workers plugin so the build targets a standard
// Node.js server (deployable on Docker / EasyPanel). The TanStack Start
// build produces a server bundle in `dist/server/` that exports a Web
// `fetch` handler; `server/index.mjs` wraps it for Node and is then
// copied into `.output/` by the postbuild script (see package.json).
export default defineConfig({
  cloudflare: false,
});
