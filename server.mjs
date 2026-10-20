import { spawn } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const frontendDir = join(rootDir, "frontend");
const port = process.env.PORT || 3000;

console.log(`[Scrapbook Server] Menyiapkan Next.js pada port ${port}...`);

const nextBin = join(frontendDir, "node_modules", "next", "dist", "bin", "next");

let child;
if (existsSync(nextBin)) {
  child = spawn(process.execPath, [nextBin, "start", "-p", String(port)], {
    cwd: frontendDir,
    stdio: "inherit",
    env: { ...process.env, PORT: String(port) },
  });
} else {
  child = spawn("npx", ["next", "start", "-p", String(port)], {
    cwd: frontendDir,
    stdio: "inherit",
    shell: true,
    env: { ...process.env, PORT: String(port) },
  });
}

child.on("error", (err) => {
  console.error("[Scrapbook Server] Error menjalankan Next.js child process:", err);
});

child.on("exit", (code, signal) => {
  console.log(`[Scrapbook Server] Next.js child selesai (code: ${code}, signal: ${signal})`);
  process.exit(code || 0);
});

const cleanup = (sig) => {
  if (child && !child.killed) {
    child.kill(sig);
  }
  process.exit(0);
};

process.on("SIGINT", () => cleanup("SIGINT"));
process.on("SIGTERM", () => cleanup("SIGTERM"));
