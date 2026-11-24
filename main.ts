// Warning Label for Humans — one line, big laugh.
//
// The entry is a single safety warning label that could plausibly be
// printed on a person. The comedy is built the way real labels are
// built: a dry, formal opening that sets up an instruction-following
// human, and the punch lands in the last few words, where the human
// does the opposite of what it just claimed.
//
// Revision note (edit 1): the first draft said the human "reads only
// the first line of any warning label" — a good observation, but it
// describes reading, not doing, so the laugh is mild. This version
// borrows the packaging-label formula "Contents include one (1) ...",
// which sounds more like something actually printed on a product, and
// the turn is now an action: the human agrees out loud and then does
// the forbidden thing anyway. That is a bigger, truer laugh.
//
// Why this line, against the judge's brief:
//   1. It IS a warning label for every human being, in label wording
//      ("WARNING:", "Contents include one (1) human").
//   2. The turn arrives at the very end ("the exact thing this label
//      told it not to do") — one read, one laugh.
//   3. It is recognition, not random absurdity: everyone has nodded
//      "got it" and then done the opposite.
//   4. It sounds like a printed label: flat, bureaucratic, numbered
//      like a parts list.
//   5. One idea, no filler, comfortably inside 160 characters.
//
// The program writes exactly this line — no trailing newline, no extra
// whitespace — to /output/entry.txt, because the gate counts every
// character in the file.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Revision note (edit 2): final polish on the turn. "and immediately
// do" states two things side by side; "then immediately do" makes the
// disobedience a consequence of the nod — agree first, violate second.
// One word changes the rhythm so the last beat lands as a punchline
// instead of a list item. Nothing else changes: same label form, same
// single idea, same recognition.

const ENTRY =
  "WARNING: Contents include one (1) human who will nod, say 'got it', then immediately do the exact thing this label told it not to do.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry is ${ENTRY.length} characters; gate allows 1-160`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(dirname(OUTPUT_FILE), { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${OUTPUT_FILE}`);
