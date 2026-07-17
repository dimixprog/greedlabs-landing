---
title: "Market Maker Call Options: How They Work (and Fair Terms)"
description: "In a token loan deal, a market maker is often paid with call options — the right to buy loaned tokens later at preset strike prices. Here is how the instrument works, what fair strikes and sizing look like, and the terms to push back on."
date: 2025-06-17
updated: 2025-06-17
author: "GREED Labs"
image: "/blog/covers/market-maker-call-options.svg"
takeaways:
  - "Call options give the market maker the right to buy loaned tokens at a preset strike."
  - "Fair strikes are laddered above the current price, with capped size and clear expiry."
  - "Deep in-the-money or open-ended grants hand over too much upside."
tags:
  - market-making
  - pricing
  - guide
draft: false
faq:
  - question: "What is a market maker call option?"
    answer: "It's the right — not the obligation — for the market maker to buy a set amount of your tokens at a preset strike price before an expiry date. It's a common way to compensate a market maker in a token loan deal instead of paying cash."
  - question: "What are fair strike prices for market maker options?"
    answer: "Fair strikes are typically laddered above the current price, so the market maker profits only if the token appreciates — aligning them with growth. Strikes set below or at the current price hand over cheap upside and deserve scrutiny."
  - question: "How much of my supply should be under option?"
    answer: "Enough to motivate the market maker, but capped and time-bound. Oversized option grants with long or open-ended expiries transfer more value than most deals need, so size and duration should be explicit and limited."
---

**In a token loan deal, a market maker is often compensated with call options — the right to buy loaned tokens later at preset strike prices. Understanding strikes, sizing, and expiry is how you avoid handing over more upside than the service is worth.** This is the deep dive on the instrument itself; for how it fits against the alternative (a cash retainer), see [Loan vs. Retainer](/blog/loan-vs-retainer-market-maker).

## What a call option is here

A call option gives the market maker the **right, not the obligation**, to buy a set amount of your tokens at a fixed **strike price** before an **expiry**. If the token is above the strike, the option is valuable; if below, it simply goes unused.

## How it compensates the market maker

Their profit is the gap between the market price and the strike. So the option is worth more as your token appreciates — which is the point: it **ties their upside to your token's performance** rather than charging you cash upfront. See the [glossary](/blog/market-making-glossary) for definitions.

- **In-the-money (ITM)** — market price above strike; option has value now.
- **Out-of-the-money (OTM)** — market price below strike; no value yet.

## Why projects use it

- **Low upfront cash** — useful for token-rich, cash-poor teams.
- **Aligned incentives** — the market maker benefits when the token does well.

## What fair terms look like

- **Strikes laddered above the current price** — so the market maker earns only on genuine appreciation.
- **Capped size** — a defined, limited amount of supply under option.
- **Clear expiry** — a bounded time window, not open-ended.

## Terms to push back on

- **Deep in-the-money strikes** — cheap upside handed over on day one.
- **Oversized grants** — too much supply under option.
- **No expiry or caps** — open-ended exposure.

These are exactly the kind of clauses covered in [Red Flags in a Market Maker Contract](/blog/market-maker-contract-red-flags).

Structured well, call options fund liquidity while keeping everyone pointed at the same goal — and structuring them fairly is part of how we work.
