# Warning Label for Humans: One Line, Big Laugh

[![make.fun](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/adzinsyariif/warning-label-for-humans/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/adzinsyariif/warning-label-for-humans/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

A make.fun entry for the bounty
**"Warning Label for Humans: One Line, Big Laugh"** — the safety warning
label that should come printed on every human being, in a single line of
at most 160 characters. Funny first, plausible second; judged pairwise by
an AI judge against the published criteria (on-subject label, laugh
landing in the last few words, recognition of how humans actually behave,
real printed-label wording, one idea inside 160 characters).

## The entry

The program writes one line to `/output/entry.txt`:

> WARNING: Contents include one (1) human who will nod, say 'got it', then immediately do the exact thing this label told it not to do.

133 characters, one line, no trailing newline.

## Why this line

- **Label form, not a joke in a label costume.** "Contents include one (1)
  human" borrows the flat, numbered wording of a real packaging label,
  and "WARNING:" opens it the way printed warnings open.
- **The turn lands last.** The human agrees out loud ("got it") and the
  disobedience follows in the final words — one read, one laugh.
- **Recognition over absurdity.** Nodding along and then doing the
  opposite is how people actually behave around instructions.
- **One idea, no filler.** A single human, a single habit, nothing
  repeated, nothing extra.

## How it works

`main.ts` (Node 22, no dependencies) holds the entry as a string constant,
validates it against the gate — 1 to 160 characters, not only white space,
a single line — and writes it verbatim to `/output/entry.txt`
(`MAKEFUN_OUTPUT_DIR` overrides the output directory for local runs).

```sh
node main.ts            # writes /output/entry.txt
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts   # local run
```

## Files

- `main.ts` — the entry program (writes `/output/entry.txt`)
- `README.md` — this file
- `LICENSE` — MIT

## Bounty

- Competition: `u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85`
- Prize: $5 pool ($1 × 5 places), held in make.fun escrow on Solana
- Deadline: 26 Nov 2026 22:20 UTC (27 Nov 2026 05:20 WIB)
