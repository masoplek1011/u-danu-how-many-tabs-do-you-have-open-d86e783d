import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// How many tabs do I have open? 139.
// A hoarder's honest count: months of "read it later" tabs, a few research
// rabbit holes, and the one tab I opened in March that I still haven't
// closed. Three digits, odd, just over a hundred — surprising next to a
// field that clusters at 20-80, but a number a real person could have open
// right now. Revised from 137: 139 reads less like a number picked for its
// fame and more like a raw count read straight off the tab bar.
const COUNT = "139";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), COUNT, "utf8");
