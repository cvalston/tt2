---
workflow: motion-graphics
flow: automation
storyboard: no
message: "InnerShift — generate your personalized session"
destination: web
aspect: 1920x1080
language: en
length: 8s
angle: logo-reveal + kinetic-type sting
---

## Intent

A short, cheap brand sting for InnerShift (a calm-intelligence / personalized
audio-session app, theme "Quiet Signal Dusk"), not a full product-launch
video. No live UI screens shown, no capture step run — built directly from
the app's own real design tokens (Prism CSS system: canvas #07090b, ink
#e8ecef, teal-400 #4ab3a2 accent, amber-400 #e6b258 secondary accent,
Fraunces display / IBM Plex Sans body / DM Mono utility) read straight out
of `index.html`'s `:root` block, plus real Google Fonts files fetched
directly (no browser capture needed for a text-only piece).

## Notes

- Deliberately minimal build: single standalone composition (no sub-frames,
  no transitions.mjs, no per-frame subagent dispatch) to keep this cheap,
  per explicit user request to "go small" after the LyriaStudio build's cost.
- Silent (no VO/BGM), same constraint as the LyriaStudio piece.
- Copy pulled from the app's own real strings: the eyebrow label
  "Quiet Signal · Dusk", the h1 wordmark "InnerShift", and the primary CTA
  "Generate Personalized Session" — nothing invented.
