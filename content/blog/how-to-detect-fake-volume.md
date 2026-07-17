---
title: "How to Detect Fake Trading Volume (5 Signals)"
description: "Fake crypto volume shows up as a high volume-to-liquidity ratio, thin order books behind huge reported numbers, uniform trade patterns, and gaps between reported and on-chain activity. Here is how to spot wash trading before it costs you."
date: 2024-11-19
updated: 2024-11-19
author: "GREED Labs"
image: "/blog/covers/how-to-detect-fake-volume.svg"
tags:
  - market-making
  - compliance
  - guide
draft: false
faq:
  - question: "What is the easiest way to spot fake volume?"
    answer: "Compare reported volume to visible order book depth. If a token reports enormous daily volume but the book is thin and large trades still move the price sharply, the volume is almost certainly fabricated."
  - question: "Do exchanges and analytics platforms catch wash trading?"
    answer: "Increasingly, yes. CoinGecko and CoinMarketCap apply trust scores and report adjusted volumes, and exchanges run their own surveillance. Fake volume is a short-term illusion that tends to get flagged and penalized."
  - question: "Is all high volume suspicious?"
    answer: "No. Genuine tokens can trade high volume when it is supported by real depth and organic order flow. The signal is not volume itself but volume that is wildly out of proportion to the liquidity behind it."
---

**You detect fake volume by looking for a mismatch between what is reported and what is real: huge headline volume behind a thin order book, a volume-to-liquidity ratio far above normal, uniform trade sizes and timing, and reported numbers that on-chain data doesn't support.** Real markets leave consistent footprints; fabricated ones don't.

This is the practical companion to [Wash Trading vs. Legitimate Volume](/blog/wash-trading-vs-legitimate-volume), which explains what wash trading is and why it's a problem.

## 1. Volume-to-liquidity ratio

Compare 24h volume to visible order book depth. Organically traded tokens show volume that is a modest multiple of the liquidity supporting it. When volume is many multiples of a thin book, that's a classic wash-trading signal. See the [glossary](/blog/market-making-glossary) for the underlying terms.

## 2. Thin book, huge numbers

Open the order book. If a token claims enormous volume but you can move the price meaningfully with a small order, the reported volume isn't backed by real depth.

## 3. Uniform trade patterns

Genuine trading is messy — varied sizes, irregular timing. Fabricated volume often shows repetitive, near-identical trade sizes at regular intervals, or perfectly balanced buys and sells that never move price.

## 4. Reported vs. adjusted vs. on-chain

Cross-check sources. CoinGecko and CoinMarketCap publish **trust scores** and **adjusted volume** that strip out suspicious activity — a big gap between reported and adjusted is a warning. For on-chain tokens, compare exchange-reported figures against actual on-chain flow.

## 5. Holder and wallet concentration

Wash trading is often run from a small cluster of wallets. Tools like Bubblemaps reveal when activity and supply are concentrated in a few connected addresses. See [What Is Bubblemaps?](/blog/what-is-bubblemaps).

## Why it matters for your token

Fake volume buys nothing durable. Exchanges and aggregators detect it, it erodes trust when discovered, and it hides the real problem — a lack of genuine [liquidity](/blog/liquidity-before-tge). The fix isn't more fake volume; it's real depth from legitimate market making.

Real, defensible activity is the only kind worth paying for — and the only kind we build.
