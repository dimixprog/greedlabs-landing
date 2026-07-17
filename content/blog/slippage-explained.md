---
title: "Slippage Explained (and How to Reduce It)"
description: "Slippage is the difference between the expected price of a trade and the price it actually executes at. It's caused by thin liquidity and volatility — here's how to reduce it."
date: 2021-03-23
updated: 2021-03-23
author: "GREED Labs"
image: "/blog/covers/slippage-explained.svg"
tags:
  - liquidity
  - fundamentals
draft: false
faq:
  - question: "What causes slippage?"
    answer: "Slippage comes from a mismatch between your order size and the liquidity available at your expected price. A thin order book forces a large order to fill across multiple worse price levels, and volatility between submission and execution can move the price before you fill. On DEXs, low pool liquidity and the AMM price-impact curve add to it."
  - question: "What is a good slippage tolerance?"
    answer: "It depends on the token. Liquid majors trade with such tight spreads and deep books that a very small tolerance is usually enough, while illiquid small caps often need a wider setting just to fill. Set it as low as you can while still getting the trade done — too tight and the order fails, too wide and you invite bad fills or MEV."
  - question: "How does market making reduce slippage?"
    answer: "A market maker keeps the order book deep and the spread tight, so your order fills close to the quoted price instead of eating through empty levels. Deeper resting liquidity means less price impact per unit traded, which is exactly what low slippage looks like. It is a structural fix rather than a per-trade workaround."
---

**Slippage is the difference between the price you expect when you submit a trade and the price it actually executes at — a gap that widens when the order book is thin or the market is moving fast.** It can technically go in your favor, but traders almost always treat it as a cost.

This guide covers why slippage happens, how to reduce it, and why the deepest fix is structural.

## Why slippage happens

Every order fills against the liquidity resting in the order book. When you place a market order, it takes the best available price first, then the next, then the next — walking up or down the book until the whole order is filled. If the book is deep, those price levels sit close together and your average fill price barely moves. If the book is thin, a single large order eats through several levels and the last portion fills far from where you started.

![Order book depth and price impact](/blog/diagrams/bid-ask-spread.svg)

A few factors make it worse:

- **Thin order-book depth** — not enough resting liquidity near the mid price, so orders push through multiple levels.
- **Volatility** — the price can move in the seconds between when you submit and when you fill.
- **Order size relative to liquidity** — a trade that is large compared to what the book can absorb moves the price against itself.
- **DEX mechanics** — on automated market makers, low pool liquidity plus the price-impact curve means large swaps get progressively worse pricing.

## How to reduce slippage

- **Trade where liquidity is deep** — choose venues and pairs with tight spreads and a thick book, so each unit of size costs less price impact.
- **Split large orders** — break a big trade into smaller pieces over time using TWAP or iceberg strategies instead of hitting the book all at once.
- **Set a slippage tolerance** — cap how far the fill price is allowed to drift, so a bad quote fails instead of executing at a price you never intended.
- **Back the token with real depth** — the structural fix is to ensure the asset has a market maker maintaining tight spreads and continuous liquidity.

Slippage tolerance deserves a note of its own. There is no universal "correct" number: liquid majors fill fine with a tight setting, while illiquid small caps may need a wider one just to go through. Set it as low as your fill will allow — too tight and the order simply doesn't execute, too wide and you expose yourself to bad fills.

## The market making connection

Slippage is ultimately a liquidity problem, and liquidity is what a market maker provides. A [crypto market maker](/blog/what-is-crypto-market-making) continuously quotes buy and sell orders around the current price, keeping the book deep and the spread tight. Deeper depth plus a tighter spread means less price impact per trade — which is the same thing as less slippage.

The workarounds above help any individual trader, but they only manage the symptom. For a token project, the durable answer is structural: a healthy order book where traders can enter and exit near the quoted price. That is exactly the market a professional market maker is built to sustain.

**Related reading:** [What Is Order Book Depth?](/blog/what-is-order-book-depth) · [MEV & Sandwich Attacks](/blog/mev-and-sandwich-attacks) · [Crypto Market Making Glossary](/blog/market-making-glossary)
