---
title: "How to Set Up a Liquidity Pool for a DEX Launch"
description: "Setting up a liquidity pool means choosing a pair and venue, setting the opening price and depth, and — on concentrated-liquidity AMMs — a price range. Size and range decide how much slippage early traders face. Here is the step-by-step."
date: 2024-05-14
updated: 2024-05-14
author: "GREED Labs"
image: "/blog/covers/how-to-set-up-a-liquidity-pool.svg"
takeaways:
  - "Choose the pair and venue, set the opening price, then size the depth."
  - "On v3 AMMs you also set a price range that needs active management."
  - "Thin or unmanaged pools cause slippage and MEV at launch."
tags:
  - liquidity
  - token-launch
  - guide
draft: false
faq:
  - question: "How much liquidity do I need in a launch pool?"
    answer: "Enough depth to absorb early buy and sell pressure without large price swings. The right number depends on expected volume and trade sizes, but a thin pool guarantees painful slippage and MEV exposure at launch."
  - question: "Do I need to actively manage a liquidity pool?"
    answer: "On concentrated-liquidity AMMs, yes. A passive deposit drifts out of range as the price moves and stops providing useful liquidity. Active management keeps the range around the price, rebalances, and hedges impermanent loss."
  - question: "What pair should I launch with?"
    answer: "Usually your token paired with a widely held quote asset — a major stablecoin or the chain's native asset — so traders can enter and exit easily. The choice affects how deep and stable the market feels."
---

**Setting up a liquidity pool means pairing your token with a quote asset, setting an opening price and depth, and — on concentrated-liquidity AMMs — choosing a price range. Size and range determine how much slippage your first traders face.** A pool is easy to create and easy to get wrong; these steps cover the decisions that actually matter.

For where a DEX launch fits in the bigger picture, see [CEX or DEX First](/blog/cex-vs-dex-first-launch).

## Step 1 — Choose the pair and venue

Pair your token with a **widely held quote asset** (a major stablecoin or the chain's native token) on a DEX your audience uses. The pair shapes how easily people can enter and exit.

## Step 2 — Set the opening price

The ratio of the two assets you deposit sets the starting price. Get this deliberately right — a careless opening price invites instant arbitrage and a chaotic first candle.

## Step 3 — Size the depth

Deposit enough that early buy and sell pressure doesn't swing the price wildly. Thin pools mean heavy [slippage](/blog/slippage-explained) and easy [sandwich attacks](/blog/mev-and-sandwich-attacks). Size it against expected volume — see [How Much Liquidity Does Your Token Need Before TGE?](/blog/liquidity-before-tge).

## Step 4 — Set the range (concentrated liquidity)

On v3-style AMMs, you choose the **price range** your liquidity covers. A tight range is capital-efficient but drifts out of use if the price leaves it; a wide range is safer but thinner. This is a deliberate trade-off, not a default.

## Step 5 — Manage it

A pool isn't "set and forget." As the price moves, liquidity needs **rebalancing**, the range needs adjusting, and **impermanent loss** needs hedging. Passive deposits quietly stop working. See the [glossary](/blog/market-making-glossary) for the terms.

## Common mistakes

- **Too thin** — guarantees slippage and MEV at launch.
- **Wrong range** — liquidity sits where nobody trades.
- **No management** — the pool drifts out of range and dies. See [Why Your Token's Chart Looks Flat](/blog/why-token-chart-looks-flat).

A launch pool sized and managed properly is the difference between a smooth first week and a broken chart — and setting that up is exactly what we do.
