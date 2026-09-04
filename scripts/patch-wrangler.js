#!/usr/bin/env node
// Patch wrangler and opennext to auto-build if .open-next missing before deploy
// Runs as postinstall and can be invoked manually: node scripts/patch-wrangler.js

import fs from "fs";
import path from "path";

const projectRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");

function patchWrangler() {
  const cliPath = path.join(projectRoot, "node_modules/wrangler/wrangler-dist/cli.js");
  if (!fs.existsSync(cliPath)) {
    console.log("[patch-wrangler] wrangler cli.js not found, skipping wrangler patch");
    return;
  }
  let content = fs.readFileSync(cliPath, "utf8");
  if (content.includes("AUTO_BUILD_OPENNEXT_PATCH")) {
    console.log("[patch-wrangler] already patched wrangler");
    return;
  }
  const original = `async function maybeDelegateToOpenNextDeployCommand(projectRoot) {
  if (await isOpenNextProject(projectRoot)) {
    const openNextDeploy = getOpenNextDeployFromEnv();
    if (!openNextDeploy) {
      logger2.log(
        "OpenNext project detected, calling \`opennextjs-cloudflare deploy\`"
      );`;
  const patched = `async function maybeDelegateToOpenNextDeployCommand(projectRoot) {
  if (await isOpenNextProject(projectRoot)) {
    const openNextDeploy = getOpenNextDeployFromEnv();
    if (!openNextDeploy) {
      // AUTO_BUILD_OPENNEXT_PATCH: ensure .open-next exists before delegating
      try {
        const openNextConfigPath = path.join(projectRoot, ".open-next/.build/open-next.config.edge.mjs");
        const { existsSync } = await import("fs");
        if (!existsSync(openNextConfigPath)) {
          logger2.log("OpenNext build not found, running \`opennextjs-cloudflare build\` automatically...");
          const { spawnSync } = await import("child_process");
          const result = spawnSync("npx", ["opennextjs-cloudflare", "build"], { stdio: "inherit", cwd: projectRoot, env: process.env });
          if (result.status !== 0) {
            logger2.error("Auto build failed, aborting deploy");
            process.exit(1);
          }
        }
      } catch (e) {
        // fallback: try build anyway
      }
      logger2.log(
        "OpenNext project detected, calling \`opennextjs-cloudflare deploy\`"
      );`;
  if (content.includes(original)) {
    content = content.replace(original, patched);
    // need to ensure 'path' is imported in that file scope; it already imports path via init, but we use global path + fs
    // Add import for path if not present
    fs.writeFileSync(cliPath, content, "utf8");
    console.log("[patch-wrangler] patched wrangler cli.js to auto-build");
  } else {
    console.log("[patch-wrangler] wrangler patch pattern not found, skipping");
  }
}

