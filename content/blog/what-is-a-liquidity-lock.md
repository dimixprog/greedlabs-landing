---
title: "What Is a Liquidity Lock (and How It Prevents Rugs)?"
description: "A liquidity lock places LP tokens in a time-locked contract so a team can't pull the pool's liquidity — the main defense against a rug pull. Here is how locks work, what they prove, and what they don't guarantee."
date: 2024-08-20
updated: 2024-08-20
author: "GREED Labs"
image: "/blog/covers/what-is-a-liquidity-lock.svg"
takeaways:
  - "A lock time-locks LP tokens so the team can't pull the pool — the main rug defense."
  - "It proves liquidity can't be drained for the lock's duration."
  - "It does not guarantee depth, price stability, or fair supply."
tags:
  - liquidity
  - compliance
  - guide
draft: false
faq:
  - question: "What does locking liquidity actually do?"
    answer: "It places the LP tokens that represent a pool's liquidity into a time-locked contract, so the team cannot withdraw that liquidity until the lock expires. This prevents the most direct form of rug pull, where a team drains the pool and leaves holders unable to sell."
  - question: "Does a liquidity lock make a token safe?"
    answer: "No. A lock only stops the team from pulling that specific liquidity for a set time. It does not guarantee the pool is deep, the price is stable, the tokenomics are fair, or that other supply isn't concentrated in a few wallets."
  - question: "How long should liquidity be locked?"
    answer: "Longer locks signal more commitment, and many projects lock for months to years. But duration is only one factor — depth, holder distribution, and honest tokenomics matter just as much as the lock length."
---

**A liquidity lock places the LP tokens that represent a pool's liquidity into a time-locked contract, so the team cannot withdraw that liquidity until the lock expires. It's the main defense against a "rug pull."** Locks build trust, but they prove one specific thing — not that a token is healthy or safe overall.

## What a rug pull is

A rug pull is when a team drains the liquidity backing a token, leaving holders with tokens they can no longer sell at any real price. It's one of the most common scams in on-chain markets, and it's exactly what a liquidity lock is designed to prevent.

## How a liquidity lock works

When you provide liquidity to an AMM pool, you receive **LP tokens** representing your share. Whoever holds those LP tokens can withdraw the underlying liquidity. A lock sends those LP tokens to a **time-locked contract** (a "locker") that won't release them until a set date — so no one can pull the pool in the meantime. See the [glossary](/blog/market-making-glossary) for the underlying terms.

## What a lock proves

- The team **can't drain that liquidity** for the lock's duration.
- A public, verifiable **commitment** that holders can check on-chain.

## What a lock does NOT guarantee

- **Depth** — a locked pool can still be thin, leaving traders with heavy [slippage](/blog/slippage-explained).
- **Price stability** — locking doesn't create a healthy, tradable market on its own. See [Why Your Token's Chart Looks Flat](/blog/why-token-chart-looks-flat).
- **Fair supply** — other tokens can still be concentrated in a few wallets. Check with [What Is Bubblemaps?](/blog/what-is-bubblemaps).

## The takeaway

Treat a liquidity lock as **necessary but not sufficient**. It removes one clear risk, but a trustworthy token still needs real depth, sensible distribution, and an actively maintained market — the things a lock can't provide by itself.

Locking liquidity protects holders from a rug; building and maintaining real depth is what makes the market worth trading — and that second part is where we come in.
