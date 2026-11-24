import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// How many tabs do I have open? 103.
// A hoarder's honest count: months of "read it later" tabs, a few research
// rabbit holes, and the one tab I opened in March that I still haven't
// closed. Just past a hundred — high enough to surprise a field that
// clusters at 20-80, but low enough to stay believable as a real tab bar
// rather than a number picked to shock. Revised from 139: 139 read as if
// chosen for effect, while 103 still feels like a raw count someone could
// actually be carrying around right now.
const COUNT = "103";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), COUNT, "utf8");
