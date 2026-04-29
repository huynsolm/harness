import { createServer } from "node:http";
import { createReadStream, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const REQUIRED_PORT = 3000;
const requestedPort = Number(process.env.PORT ?? REQUIRED_PORT);

if (requestedPort !== REQUIRED_PORT) {
  console.error(`Preview port policy violation: requested ${requestedPort}, but this project only permits ${REQUIRED_PORT}.`);
  process.exit(1);
}

const root = resolve(process.cwd());

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
  ".wav": "audio/wav",
  ".mp3": "audio/mpeg"
};

function resolveRequestPath(url) {
  const parsed = new URL(url, "http://localhost:3000");
  const pathname = decodeURIComponent(parsed.pathname);
  if (pathname === "/") {
    return resolve(join(root, "index.html"));
  }

  const normalized = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const candidate = resolve(join(root, normalized.slice(1)));

  if (!candidate.startsWith(root)) {
    return null;
  }

  return candidate;
}

const server = createServer((request, response) => {
  const filePath = resolveRequestPath(request.url ?? "/");

  if (!filePath) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  let stats;
  try {
    stats = statSync(filePath);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  if (!stats.isFile()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": mimeTypes[extname(filePath).toLowerCase()] ?? "application/octet-stream",
    "Cache-Control": "no-store"
  });

  createReadStream(filePath).pipe(response);
});

server.on("error", (error) => {
  console.error(`Failed to start preview server on port ${REQUIRED_PORT}: ${error.message}`);
  process.exit(1);
});

server.listen(REQUIRED_PORT, "127.0.0.1", () => {
  console.log(`Static preview running at http://127.0.0.1:${REQUIRED_PORT}`);
});
