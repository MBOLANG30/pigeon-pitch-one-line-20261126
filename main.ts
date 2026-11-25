// Pigeon Pitch, One Line — make.fun entry.
// Writes the winning one-line elevator pitch (140 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "I'm the CEO of CooWorks: we monetize the 40 million crumbs dropped daily in this city — investors get in early, or they get pooped on later.";

// The gate requires 1-200 characters of non-blank UTF-8 text; fail loudly
// instead of writing an entry the scorer would mark invalid.
if ([...pitch].length < 1 || [...pitch].length > 200 || pitch.trim().length === 0) {
  throw new Error(`pitch must be 1-200 characters, got ${[...pitch].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
