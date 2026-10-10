import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const repositoryRoot = fileURLToPath(new URL(".", import.meta.url));
const projectsRoot = resolve(repositoryRoot, "projects");
const manifestPath = resolve(projectsRoot, "published-projects.json");
const virtualEntry = "virtual:makevibe-index";
const resolvedVirtualEntry = `\0${virtualEntry}`;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const languagePattern = /^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/;
const allowedProjectFiles = [
  "README.md",
  "index.html",
  "script.js",
  "styles.css",
];

function fail(message) {
  throw new Error(`[MakeVibe] ${message}`);
}

function readManifest() {
  let manifest;

  try {
    manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  } catch (error) {
    fail(`Could not read projects/published-projects.json: ${error.message}`);
  }

  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) {
    fail("The publication manifest must be a JSON object.");
  }

  const rootKeys = Object.keys(manifest).sort();
  if (rootKeys.join(",") !== "projects,site") {
    fail('The publication manifest must contain only "site" and "projects".');
  }

  validateSite(manifest.site);

  if (!Array.isArray(manifest.projects)) {
    fail('"projects" must be an array.');
  }

  const seenSlugs = new Set();
  let previousSlug = "";

  for (const project of manifest.projects) {
    validatePublishedProject(project);

    if (seenSlugs.has(project.slug)) {
      fail(`Published project "${project.slug}" appears more than once.`);
    }

    if (previousSlug && project.slug.localeCompare(previousSlug) < 0) {
      fail("Published projects must be sorted by slug.");
    }

    seenSlugs.add(project.slug);
    previousSlug = project.slug;
  }

  return manifest;
}

function validateSite(site) {
  if (!site || typeof site !== "object" || Array.isArray(site)) {
    fail('"site" must be an object.');
  }

  const siteKeys = Object.keys(site).sort();
  if (siteKeys.join(",") !== "emptyMessage,heading,language") {
    fail(
      '"site" must contain only "language", "heading", and "emptyMessage".',
    );
  }

  validateText(site.heading, "site.heading", 80);
  validateText(site.emptyMessage, "site.emptyMessage", 160);

  if (
    typeof site.language !== "string" ||
    !languagePattern.test(site.language)
  ) {
    fail('"site.language" must be a short BCP 47 language code such as "en".');
  }
}

function validatePublishedProject(project) {
  if (!project || typeof project !== "object" || Array.isArray(project)) {
    fail("Each published project must be an object.");
  }

  const keys = Object.keys(project).sort();
  if (keys.join(",") !== "description,slug,title") {
    fail(
      'Each published project must contain only "slug", "title", and "description".',
    );
  }

  if (typeof project.slug !== "string" || !slugPattern.test(project.slug)) {
    fail(`Invalid published project slug "${project.slug ?? ""}".`);
  }

  validateText(project.title, `${project.slug}.title`, 80);
  validateText(project.description, `${project.slug}.description`, 160);
}

function validateText(value, field, maximumLength) {
  if (
    typeof value !== "string" ||
    value.trim() !== value ||
    value.length === 0 ||
    value.length > maximumLength
  ) {
    fail(
      `"${field}" must be a trimmed, non-empty string of at most ${maximumLength} characters.`,
    );
  }
}

