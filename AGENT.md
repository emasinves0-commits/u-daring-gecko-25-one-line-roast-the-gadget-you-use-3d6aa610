# AGENT.md

## The entry

A fitness-tracker roast, 116 characters:

> My fitness tracker's Sleep Score dropped to 42 because I lay there staring at the ceiling for nine straight minutes.

It replaces the earlier toothbrush-subscription line.

## How main.ts works

- Holds the entry as a single constant.
- `validateEntry()` rejects blank text and anything over 200 characters.
- Creates `/output` if needed and writes `/output/entry.txt` as UTF-8, with no trailing newline.
- `--self-test` writes the file, reads it back and checks it is byte-identical to the entry.

Run with `bun main.ts` or `bun main.ts --self-test`.

## Measured output

`/output/entry.txt`: 116 bytes, 116 characters, sha256
`628b79daac4d0f56d076d09ba20a34830f324dfd86b97aa5f63fc7c3875648d5`
