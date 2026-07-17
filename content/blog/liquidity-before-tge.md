---
title: "How Much Liquidity Does Your Token Need Before TGE?"
description: "The liquidity a token needs at launch depends on target venues, expected trading volume, and acceptable price impact. Here's how to size it correctly."
date: 2021-07-22
updated: 2021-07-22
author: "GREED Labs"
image: "/blog/covers/liquidity-before-tge.svg"
takeaways:
  - "Launch liquidity should be sized to expected volume and acceptable price impact."
  - "Too little liquidity means violent price swings and scared-off buyers at launch."
  - "A market maker sizes and maintains this against your TGE plan."
tags:
  - token-launch
  - liquidity
draft: false
faq:
  - question: "What happens if I launch with too little liquidity?"
    answer: "A thin launch means even modest orders move the price sharply, so buyers face high slippage and the chart gaps up and down erratically. That volatility scares off the very traders you want, and early holders may dump into an order book too shallow to absorb them. See our guide on slippage for how thin depth translates into worse fills."
  - question: "Is more liquidity always better?"
    answer: "Not quite. Deeper books absorb larger trades with less price impact, but every dollar of depth is capital that could be working elsewhere, and spreading it too thin across many venues helps nobody. The goal is enough depth to handle expected launch-day flow at your target price impact, not the maximum you can fund."
  - question: "Who provides launch liquidity?"
    answer: "Typically it is a split. The project treasury seeds the initial DEX pool or exchange inventory, and a market maker actively manages and maintains depth on both sides after launch. The treasury supplies the capital; the market maker keeps it working as quotes that move with the market."
---

**Launch liquidity should be sized to absorb expected early buy and sell pressure without large price impact — driven by your target venues, projected trading volume, and the slippage you are willing to accept.** There is no universal dollar figure; the right number falls out of a few inputs specific to your launch.

## What determines the right amount

Four factors set the target:

- **Venues** — a DEX pool and a CEX order book behave differently. An AMM pool's depth is a direct function of the tokens and quote asset you deposit, while a CEX book depends on quotes a market maker actively maintains. Each venue you add needs its own liquidity.
- **Expected launch-day volume** — the more trading you anticipate in the first hours, the more depth you need to absorb it smoothly.
- **Desired max price impact** — decide how large a typical trade should be able to execute within an acceptable [slippage](/blog/slippage-explained) band. Tighter tolerance means deeper books.
- **FDV and float** — a high fully diluted valuation with a small circulating float is easy to move, so it demands proportionally more depth to stay stable.

## Sizing framework

Work backward from the trade you want to support, not forward from a budget.

Start with a target: *a typical trade of size X should execute within Y% price impact.* From there, estimate the depth required at that price band, then multiply across the venues you are launching on. More venues means the same capital is spread thinner, so plan per venue rather than as one lump sum.

The numbers below are illustrative examples to show the shape of the trade-off, not guarantees:

| Target trade | Acceptable impact | Rough depth needed per venue |
| --- | --- | --- |
| Small ($1k) | 1% | Modest |
| Mid ($10k) | 1% | ~10x the small case |
| Large ($50k) | 0.5% | Substantially deeper |

The pattern matters more than any single row: tighter impact and larger trades both push required depth up quickly, and every additional venue multiplies the total. A market maker models this against your specific FDV, float, and venue mix.

## Common mistakes

- **Launching too thin.** The most common error. A shallow book turns ordinary early flow into violent price swings and high slippage.
- **Concentrating everything on one venue.** If all your liquidity sits in a single pool while trading happens elsewhere, those other venues are effectively unusable.
- **No market maker after the initial pool.** Seeding a DEX pool at launch is not the same as maintaining depth. Without ongoing management, the book decays as the market moves and inventory drifts to one side.
- **Ignoring one side of the book.** Depth on the buy side without the sell side (or vice versa) still leaves traders with poor fills in the direction that matters.

Sizing launch liquidity is where treasury planning meets execution. The treasury funds the initial depth; a [market maker](/blog/token-launch-checklist) keeps that depth healthy on every venue, on both sides, as real trading begins.

## Related reading
- [Token launch checklist](/blog/token-launch-checklist)
- [Slippage explained](/blog/slippage-explained)

**Related reading:** [How to Set Up a Liquidity Pool](/blog/how-to-set-up-a-liquidity-pool) · [Why Your Token's Chart Looks Flat](/blog/why-token-chart-looks-flat) · [Crypto Market Making Glossary](/blog/market-making-glossary)
