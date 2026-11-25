import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const LINE =
  "I waited four billion years for someone to look up and ask \u2014 so here I am: yes, I heard you, and yes, I'm still listening.";

if (!LINE || LINE.trim().length === 0) {
  throw new Error("entry line must not be blank");
}
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(
    `entry line must be 1-240 characters, got ${LINE.length}`,
  );
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be exactly one line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
