import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const port = Number(process.env.PORT || 4173);
const rootDir = fileURLToPath(new URL(".", import.meta.url));

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon"
};

createServer(async (request, response) => {
  try {
    let pathname = new URL(request.url, "http://localhost").pathname;
    if (pathname === "/") pathname = "/index.html";

    const cleanPath = pathname.replace(/^\/+/, "");
    const filePath = join(rootDir, cleanPath);
    const ext = extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";

    const content = await readFile(filePath);
    response.writeHead(200, { "Content-Type": contentType, "Cache-Control": "no-store" });
    response.end(content);
  } catch (err) {
    if (err.code === "ENOENT") {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("Not found");
    } else {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("File could not be read");
    }
  }
}).listen(port, "127.0.0.1", () => console.log(`Birthday scrapbook: http://localhost:${port}`));
