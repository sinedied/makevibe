---
name: publish-project
description: Use when the child asks to publish, share publicly, unpublish, or remove a MakeVibe project from GitHub Pages. Requires an interactive safety review and explicit final approval before changing public state. Never use in plan, autopilot, unattended, or background operation.
---

# Publish a project

Manage the public allowlist in `projects/published-projects.json`. A listed project is
included in the next GitHub Pages build; an unlisted project is never copied to the
deployment artifact.

## Publish

1. Stop if the current operation is plan, autopilot, unattended, or background. Tell the
   child publishing needs a new interactive request.
2. Confirm the requested `projects/<slug>/` exists and contains exactly `index.html`,
   `styles.css`, `script.js`, and `README.md`.
3. Review all four files before asking for approval:
   - Content is age-appropriate and follows `AGENTS.md`.
   - No nickname, age range, contact detail, school, location, account, photo, or other
     identifying information appears.
   - There are no forms that send data, accounts, payments, ads, analytics, trackers,
     external APIs, `fetch`, XMLHttpRequest, WebSocket, or sensitive browser permissions.
   - Any dependency is a necessary browser library loaded from a reputable HTTPS CDN.
   - The app works with keyboard controls, readable contrast, mobile layout, and reduced
     motion where motion is present.
4. Run `npm run build`. Fix project problems inside its four-file boundary before
   continuing. Do not publish if review or validation fails.
5. Explain in one short sentence that the app and its visible content will be public.
   Ask for explicit final approval naming the project. Do not reuse an older approval.
6. After approval, add or update one entry in `projects/published-projects.json`:

   ```json
   {
     "slug": "project-slug",
     "title": "Project title",
     "description": "One safe sentence"
   }
   ```

   Keep entries sorted by slug. On the first publication, also set `site.language` to a
   short BCP 47 language code and translate `site.emptyMessage` into the child's selected
   language. Keep `site.heading` as `MakeVibe`. Do not add profile data.
7. Update only the matching row inside the marked projects table in the root `README.md`.
   Derive the Pages URL from the GitHub remote. For `owner/repo`, use
   `https://owner.github.io/repo/<slug>/`; for `owner.github.io`, use
   `https://owner.github.io/<slug>/`. Ask a maintainer for the base URL on GitHub
   Enterprise or when a custom domain is configured.
8. Run `npm run build` again and confirm `dist/<slug>/index.html` exists.
9. Commit only the project manifest and root README with
   `publish(<slug>): approve public release`.
10. Explain briefly that CI deploys when this commit reaches the default branch.

## Unpublish

1. Stop in plan, autopilot, unattended, or background operation.
2. Confirm the project to remove and explain that its source and history remain in the
   repository.
3. Remove its manifest entry and change its README status to `Local only`.
4. Run `npm run build` and confirm `dist/<slug>/` is absent.
5. Commit only the manifest and root README with
   `publish(<slug>): remove public release`.
6. Explain briefly that CI removes the public app when this commit reaches the default
   branch.

## Gotchas

- A published project's approval stays active for later commits until it is unpublished.
- Creating or editing a project is never implicit publishing approval.
- Never push, merge, or change repository visibility without a separate explicit request.
