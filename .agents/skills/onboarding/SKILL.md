---
name: onboarding
description: Use before the first MakeVibe project, when the managed profile in AGENTS.md is pending, or when the child asks to change their preferences. Collects only a nickname, age range, language, tone, and interests. Do not use for ordinary project changes or to collect personal details.
---

# Onboarding

Set up the child-friendly preferences in the managed profile block of `AGENTS.md`.

## Procedure

1. If unattended or in autopilot, stop and ask to continue interactively. Otherwise, explain in one short sentence that you will ask a few questions.
2. Ask, one at a time:
   - A nickname that is not their full name. They may skip it.
   - An age range, not an exact age: `under 8`, `8-10`, `11-13`, or `14-17`.
   - The language MakeVibe should use.
   - A tone such as playful, calm, curious, or straight-to-the-point.
   - A few safe interests or things they enjoy making. Do not ask for school, location, accounts, friends' names, or other identifying details.
3. From the language answer onward, communicate in that language.
4. Show a compact summary and let the child correct it.
5. If they chose a nickname, ask separately whether they want it shown in the repository README.
6. Replace only the content between `<!-- makevibe-profile:start -->` and `<!-- makevibe-profile:end -->`. Set `Status` to `complete`. Keep skipped fields empty.
7. Replace only the content between `<!-- makevibe-overview:start -->` and `<!-- makevibe-overview:end -->` in `README.md`, preserving the markers:
   - Use the selected language.
   - Title it `MakeVibe`, or a natural localized equivalent of `<nickname>'s MakeVibe` only after explicit nickname consent.
   - Add one short welcome about safely making web apps.
   - Add an `Ideas to try` section with up to three prompts based on the stated interests.
   - Do not include age range, tone, or other profile details.
8. Review the diff to ensure only the managed profile and overview changed.
9. Commit `AGENTS.md` and `README.md` with `chore: complete MakeVibe onboarding`.

## Re-onboarding

Read the current values first. Ask only what the child wants to change and update the managed profile. Update the managed README overview only when language, interests, nickname, or nickname-display consent changes. Never overwrite content outside the markers.

## Gotchas

- Record only values the child states.
