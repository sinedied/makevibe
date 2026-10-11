---
name: create-project
description: Use when the child wants to start, make, or create a new MakeVibe web app, or when an existing simple project needs a confirmed conversion to a structured modules folder. Do not use for ordinary edits to an existing project or to publish one.
---

# Create a project

Create one safe browser app from `assets/project-template/`.

## Procedure

1. Help the child choose one idea. If they are unsure, offer at most three options based on their interests, such as:
   - a presentation or interactive story;
   - a friendly 2D or 3D game without violence;
   - a countdown, visualization, quiz, learning tool, or simple utility.
2. Agree on a title and a one-sentence goal. Prefer a small first version that can grow later.
3. Decide whether the requested first version is likely to need many distinct views, systems, or roughly 5,000 lines of code. Default to a simple project. If it is clearly complex, explain in one short message that it will take longer and contain more parts, then ask for confirmation. If the child declines, offer a smaller first version or milestones.
4. Create a kebab-case slug matching `^[a-z0-9]+(?:-[a-z0-9]+)*$`. Never overwrite an existing project folder.
5. Copy the four files from `assets/project-template/` into `projects/<slug>/`. Do not copy the template folder itself and do not modify the bundled template.
6. Replace every `{{PLACEHOLDER}}` in the new files. Localize visible text and `README.md`; use a short BCP 47 language code in the HTML `lang` attribute.
7. Use the `design-project` skill to set the visual direction.
8. Build the smallest useful first version, using `modules/` only for a confirmed complex project.
9. Update the project `README.md` with its layout and, for a complex project, a short map of its main modules.
10. Update only the section between `<!-- makevibe-projects:start -->` and `<!-- makevibe-projects:end -->` in the root `README.md`. Add one row linking to the project folder with status `Local only`. Remove the empty-state row when adding the first project.
11. Run `npm run build` and inspect the diff.
12. Commit only the new project folder and root `README.md` with `feat(<slug>): create project`.
13. Tell the child, in one short message, that they can run `npm run dev` and open `http://localhost:5173/<slug>/`.

## Convert an existing project

Use this procedure when a simple project approaches 5,000 physical lines of HTML, CSS, and JavaScript or becomes difficult to navigate.

1. Describe the readability problem and name the main pieces that could move.
2. Explain briefly that a complex structure has more parts and may take longer to work with. Ask for explicit confirmation before creating `modules/`.
3. If confirmed, make one focused refactor. Keep `index.html`, `styles.css`, and `script.js` as stable entries that reference the new modules.
4. Update the project README with a compact module map, build, and commit the refactor.
5. If declined, keep the simple layout and improve it without adding `modules/`.

## Gotchas

- Creating a project does not approve it for publication.
