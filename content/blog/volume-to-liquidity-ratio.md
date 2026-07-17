---
title: "Volume-to-Liquidity Ratio Explained"
description: "The volume-to-liquidity ratio compares a token's trading volume to the depth supporting it — a fast read on whether activity is proportionate. Here is how to calculate it, how to interpret the ranges, and where it misleads."
date: 2023-06-13
updated: 2023-06-13
author: "GREED Labs"
image: "/blog/covers/volume-to-liquidity-ratio.svg"
takeaways:
  - "The ratio compares trading volume to the depth supporting it."
  - "There's no magic number — read it against the token's history and peers."
  - "A very high ratio is a prompt to investigate, not proof of wash trading."
tags:
  - fundamentals
  - liquidity
  - guide
draft: false
faq:
  - question: "How do you calculate the volume-to-liquidity ratio?"
    answer: "Divide a token's trading volume over a period (commonly 24 hours) by the liquidity supporting it — either visible order book depth or the size of its pools. The result tells you how many times the standing liquidity 'turned over' in that period."
  - question: "What is a normal volume-to-liquidity ratio?"
    answer: "There is no universal number — it varies by token, venue, and market conditions. The useful comparison is relative: against the token's own history and against similar assets. What matters is spotting values that are wildly out of proportion, in either direction."
  - question: "Does a high ratio always mean wash trading?"
    answer: "No. Some tokens legitimately have high turnover. A very high ratio is a prompt to investigate, not a verdict — you confirm it by checking trade patterns and on-chain data, not by the ratio alone."
---

**The volume-to-liquidity ratio compares a token's trading volume to the depth of liquidity supporting it. It's a quick read on whether a market's activity is proportionate to the liquidity behind it** — and one of the fastest sanity checks you can run on a token. This article is about the metric itself; for the broader set of wash-trading signals, see [How to Detect Fake Volume](/blog/how-to-detect-fake-volume).

## How to calculate it

Divide **volume over a period** by **the liquidity supporting it**:

- Volume — usually the 24-hour figure.
- Liquidity — visible order book depth near the price, or the size of the token's pools.

The result is a turnover number: how many times the standing liquidity was traded through in that window. See the [glossary](/blog/market-making-glossary) for the underlying terms.

## How to read it

There's **no single correct value** — it depends on the token, venue, and conditions. Read it relatively:

- **Against the token's own history** — sudden spikes stand out.
- **Against similar tokens** — wildly different values invite questions.

A **moderate** ratio is what healthy, organically traded markets usually show: real volume, proportionate to real depth.

## When a high ratio is a red flag

When volume is many multiples of a thin book, it's a classic sign of fabricated activity — the market is "trading" far more than its liquidity could realistically support. But treat it as a **prompt to investigate**, not proof; confirm with trade-pattern and on-chain checks per [How to Detect Fake Volume](/blog/how-to-detect-fake-volume).

## Limitations

- **Venue differences** — depth is measured differently across exchanges and AMMs.
- **Legitimate high turnover** — some active tokens genuinely trade a lot relative to resting liquidity.
- **It's one metric** — pair it with distribution and depth, not used alone. See [TVL vs. Liquidity](/blog/tvl-vs-liquidity).

Used with judgment, the volume-to-liquidity ratio is a fast, honest gut-check on a market's health — and building the real depth that keeps it sensible is what we do.
