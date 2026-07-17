---
title: "CEX vs. DEX Market Making: What's the Difference?"
description: "CEX market making quotes two-sided orders on an exchange order book; DEX market making supplies and actively manages assets in an AMM liquidity pool. Here is how each works, the risks, and why most tokens need both."
date: 2026-05-19
updated: 2026-05-19
author: "GREED Labs"
image: "/blog/covers/cex-vs-dex-market-making.svg"
tags:
  - market-making
  - fundamentals
  - guide
draft: false
faq:
  - question: "Do I need a market maker on both CEX and DEX?"
    answer: "Most token projects do. DEX liquidity supports on-chain traders and price discovery from day one, while CEX market making is usually required to list and reach a larger audience. The two work together rather than replacing each other."
  - question: "Is providing Uniswap liquidity the same as market making?"
    answer: "Not quite. Depositing into a pool is passive liquidity provision. Professional DEX market making actively manages concentrated liquidity ranges, rebalances as price moves, and hedges impermanent loss to keep the market tight and efficient."
  - question: "Which comes first, CEX or DEX?"
    answer: "Many tokens launch on a DEX first because it needs no listing approval, then add CEX market making as centralized listings come online. The right sequence depends on your launch plan and target venues."
---

**The difference comes down to mechanism: on a centralized exchange (CEX) a market maker quotes two-sided orders on an order book, while on a decentralized exchange (DEX) it supplies and actively manages assets in an automated market maker (AMM) liquidity pool.** They solve the same problem — keeping a token liquid and tradable — in structurally different ways, and most token projects end up needing both.

This guide breaks down how market making works on each, the risks unique to each, and how to decide where your token needs liquidity first.

## Market making on a CEX

On a centralized exchange, liquidity lives in an **order book**. A market maker continuously posts **two-sided quotes** — a bid and an ask — and updates them as the market moves. See [What Is Crypto Market Making?](/blog/what-is-crypto-market-making) for the fundamentals.

The job is measured by three things:

- **Spread** — how tight the gap is between the best bid and best ask
- **Depth** — how much size rests near the current price
- **Uptime** — what percentage of the time live quotes are actually in the book

CEX market making requires **inventory** (token and stablecoin balances on the exchange), low-latency infrastructure, and risk management to avoid being run over during volatility. Because thin books scare traders away, many exchanges require a **market making commitment** before they will list a token. See [How to Get Listed on a CEX](/blog/how-to-get-listed-on-cex).

## Market making on a DEX

On a decentralized exchange, most liquidity sits in an **AMM liquidity pool**. Instead of matching orders, an AMM prices every trade from a formula (classically `x * y = k`) against pooled reserves. "Market making" here means supplying and managing the assets in that pool.

There are two very different levels of this:

1. **Passive liquidity provision** — depositing a token pair into a pool and leaving it. Simple, but capital-inefficient and exposed to losses.
2. **Active DEX market making** — managing **concentrated liquidity** ranges (as on Uniswap v3), rebalancing as price moves, and **hedging impermanent loss**. This keeps slippage low without locking up excessive capital.

Thin pools are the number-one cause of painful [slippage](/blog/slippage-explained) for on-chain buyers, so sizing and actively managing the pool matters as much as it does on a CEX. See [How Much Liquidity Does Your Token Need Before TGE?](/blog/liquidity-before-tge).

## Side by side

| Dimension | CEX market making | DEX market making |
| --- | --- | --- |
| Mechanism | Order book, two-sided limit orders | AMM pool / concentrated liquidity |
| Who can see the liquidity | Traders on that exchange | Anyone on-chain |
| Core metrics | Spread, depth, uptime | Pool depth, range coverage, slippage |
| Main risk | Inventory risk in volatility | Impermanent loss |
| Capital sits | On the exchange | In the on-chain pool |
| Listing approval | Usually required | None needed |

## Which does your token need?

For most launches, the answer is **both, in sequence**:

- **DEX first** — a token can trade on-chain the moment it exists, so DEX liquidity often carries the earliest price discovery at [TGE](/blog/token-launch-checklist).
- **CEX as you list** — centralized listings unlock a much larger audience but come with market making commitments to meet.

A market maker that covers both can keep your on-chain and off-chain markets consistent, so arbitrage doesn't tear your price apart across venues.

## Common mistakes

- **Treating a passive Uniswap deposit as "done"** — without active management, slippage stays high and capital sits idle.
- **Buying fake CEX volume instead of real depth** — analytics platforms flag it and it fixes nothing. See [Wash Trading vs. Legitimate Volume](/blog/wash-trading-vs-legitimate-volume).
- **Ignoring cross-venue consistency** — a tight CEX book means little if the DEX pool is thin, and vice versa.

New to any of these terms? Start with the [Crypto Market Making Glossary](/blog/market-making-glossary).

Whether your token needs order book liquidity, on-chain pool management, or both, that is exactly the market we build.