function patchOpenNext() {
  const utilsPath = path.join(projectRoot, "node_modules/@opennextjs/cloudflare/dist/cli/commands/utils/utils.js");
  if (!fs.existsSync(utilsPath)) {
    console.log("[patch-wrangler] opennext utils.js not found, skipping");
    return;
  }
  let content = fs.readFileSync(utilsPath, "utf8");
  if (content.includes("AUTO_BUILD_OPENNEXT_PATCH")) {
    console.log("[patch-wrangler] already patched opennext utils");
    return;
  }
  const original = `export async function retrieveCompiledConfig() {
    const configPath = path.join(nextAppDir, ".open-next/.build/open-next.config.edge.mjs");
    if (!existsSync(configPath)) {
        logger.error("Could not find compiled Open Next config, did you run the build command?");
        process.exit(1);
    }`;
  const patched = `export async function retrieveCompiledConfig() {
    const configPath = path.join(nextAppDir, ".open-next/.build/open-next.config.edge.mjs");
    if (!existsSync(configPath)) {
        // AUTO_BUILD_OPENNEXT_PATCH: auto build if missing
        logger.log("Compiled OpenNext config not found, running build automatically...");
        const { spawnSync } = await import("child_process");
        const result = spawnSync("npx", ["opennextjs-cloudflare", "build"], { stdio: "inherit", cwd: nextAppDir, env: process.env });
        if (result.status !== 0 || !existsSync(configPath)) {
            logger.error("Could not find compiled Open Next config, did you run the build command?");
            process.exit(1);
        }
    }`;
  if (content.includes(original)) {
    content = content.replace(original, patched);
    fs.writeFileSync(utilsPath, content, "utf8");
    console.log("[patch-wrangler] patched opennext utils.js to auto-build");
  } else {
    console.log("[patch-wrangler] opennext patch pattern not found, trying alternative");
    // try alternative spacing
    if (content.includes("Could not find compiled Open Next config")) {
      content = content.replace(
        "Could not find compiled Open Next config, did you run the build command?",
        "Could not find compiled Open Next config, did you run the build command? (auto-build attempted)"
      );
      // still need to inject build logic before check - do simple prepend
      const marker = "export async function retrieveCompiledConfig() {";
      const inject = `export async function retrieveCompiledConfig() {
    // AUTO_BUILD_OPENNEXT_PATCH
    try {
        const _autoConfigPath = path.join(nextAppDir, ".open-next/.build/open-next.config.edge.mjs");
        const _fs = await import("fs");
        if (!_fs.existsSync(_autoConfigPath)) {
            const { spawnSync } = await import("child_process");
            const _logger2 = (await import(\"@opennextjs/aws/logger.js\")).default;
            _logger2.log("Auto-building OpenNext (missing .open-next)...");
            spawnSync("npx", ["opennextjs-cloudflare", "build"], { stdio: "inherit", cwd: nextAppDir });
        }
    } catch {}
`;
      if (content.includes(marker) && !content.includes("AUTO_BUILD_OPENNEXT_PATCH")) {
        content = content.replace(marker, inject);
        fs.writeFileSync(utilsPath, content, "utf8");
        console.log("[patch-wrangler] patched opennext via alternative inject");
      }
    }
  }
}

function installWrapper() {
  const wrapperSrc = path.join(projectRoot, "scripts/wrangler-wrapper.mjs");
  const binPath = path.join(projectRoot, "node_modules/.bin/wrangler");
  if (!fs.existsSync(wrapperSrc)) {
    console.log("[patch-wrangler] wrapper src not found");
    return;
  }
  if (!fs.existsSync(path.join(projectRoot, "node_modules/.bin"))) {
    console.log("[patch-wrangler] node_modules/.bin not found, skipping wrapper install");
    return;
  }
  try {
    // Only install if not already our wrapper
    let current = "";
    try {
      const stat = fs.lstatSync(binPath);
      if (stat.isSymbolicLink()) {
        // read symlink target content for check
        const real = fs.readlinkSync(binPath);
        const targetPath = path.resolve(path.dirname(binPath), real);
        if (fs.existsSync(targetPath)) current = fs.readFileSync(targetPath, "utf8");
      } else if (fs.existsSync(binPath)) {
        current = fs.readFileSync(binPath, "utf8");
      }
    } catch {}
    if (current.includes("wrangler-wrapper")) {
      console.log("[patch-wrangler] wrapper already installed");
      return;
    }
    // Backup and replace symlink with wrapper file
    try {
      const stat = fs.lstatSync(binPath);
      if (stat.isSymbolicLink()) {
        const linkTarget = fs.readlinkSync(binPath);
        // backup real file content to .real file (not symlink)
        const realPath = path.resolve(path.dirname(binPath), linkTarget);
        if (fs.existsSync(realPath) && !fs.existsSync(binPath + ".real")) {
          fs.copyFileSync(realPath, binPath + ".real");
        }
        fs.unlinkSync(binPath);
      } else if (fs.existsSync(binPath) && !fs.existsSync(binPath + ".real")) {
        fs.copyFileSync(binPath, binPath + ".real");
        fs.unlinkSync(binPath);
      }
    } catch {}
    fs.copyFileSync(wrapperSrc, binPath);
    fs.chmodSync(binPath, 0o755);
    console.log("[patch-wrangler] installed wrapper to node_modules/.bin/wrangler");
  } catch (e) {
    console.log("[patch-wrangler] wrapper install failed", e.message);
  }
}

patchWrangler();
patchOpenNext();
installWrapper();
console.log("[patch-wrangler] done");