function validateProjectFolders(publishedProjects) {
  const entries = readdirSync(projectsRoot, { withFileTypes: true });
  const projectSlugs = new Set();

  for (const entry of entries) {
    if (entry.isFile() && entry.name === "published-projects.json") {
      continue;
    }

    if (!entry.isDirectory()) {
      fail(`Unexpected item "projects/${entry.name}".`);
    }

    if (!slugPattern.test(entry.name)) {
      fail(`Project folder "${entry.name}" is not a safe kebab-case slug.`);
    }

    const projectRoot = resolve(projectsRoot, entry.name);
    const projectEntries = readdirSync(projectRoot, { withFileTypes: true });
    const projectFiles = projectEntries.map(({ name }) => name).sort();

    if (projectEntries.some((projectEntry) => !projectEntry.isFile())) {
      fail(`Project "${entry.name}" cannot contain folders or links.`);
    }

    if (projectFiles.join(",") !== allowedProjectFiles.join(",")) {
      fail(
        `Project "${entry.name}" must contain exactly: ${allowedProjectFiles.join(", ")}.`,
      );
    }

    for (const fileName of projectFiles) {
      const content = readFileSync(resolve(projectRoot, fileName), "utf8");
      if (/\{\{[A-Z0-9_]+\}\}/.test(content)) {
        fail(`Project "${entry.name}/${fileName}" has an unreplaced placeholder.`);
      }
    }

    projectSlugs.add(entry.name);
  }

  for (const project of publishedProjects) {
    if (!projectSlugs.has(project.slug)) {
      fail(
        `Published project "${project.slug}" does not have a matching project folder.`,
      );
    }
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderPublishedIndex(manifest) {
  const cards = manifest.projects.length
    ? manifest.projects
        .map(
          (project) => `
          <li>
            <a href="./${project.slug}/">
              <strong>${escapeHtml(project.title)}</strong>
              <span>${escapeHtml(project.description)}</span>
            </a>
          </li>`,
        )
        .join("")
    : `<li class="empty">${escapeHtml(manifest.site.emptyMessage)}</li>`;

  return `<!doctype html>
<html lang="${escapeHtml(manifest.site.language)}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light" />
    <title>${escapeHtml(manifest.site.heading)}</title>
    <style>
      :root { color: #23333a; background: #f7f1e3; font-family: "Trebuchet MS", "Avenir Next", sans-serif; }
      * { box-sizing: border-box; }
      body { min-width: 320px; min-height: 100vh; margin: 0; padding: clamp(1.5rem, 7vw, 5rem); background: radial-gradient(circle at 85% 10%, #ffd166 0 5rem, transparent 5.1rem), #f7f1e3; }
      main { width: min(58rem, 100%); margin: 0 auto; }
      h1 { margin: 0 0 2rem; font-size: clamp(3rem, 12vw, 7rem); line-height: 0.9; letter-spacing: -0.06em; }
      ul { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)); gap: 1.25rem; margin: 0; padding: 0; list-style: none; }
      a, .empty { min-height: 10rem; display: flex; flex-direction: column; justify-content: space-between; gap: 1rem; padding: 1.25rem; border: 3px solid currentColor; border-radius: 1.2rem 0.3rem 1.2rem 0.3rem; color: inherit; background: #fffdf8; box-shadow: 0.45rem 0.45rem 0 currentColor; text-decoration: none; }
      a:hover { transform: translate(-0.12rem, -0.12rem); box-shadow: 0.57rem 0.57rem 0 currentColor; }
      a:focus-visible { outline: 5px solid #e85d75; outline-offset: 5px; }
      strong { font-size: 1.5rem; }
      span { line-height: 1.5; }
      .empty { justify-content: center; border-style: dashed; box-shadow: none; }
      @media (prefers-reduced-motion: reduce) { a { transition: none; } }
    </style>
  </head>
  <body>
    <main>
      <h1>${escapeHtml(manifest.site.heading)}</h1>
      <ul>${cards}
      </ul>
    </main>
  </body>
</html>
`;
}

function makeIndexPlugin(manifest) {
  return {
    name: "makevibe-published-index",
    resolveId(id) {
      return id === virtualEntry ? resolvedVirtualEntry : null;
    },
    load(id) {
      return id === resolvedVirtualEntry ? "export {};" : null;
    },
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const pathname = request.url?.split("?")[0];
        if (pathname !== "/" && pathname !== "/index.html") {
          next();
          return;
        }

        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end(renderPublishedIndex(manifest));
      });
    },
    generateBundle(_options, bundle) {
      for (const [fileName, output] of Object.entries(bundle)) {
        if (
          output.type === "chunk" &&
          output.facadeModuleId === resolvedVirtualEntry
        ) {
          delete bundle[fileName];
        }
      }

      this.emitFile({
        type: "asset",
        fileName: "index.html",
        source: renderPublishedIndex(manifest),
      });
    },
  };
}

export default defineConfig(() => {
  const manifest = readManifest();
  validateProjectFolders(manifest.projects);

  const input = { makevibe: virtualEntry };
  for (const project of manifest.projects) {
    input[project.slug] = resolve(projectsRoot, project.slug, "index.html");
  }

  return {
    root: projectsRoot,
    base: "./",
    plugins: [makeIndexPlugin(manifest)],
    build: {
      outDir: resolve(repositoryRoot, "dist"),
      emptyOutDir: true,
      rollupOptions: { input },
    },
  };
});
