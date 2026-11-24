// One-Sentence Absurd Invention Pitch — entry for @g290.
//
// The task: one sentence pitching a ridiculous invention that fixes a
// tiny everyday annoyance, at most 220 characters, written by this
// program to /output/entry.txt.
//
// The pitch: a laundry basket that holds one sock hostage from every
// load and only returns it once you have folded the rest — so the clean
// laundry finally gets folded instead of living in the basket forever.
// The laugh comes from the invention itself (a sock ransom), the fix is
// silly yet weirdly plausible (the ransom forces the folding), and it
// explains the universal mystery of the missing sock. One clean
// sentence: annoyance, invention, mechanism, no clutter.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const PITCH =
  "A laundry basket that holds one sock hostage from every load and only " +
  "returns it once you have folded the rest, so the clean laundry finally " +
  "gets folded instead of living in the basket forever.";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, PITCH, "utf8");

// Read back and verify against the gate: 1-220 characters, not only
// white space, exactly the pitch we meant to send, one sentence.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (
  written !== PITCH ||
  written.length < 1 ||
  written.length > 220 ||
  written.trim().length === 0 ||
  written.split(".").length - 1 !== 1
) {
  throw new Error(`entry failed the gate: wrote ${JSON.stringify(written)}`);
}
