import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "My fitness tracker's Sleep Score dropped to 42 because I lay there staring at the ceiling for nine straight minutes.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Gate: the entry must be 1-200 characters and not blank.
function validateEntry(text: string): string {
  const length = [...text].length;
  if (text.trim().length === 0) {
    throw new Error("Entry is empty or only whitespace.");
  }
  if (length > 200) {
    throw new Error(`Entry is ${length} characters; the limit is 200.`);
  }
  return text;
}

// Written exactly as-is: no trailing newline.
function writeEntry(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, validateEntry(ENTRY), "utf8");
}

// Write, read back, and confirm the bytes match the entry exactly.
function selfTest(): void {
  writeEntry();
  const expected = Buffer.from(ENTRY, "utf8");
  const actual = readFileSync(OUT_FILE);
  if (!actual.equals(expected)) {
    throw new Error("Self-test failed: file differs from the entry text.");
  }
  console.log(`self-test OK: ${[...ENTRY].length} chars, ${actual.length} bytes, byte-identical`);
}

if (process.argv.includes("--self-test")) {
  selfTest();
} else {
  writeEntry();
}
