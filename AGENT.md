# AGENT.md

**Entry:** one 80-character line roasting a daily gadget (a toothbrush with a subscription).

**How main.ts works:** it holds the line as a constant, `validateEntry` checks the gate (not blank, at most 200 characters, throws otherwise), then it writes the text exactly, with no trailing newline, to `/output/entry.txt`.

**Run:** `node main.ts` (Node 22+ runs TypeScript directly). Output is deterministic: 80 bytes, sha256 `edecd5a4a256fc1c817f7c2157d3494c2ce26b54636583d5850ecc6016a99590`.
