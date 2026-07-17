---
title: "Crypto Market Making Bots: How Automated Liquidity Works"
description: "A market making bot continuously places and updates buy and sell orders from rules and live market data, providing liquidity faster than any human. Here is how they work, and why the strategy and risk management matter more than the bot itself."
date: 2022-11-22
updated: 2022-11-22
author: "GREED Labs"
image: "/blog/covers/crypto-market-making-bots.svg"
takeaways:
  - "A bot places and updates two-sided quotes from rules and live market data."
  - "The hard part is strategy, inventory, and risk management — not the script."
  - "Bots sold on 'guaranteed volume' are wash-trading tools, not market making."
tags:
  - market-making
  - fundamentals
  - guide
draft: false
faq:
  - question: "What is a market making bot?"
    answer: "Software that automatically places and continuously updates two-sided buy and sell orders based on rules and live market data. It provides liquidity far faster and more consistently than a human trader could, quoting around the clock."
  - question: "Can I just run a market making bot myself?"
    answer: "You can, but doing it well is hard. It requires exchange infrastructure, inventory to quote with, latency management, and — most importantly — strategy and risk management to avoid being run over during volatility. The bot is the easy part; running it safely is the job."
  - question: "Are market making bots the same as wash-trading bots?"
    answer: "No. A legitimate market making bot builds real two-sided depth. A wash-trading bot fabricates fake volume by trading with itself, which exchanges and analytics platforms detect and penalize."
---

**A market making bot is software that continuously places and updates buy and sell orders based on rules and live market data, providing liquidity faster and more consistently than a human ever could.** Bots are the engine behind virtually all modern market making — but the strategy, inventory management, and risk controls around them are what actually determine whether a market stays healthy.

For the fundamentals of what market making is, start with [What Is Crypto Market Making?](/blog/what-is-crypto-market-making).

## What a market making bot does

At its core, a bot:

- **Quotes both sides** — posts a bid and an ask around the current price.
- **Updates continuously** — cancels and replaces orders as the market moves, keeping the [spread](/blog/market-making-glossary) tight.
- **Manages inventory** — rebalances its token and quote-asset holdings so it can keep quoting both sides.
- **Reacts to volatility** — widens or pulls quotes when risk spikes, then tightens again.

## Why the bot isn't the hard part

Buying or building a bot is easy. Running one well is not:

- **Infrastructure** — reliable, low-latency connections to each venue.
- **Inventory** — capital to quote with on both sides.
- **Risk management** — logic to avoid being picked off during sharp moves.
- **Uptime** — quotes that stay live, not liquidity that flickers on and off.

This is why most token projects use a market making service rather than running a bot in-house — the edge is in the strategy and operations, not the script. See [How to Choose a Crypto Market Maker](/blog/how-to-choose-a-market-maker).

## Red flags

- **"Just buy this bot and you're done"** — ignores inventory, risk, and uptime.
- **Bots sold on guaranteed volume** — that's a [wash-trading](/blog/wash-trading-vs-legitimate-volume) bot, not market making.

A bot is a tool; a healthy market comes from how it's driven — and driving it well is exactly what we do.
