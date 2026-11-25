// The Robot Apology — make.fun one-liner entry.
// A robot vacuum apologises to its human for what it swallowed.
// The joke lands on the escalation: charger, sock, then the will to
// live — and the robot blaming its own dustbin instead of itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm sorry I vacuumed up your phone charger, your lucky sock, and your will to live. I have filed a formal complaint against my own dustbin.";

const MAX_CHARS = 400;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
