---
title: "TVL vs. Liquidity: What's the Difference?"
description: "TVL measures how much value is deposited in a protocol or pool; liquidity measures how easily a token trades without moving its price. A pool can have high TVL and still be illiquid for your token. Here is the difference and why it matters."
date: 2023-01-24
updated: 2023-01-24
author: "GREED Labs"
image: "/blog/covers/tvl-vs-liquidity.svg"
takeaways:
  - "TVL measures value deposited; liquidity measures how easily a token trades."
  - "High TVL can coexist with poor tradability for your token."
  - "Optimize for real, well-managed depth in the pairs people actually trade."
tags:
  - fundamentals
  - liquidity
  - guide
draft: false
faq:
  - question: "Is high TVL the same as good liquidity?"
    answer: "No. TVL is the total value deposited; liquidity is how easily your specific token trades without moving its price. A protocol can show large TVL while the pool for your token is thin, mispriced, or poorly ranged, so traders still face heavy slippage."
  - question: "Which should my token optimize for?"
    answer: "Liquidity is what traders actually feel. Deep, well-managed liquidity in the pairs people trade matters more than a large headline TVL number. TVL is a scale metric; liquidity is a tradability metric."
  - question: "Can a token have low TVL but good liquidity?"
    answer: "Yes. A modest but well-placed and actively managed pool can offer tight spreads and low slippage for normal trade sizes, even if the total value locked is not large."
---

**TVL (total value locked) measures how much value is deposited in a protocol or pool. Liquidity measures how easily a token can be bought or sold without moving its price. They are related but not the same — a pool can show high TVL and still be illiquid for your token.** Confusing the two leads teams to celebrate a big number while traders quietly struggle to fill orders.

## What TVL measures

TVL is the total value of assets sitting in a protocol, pool, or contract. It's a **scale** metric — useful for comparing the size of protocols, but it says nothing on its own about how tradable any single token is. See the [glossary](/blog/market-making-glossary) for the formal definitions.

## What liquidity measures

Liquidity is about **tradability**: can someone buy or sell your token near the quoted price without heavy [slippage](/blog/slippage-explained)? It depends on depth near the current price and how tightly the market is quoted — not on the raw total locked.

## Why they diverge

A pool can hold a lot of value (high TVL) but still be a poor market for your token if:

- the liquidity is in the **wrong pair** for how people actually trade it,
- it's spread across a **price range** far from the current price (on concentrated-liquidity AMMs), or
- it's **passive and unmanaged**, so it doesn't stay near the price as the market moves.

Meanwhile, a smaller but **well-placed, actively managed** pool can trade far better than a large idle one.

## Which matters for your token

Both have a place, but **liquidity is what traders experience**. Optimize for real, well-managed depth in the pairs that get traded — that's what keeps slippage low and the market healthy. Size it correctly with [How Much Liquidity Does Your Token Need Before TGE?](/blog/liquidity-before-tge), and keep it consistent across venues per [CEX vs. DEX Market Making](/blog/cex-vs-dex-market-making).

A big TVL number is nice to show; tradable liquidity is what actually holds your market together — and that's what we build.
