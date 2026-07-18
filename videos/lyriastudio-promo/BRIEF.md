---
workflow: product-launch-video
flow: automation
storyboard: no
message: "From vibe to track in seconds"
destination: web
aspect: 1920x1080
language: en
length: 20s
angle: feature-showcase
---

## Intent

A short promo for LyriaStudio, a music-generation app. It should market the
product by walking its own UI flow — pick a vibe, pick instruments, set
tempo, pick a structural arc, generate — landing on the payoff moment. Dark,
confident, studio-tool feel: black background, amber accent, monospace
technical labels next to a friendly display face. No narration, no BGM (no
sign-in / offline TTS or music engine available in this environment) —
built as a silent, motion-first piece where on-screen kinetic type and UI
choreography carry the story.

## Assets

- lyria.html (repo root) — the real LyriaStudio UI; source of brand tokens
  (colors, fonts) and the screens the video should feature life-like,
  captured via a local static server rather than crawled from a public URL.

## Customizations

- None beyond the default feature-showcase treatment.

## Notes

- Silent video: `music: none` in STORYBOARD.md, no SCRIPT.md — audio step
  is a clean skip.
- No live URL exists for this product; captured from the local file over
  a temporary localhost server instead of a public crawl.
