import { spawn } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const frontendDir = join(rootDir, "frontend");
const port = process.env.PORT || 3000;

console.log(`[Scrapbook Server] Menjalankan Next.js pada port ${port}...`);

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
  console.error("[Scrapbook Server] Gagal menjalankan Next.js:", err);
});

child.on("exit", (code) => {
  console.log(`[Scrapbook Server] Next.js selesai dengan kode ${code}`);
  process.exit(code || 0);
});

process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
