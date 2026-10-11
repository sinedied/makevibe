---
name: publish-project
description: Use when the child asks to publish, share publicly, unpublish, or remove a MakeVibe project from GitHub Pages. Requires an interactive safety review and explicit final approval before changing public state. Never use in plan, autopilot, unattended, or background operation.
---

# Publish a project

Manage the public allowlist in `projects/published-projects.json`. A listed project is included in the next GitHub Pages build; an unlisted project is never copied to the deployment artifact.

## Publish

1. Stop if the current operation is plan, autopilot, unattended, or background. Tell the child publishing needs a new interactive request.
2. Confirm `projects/<slug>/` has no uncommitted changes, then review every root and nested file before asking for approval:
   - Content is age-appropriate and follows `AGENTS.md`.
   - No PII appears in source, visible text, data, filenames, media, or media metadata. A first name or nickname is allowed only if the child explicitly chose it for this app.
   - There are no accounts, payments, ads, analytics, trackers, forms that collect personal data, or sensitive browser permissions.
   - Every dependency is necessary, free and open source, and loaded from a reputable HTTPS CDN with an exact stable version. Reject `@latest` and unversioned URLs.
   - Project data and assets are appropriate, owned or safe to reuse, free of identifying metadata, contain no active scripts, and load locally. The app makes no external API or live connection; pinned library CDN files and external fonts are the only remote exceptions.
   - Multi-view SPA navigation uses URL hashes and does not depend on server fallback for history-based paths.
   - The app works with keyboard controls, readable contrast, mobile layout, and reduced motion where motion is present.
3. Run `npm run build`. If the project needs fixes, make, validate, and commit them separately, then restart the review. Do not publish if review or validation fails.
4. Derive the Pages URL from the GitHub remote: `https://owner.github.io/repo/<slug>/`, or `https://owner.github.io/<slug>/` for an `owner.github.io` repository. Ask a maintainer for custom domains or GitHub Enterprise.
5. Say in one short sentence that the app will be public at that URL, which shows the GitHub account and repository names. Name any allowed first name or nickname that appears. Ask for final approval naming the project. Do not reuse an older approval.
6. After approval, add or update one entry in `projects/published-projects.json`:

   ```json
   {
     "slug": "project-slug",
     "title": "Project title",
     "description": "One safe sentence"
   }
   ```

   Keep entries sorted by slug. On the first publication, also set `site.language` to a short BCP 47 language code and translate `site.emptyMessage` into the child's selected language. Keep `site.heading` as `MakeVibe`.

7. Update only the matching row in the marked projects table of the root `README.md` with the public URL.
8. Run `npm run build` again and confirm `dist/<slug>/index.html` exists.
9. Commit only the project manifest and root README with `publish(<slug>): approve public release`.
10. Explain briefly that CI deploys when this commit reaches the default branch.

## Unpublish

1. Stop in plan, autopilot, unattended, or background operation.
2. Confirm the project to remove and explain that its source and history remain in the repository.
3. Remove its manifest entry and change its README status to `Local only`.
4. Run `npm run build` and confirm `dist/<slug>/` is absent.
5. Commit only the manifest and root README with `publish(<slug>): remove public release`.
6. Explain briefly that CI removes the public app when this commit reaches the default branch.

## Gotchas

- Never push, merge, or change repository visibility without a separate explicit request.
