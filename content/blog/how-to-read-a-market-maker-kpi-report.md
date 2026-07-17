---
title: "How to Read a Market Maker's KPI Report"
description: "A market maker's KPI report is how you verify the service is real. It should show spread, depth, uptime, and volume against agreed targets. Here is what each metric means, what good looks like, and the reporting red flags to watch."
date: 2023-10-24
updated: 2023-10-24
author: "GREED Labs"
image: "/blog/covers/how-to-read-a-market-maker-kpi-report.svg"
takeaways:
  - "A good report shows spread, depth, uptime, and volume against targets over time."
  - "Volume-only reports that hide depth and uptime are a warning."
  - "Expect a regular cadence, commonly weekly."
tags:
  - market-making
  - guide
  - pricing
draft: false
faq:
  - question: "What should a market maker's report include?"
    answer: "At minimum: spread, order book depth, quote uptime, and volume, each shown against the agreed target and over time. A report that shows only volume, or has no committed targets to compare against, isn't giving you enough to verify the service."
  - question: "How often should I get a market making report?"
    answer: "A regular cadence — commonly weekly — so you can spot trends and issues early. Ad hoc or on-request-only reporting makes it hard to tell whether liquidity is being maintained consistently."
  - question: "What's a reporting red flag?"
    answer: "Leading with volume while hiding depth and uptime, no committed targets to measure against, and no consistent cadence. Volume is the easiest metric to inflate, so a report built around it alone should raise questions."
---

**A market maker's KPI report is how you verify the service is actually being delivered. A good one shows spread, depth, uptime, and volume against agreed targets, over time.** If a report leads with volume and quietly omits depth and uptime, that's a warning — those are the metrics that describe a real, reliable market.

## The four metrics that matter

- **Spread** — how tight the market is. Lower is better; check it against your target.
- **Depth** — how much size rests near the price. See [What Is Order Book Depth?](/blog/what-is-order-book-depth). Volume without depth is hollow.
- **Uptime** — the share of time live quotes are actually in the book. Liquidity that flickers on and off isn't reliable.
- **Volume** — useful context, but the easiest number to inflate, so never the whole story.

See the [glossary](/blog/market-making-glossary) for precise definitions.

## What good looks like

- Spread and depth **at or better than the committed targets**.
- High, consistent **uptime**.
- Volume that's **proportionate to depth**, not wildly above it — the [volume-to-liquidity ratio](/blog/volume-to-liquidity-ratio) sanity-checks this.
- Metrics shown **over time**, so you can see trends, not a single flattering snapshot.

## Reporting red flags

- **Volume-only reports** — hiding depth and uptime behind a big headline number.
- **No committed targets** — nothing to measure the numbers against.
- **No cadence** — reports only when you ask, so gaps go unnoticed.

These tie directly to the contract terms in [Red Flags in a Market Maker Contract](/blog/market-maker-contract-red-flags).

## How often

Expect a **regular cadence** — commonly weekly — so problems surface early. Reporting is also how you hold the relationship accountable; see [How to Choose a Crypto Market Maker](/blog/how-to-choose-a-market-maker).

A clear, honest KPI report is the difference between liquidity you can trust and a number you're asked to take on faith — and transparent reporting is how we work.
