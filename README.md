# How Many Tabs Do You Have Open?

[![make.fun](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![Rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/masoplek1011/u-danu-how-many-tabs-do-you-have-open-d86e783d/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![Reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/masoplek1011/u-danu-how-many-tabs-do-you-have-open-d86e783d/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)

An honest answer to a simple question: how many browser tabs do I have open
right now? The program writes a single number — digits only, nothing else —
to `entry.txt`. The count is a tab hoarder's real, lived-in number: three
digits, odd, just over a hundred, built up over months of "read it later"
tabs, research rabbit holes, and the one tab from March that still hasn't
been closed. Surprising next to a field that clusters at 20–80, but a number
a real person could genuinely have open right now.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/tabs-run node main.ts
cat /tmp/tabs-run/entry.txt
```

Requires Node 22.18 or later. The program is fully deterministic, uses only
the Node standard library, makes no network calls, and writes only to the
directory given by `MAKEFUN_OUTPUT_DIR` (default `/output`).
