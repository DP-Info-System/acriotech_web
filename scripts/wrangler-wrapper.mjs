#!/usr/bin/env node
import { spawnSync } from "child_process";
import { existsSync } from "fs";
import path from "path";

const projectRoot = process.cwd();
const openNextConfig = path.join(projectRoot, ".open-next/.build/open-next.config.edge.mjs");
const args = process.argv.slice(2);

// If deploy and build missing, auto-build
if (args.includes("deploy") && !existsSync(openNextConfig)) {
  console.log("[wrangler-wrapper] OpenNext build not found, running `opennextjs-cloudflare build`...");
  const build = spawnSync("npx", ["opennextjs-cloudflare", "build"], {
    stdio: "inherit",
    cwd: projectRoot,
    env: process.env,
  });
  if (build.status !== 0) {
    console.error("[wrangler-wrapper] opennextjs-cloudflare build failed");
    process.exit(build.status ?? 1);
  }
  if (!existsSync(openNextConfig)) {
    console.error("[wrangler-wrapper] build completed but config still missing");
    process.exit(1);
  }
}

// Delegate to real wrangler
const realWrangler = path.join(projectRoot, "node_modules/wrangler/bin/wrangler.js");
const result = spawnSync(process.execPath, [realWrangler, ...args], {
  stdio: "inherit",
  cwd: projectRoot,
  env: process.env,
});
process.exit(result.status ?? 0);
