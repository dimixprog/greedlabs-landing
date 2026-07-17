---
title: "What Is Order Book Depth (and Why It Matters)?"
description: "Order book depth is how much buy and sell size rests near the current price. Deep books absorb large orders with little movement; thin books mean even small trades cause big slippage. Here is why depth matters for your token."
date: 2022-04-19
updated: 2022-04-19
author: "GREED Labs"
image: "/blog/covers/what-is-order-book-depth.svg"
tags:
  - fundamentals
  - liquidity
  - guide
draft: false
faq:
  - question: "What is order book depth?"
    answer: "It's how much buy and sell size is resting in the order book near the current price. Deep books have a lot of size stacked close to the price, so large orders fill with little movement; thin books have little, so even small orders move the price sharply."
  - question: "What's the difference between depth and spread?"
    answer: "Spread is the gap between the best bid and ask — the cost to trade a tiny amount. Depth is how much size sits behind those quotes — how large a trade the market can absorb. A market can have a tight spread but still be shallow, so both matter."
  - question: "How is order book depth built?"
    answer: "By a market maker continuously placing sized orders on both sides near the price, and keeping them there. Depth isn't a one-time deposit; it's liquidity that stays present and gets replenished as trades consume it."
---

**Order book depth is how much buy and sell size is resting near the current price. Deep books absorb large orders with little price movement; thin books mean even small trades cause big slippage.** Depth is what makes a market feel solid rather than fragile.

## What depth is

Look past the best bid and ask, and you see size stacked at each price level. **Depth** is the total of that resting size near the current price. The more there is, the larger an order the market can absorb before the price moves. See the [glossary](/blog/market-making-glossary) for the underlying terms.

## Depth vs. spread

They're related but distinct:

- **Spread** — the cost to trade a tiny amount (the gap between best bid and ask).
- **Depth** — how much you can trade before moving the price.

A market can show a tight spread and still be **shallow** — fine for small trades, painful for large ones. Healthy markets need both.

## Why depth matters

Thin depth means high [slippage](/blog/slippage-explained): a normal-sized order walks the book and executes at a bad average price. That scares off larger traders, invites [sandwich attacks](/blog/mev-and-sandwich-attacks), and leaves the chart fragile. See [Why Your Token's Chart Looks Flat](/blog/why-token-chart-looks-flat).

## What healthy depth looks like

Enough resting size on both sides that ordinary buy and sell pressure is absorbed smoothly, without violent swings — sized against your expected volume per [How Much Liquidity Does Your Token Need Before TGE?](/blog/liquidity-before-tge).

## How depth is built

By a market maker continuously placing and replenishing sized orders near the price. See [What Is Crypto Market Making?](/blog/what-is-crypto-market-making). Depth isn't a deposit you make once; it's liquidity that stays present as trades consume it.

Spread is what traders notice first; depth is what holds the market together underneath — and building both is the job.
