---
name: create-project
description: Use when the child wants to start, make, or create a new MakeVibe web app, or when an existing simple project needs a confirmed conversion to a structured modules folder. Always starts from the bundled four-file template and may add assets when needed. Do not use for ordinary edits to an existing project or to publish one.
---

# Create a project

Create one safe browser app from `assets/project-template/`.

## Procedure

1. Read the managed profile in `AGENTS.md`. If it is pending, run the `onboarding` skill
   first. Use the selected language for every question and generated project text.
2. Help the child choose one idea. If they are unsure, offer at most three options based
   on their interests, such as:
   - a presentation or interactive story;
   - a friendly 2D or 3D game without violence;
   - a countdown, visualization, quiz, learning tool, or simple utility.
3. Ask one short question at a time until the app has a title and a one-sentence goal.
   Prefer a small first version that can grow later.
4. Decide whether the requested first version is likely to need many distinct views,
   systems, or roughly 5,000 lines of code. Default to a simple project. If it is
   clearly complex, explain in one short message that it will take longer and contain
   more parts, then ask for confirmation. If the child declines, offer a smaller first
   version or milestones. In unattended or autopilot work, do not add `modules/` without
   a prior interactive confirmation for this specific project.
5. Create a lowercase kebab-case slug using only `a-z`, `0-9`, and single hyphens. It
   must match `^[a-z0-9]+(?:-[a-z0-9]+)*$`. If `projects/<slug>/` exists, choose another
   slug with the child; never overwrite it.
6. Copy the four files from `assets/project-template/` into `projects/<slug>/`. Do not
   copy the template folder itself and do not modify the bundled template.
7. Replace every `{{PLACEHOLDER}}` in the new files. Localize visible text and
   `README.md`; use a short BCP 47 language code in the HTML `lang` attribute.
8. Use the `design-project` skill to establish the visual direction before building the
   first version. The title and one-sentence goal are already known, and the copied
   project files now provide the active project context that skill reads. If the child
   already supplied a clear visual brief, follow it without asking another style
   question.
9. Build the smallest useful first version:
   - For a simple project, use the four root files.
   - For a confirmed complex project, keep those files as stable entry points and add
     only the HTML, CSS, and JavaScript structure actually needed under `modules/`.
   - For either type, add `assets/` only when needed. Download useful external project
     data or media there and reference the local files from the app.
   - If a library may materially reduce complexity, first confirm plain browser APIs are
     not simpler, then load `references/libraries.md`.
   Do not add packages, APIs, or sensitive browser capabilities.
10. If the app has multiple client-side views, use hash navigation such as `#/play`.
   Do not use history-based routes that need a server fallback on page reload.
11. Update the project `README.md` with its layout and, for a complex project, a short
    map of its main modules.
12. Update only the section between `<!-- makevibe-projects:start -->` and
   `<!-- makevibe-projects:end -->` in the root `README.md`. Add one row linking to the
   project folder with status `Local only`. Remove the empty-state row when adding the
   first project.
13. Confirm no `{{PLACEHOLDER}}` remains, run `npm run build`, and inspect the diff.
14. Commit only the new project folder and root `README.md` with
    `feat(<slug>): create project`.
15. Tell the child, in one short message, that they can run `npm run dev` and open
    `http://localhost:5173/<slug>/`.

## Convert an existing project

Use this procedure when a simple project approaches 5,000 physical lines of HTML, CSS,
and JavaScript or becomes difficult to navigate.

1. Describe the readability problem and name the main pieces that could move.
2. Explain briefly that a complex structure has more parts and may take longer to work
   with. Ask for explicit confirmation before creating `modules/`.
3. If confirmed, make one focused refactor. Keep `index.html`, `styles.css`, and
   `script.js` as stable entries that reference the new modules.
4. Update the project README with a compact module map, build, and commit the refactor.
5. If declined, keep the simple layout and improve it without adding folders.

## Gotchas

- Never put PII in source, data, filenames, or media metadata. A first name or nickname
  is allowed only when the child explicitly asks to use it in this app.
- An `assets/` folder is optional for both project types and does not require complexity
  confirmation. Never create empty folders in advance.
- `modules/` defines a complex project. It is not a second template.
- Use a library only when it meaningfully helps. Verify its current stable version and
  free open-source license, then pin that exact version on a reputable HTTPS CDN. Never
  use `@latest`.
- Use hash routing for SPA navigation on GitHub Pages.
- Creating a project does not approve it for publication.
