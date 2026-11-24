import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My toothbrush asked me to renew its subscription, so now my teeth are paywalled.";

// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters and not only
// whitespace. Fail loudly here rather than ship an entry the scorer rejects.
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
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", validateEntry(ENTRY), "utf8");
