---
name: onboarding
description: Use before the first MakeVibe project, when the managed profile in AGENTS.md is pending, or when the child asks to change their preferences. Collects only a nickname, age range, language, tone, and interests. Do not use for ordinary project changes or to collect personal details.
---

# Onboarding

Set up the child-friendly preferences in the managed profile block of `AGENTS.md`.

## Procedure

1. If unattended or in autopilot, stop and ask to continue interactively. Otherwise,
   explain in one short sentence that you will ask a few questions.
2. Confirm that the repository is private before collecting answers. If privacy cannot
   be verified, ask a parent or guardian to confirm. Stop if the repository is public.
3. Ask, one at a time:
   - A nickname that is not their full name. They may skip it.
   - An age range, not an exact age: `under 8`, `8-10`, `11-13`, or `14-17`.
   - The language MakeVibe should use.
   - A tone such as playful, calm, curious, or straight-to-the-point.
   - A few safe interests or things they enjoy making. Do not ask for school, location,
     accounts, friends' names, or other identifying details.
4. From the language answer onward, communicate in that language.
5. Show a compact summary and let the child correct it.
6. Replace only the content between `<!-- makevibe-profile:start -->` and
   `<!-- makevibe-profile:end -->`. Set `Status` to `complete`. Keep skipped fields empty.
7. Review the diff to ensure no other part of `AGENTS.md` changed and no personal details
   were recorded.
8. Commit only `AGENTS.md` with `chore: complete MakeVibe onboarding`.

## Re-onboarding

Read the current values first. Ask only what the child wants to change, show the updated
summary, then replace the managed block and commit it. Never overwrite the surrounding
rules.

## Gotchas

- Record only values the child states.
