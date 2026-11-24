// SPDX-License-Identifier: MIT
// Famous Last Words at 1 Percent — a phone's final line as its battery dies.
//
// The entry is one line of at most 199 characters, written to
// /output/entry.txt. The program self-checks the gate before writing:
// a single line, 1-199 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Battery at 1%. My last words: I know your passcode, your ex's name, and everything you searched at 3 a.m. I'm taking it all with me.";

function validate(line: string): string {
  const text = line.trim();
  if (text.length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.length > 199) {
    throw new Error(`entry is ${text.length} characters, over the 199 limit`);
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  return text;
}

const entry = validate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
