---
format: 1920x1080
message: "From vibe to track in seconds"
arc: Hook (product name) → Feature walk (vibe → instruments → tempo → arc) → Payoff (generate)
audience: musicians and creators who want fast, mood-driven music generation
mode: autonomous
music: none
---

## Video direction

- **Palette system** (from `frame.md`): `ink-black` (#080808) is the only ground; `cream` (#F0ECE4) carries all reading/display text on it; `fire-orange` (#F5A623) is the single accent — selection glows, underlines, the cursor, and the one "in seconds." beat. No second hue anywhere.
- **Motion grammar**: long-tail `power3` eases throughout, no bounce. This is a **silent** video (no VO/SCRIPT.md — no offline TTS/BGM engine available) — reveals pace to a fixed internal beat rhythm instead of spoken cues, but the same anti-front-load discipline applies: nothing appears before its beat, and each frame develops across its full duration rather than dumping at t=0.
- **Rhythm / held-frame allocation**: Frame 1 ends on a held wordmark close-up (breather before the demo). Frame 2 is the busiest frame (four live UI beats) — deliberately the most kinetic stretch. Frame 3 alternates two hard-cut type beats then holds still on the closing brand mark.
- **Negative list**: no purple/blue "AI" gradients, no drop shadows, no rounded glass cards, no browser chrome/real cursor, no second accent color. Avoid both failure modes: slideshow (front-load-then-freeze) and screensaver (elements drifting with no causal link to the beat).

## Frame 1 — Cold open

- scene: LyriaStudio wordmark ignites on black, amber accent underline draws in
- duration: 5s
- poster: 2s
- transition_in: cut
- status: outline
- src: compositions/frames/01-hook.html
- blueprint: logo-assemble-lockup (Adapt — brand-reveal-assemble-zoom variant)
- focal: text-built wordmark lockup ("Lyria" cream + "Studio" amber + β superscript, from `lyria.html`'s own `.logo` markup — no image asset)
- roles: n/a — no captured image asset, the lockup is built from type
- sfx: soft riser into a light pop on the wordmark's arrival

Cold open on the product name. Pure typography on black — the amber accent
introduces itself as the single hero color, the mono tagline sets the
register before any UI is shown.

Adapt: keep the "companion tagline types out, then hero mark pops in beside
it, camera pushes to a held close-up" shape; drop the concentric-ring
ignite (no motif asset here) in favor of a bare black field.

Scene 1 (0.0–1.6s): solid ink-black field. Mono tagline "pick a vibe. get a
track." types on character-by-character dead-center in cream, a thin
blinking caret trailing — Centered, ~20% of frame, single depth layer.
Scene 2 (1.6–3.0s): the tagline shrinks and drifts up as the wordmark pops
in dead-center on a spring — "Lyria" in cream, "Studio" in amber, the β
superscript settling top-right of the mark — Centered, ~45% of frame.
Scene 3 (3.0–5.0s): camera slow push-IN toward the held wordmark; a thin
amber underline draws left→right beneath it and holds. Frame reads STILL
— only a faint glow pulse keeps it alive, no continued push. Centered,
held read.

## Frame 2 — Vibe to track

- scene: The app's own vibe grid, instrument grid, and tempo strip light up in sequence as a cursor drives them, each choice snapping into place with an amber highlight
- duration: 9s
- transition_in: crossfade
- status: outline
- src: compositions/frames/02-feature-walk.html
- blueprint: cursor-ui-demo (Adapt — Key_Feature variant)
- focal: four reconstructed panels — vibe grid, instrument grid, tempo strip, energy-arc buttons — rebuilt as real DOM/GSAP elements from `frame.md` tokens (not screenshots), matching `lyria.html`'s own `01/VIBE`–`05/ENERGY ARC` sections
- roles: reconstructed-ui = cutout, driven live by the cursor each beat; panel labels/chrome = supporting
- sfx: a soft click-tick on each of the four selections; a light whoosh on each camera pan

The feature walkthrough — the video's own content doubles as the demo. The
custom amber cursor is the actor; the UI answers live, beat by beat: pick a
vibe → pick instruments → set tempo → pick an energy arc.

Adapt: keep the cursor-driven live-UI signature and the whip-pan chase
between beats; four beats instead of cursor-ui-demo's default 2–4 range,
tuned to this frame's four sections.

Scene 1 (0.0–1.8s): the "01 / VIBE" panel is present, an 8-tile grid
(Chill/Epic/Dark/Happy/Romantic/Tense/Dreamy/Energy) on ink-black. The
amber cursor enters from off-frame and CLICKS "Epic" — the tile SELECTS
(amber border + glow), the rest dim slightly — asymmetric 60/40, cursor +
panel foreground, other panel labels faint below as depth.
Scene 2 (1.8–4.0s): camera whip-pans down to "03 / INSTRUMENTS"; the
cursor clicks "Synth" then "Drums" in quick succession, each tile
SELECTS with an amber glow and a soft press-compress — asymmetric 60/40,
3 depth layers (selected tiles foreground, grid midground, section label
background).
Scene 3 (4.0–6.4s): camera pans to "04 / TEMPO"; the cursor DRAGS the
slider thumb rightward, the live readout climbs ("Laid-back · ~90 BPM" →
a faster mono readout), the track fill draws in amber behind the thumb —
full-width strip, thumb as hero.
Scene 4 (6.4–9.0s): camera pans to "05 / ENERGY ARC"; the cursor clicks
"Build Up" — the button SELECTS with an amber glow and a spring pop.
Camera comes to rest, static, and HOLDS on the selected state — centered,
held read.

## Frame 3 — Payoff

- scene: Everything resolves into one big "generate" moment — the word itself becomes the hero type, amber glow, then the wordmark returns as a closing tag
- duration: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/03-payoff.html
- blueprint: kinetic-type-beats (Adapt — cta-kinetic-type variant)
- focal: two kinetic type beats + the closing wordmark lockup (same construction as Frame 1)
- roles: n/a — text only, no image assets
- sfx: two hard-cut ticks (one per type beat), a soft brand chime on the final hold

Land the message. "from vibe to track" / "in seconds" sets as two
full-screen type beats, then the LyriaStudio wordmark returns as the
closing tag.

Adapt: keep the hard-cut, no-fade beat-to-beat swap and the resolve-onto-
brand-mark ending; two value beats instead of a longer value stack, since
the whole video is already the demo.

Scene 1 (0.0–2.2s): solid ink-black field. Bold Unbounded line "from vibe
to track" hard-cuts in dead-center, cream text, no roll or blur — Centered,
~40% of frame.
Scene 2 (2.2–3.8s): the line clears by a fast zoom-blur cut and "in
seconds." hard-cuts in at the same center anchor, set in amber, slightly
larger — Centered, single depth layer, the video's one accent-colored
type beat.
Scene 3 (3.8–6.0s): the amber line clears; the LyriaStudio wordmark
lockup fades/pops back in centered as the closing brand mark and HOLDS
static to the end — Centered, held read, brand outro.
