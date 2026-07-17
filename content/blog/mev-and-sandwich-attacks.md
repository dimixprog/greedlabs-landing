---
title: "MEV and Sandwich Attacks: What Token Teams Should Know"
description: "MEV is value that block producers and bots extract by reordering or inserting transactions. The most common form that hurts your traders is the sandwich attack. Here is how it works and how deeper liquidity reduces it."
date: 2023-08-22
updated: 2023-08-22
author: "GREED Labs"
image: "/blog/covers/mev-and-sandwich-attacks.svg"
takeaways:
  - "MEV is value extracted by reordering or inserting transactions in a block."
  - "A sandwich front-runs and back-runs a swap, skimming value via slippage."
  - "Deeper liquidity and slippage limits are the main defenses."
tags:
  - fundamentals
  - liquidity
  - guide
draft: false
faq:
  - question: "What is a sandwich attack?"
    answer: "A bot spots a pending swap, buys just before it to push the price up (front-run), lets the victim's trade execute at the worse price, then sells right after (back-run). The victim absorbs the difference as extra slippage, and the bot pockets it."
  - question: "How does MEV affect my token?"
    answer: "It makes on-chain traders get worse fills than expected, especially on thin pools. Traders often blame the token or the project for the bad experience, even though the root cause is shallow liquidity and unprotected transactions."
  - question: "Can you fully prevent MEV?"
    answer: "Not entirely, but you can reduce it. Deeper liquidity shrinks the price impact a sandwich can exploit, sensible slippage limits cap the damage, and MEV-protected routes or private transaction relays make attacks harder to land."
---

**MEV (maximal extractable value) is profit that block producers and bots capture by reordering, inserting, or censoring transactions in a block. The most common form that hurts your traders is the sandwich attack — a bot front-runs and back-runs a swap to skim value through slippage.** For token teams, MEV shows up as traders getting worse fills than they expected, and blaming your token for it.

## What MEV is

When a transaction is pending, whoever orders transactions in the next block can profit by placing their own around it. That extractable profit is MEV. It's a property of how public blockchains sequence transactions, not a bug in your token.

## How a sandwich attack works

1. **Front-run** — a bot sees your trader's pending swap and buys just ahead of it, nudging the price up.
2. **Victim executes** — your trader's swap now fills at the worse, pushed-up price.
3. **Back-run** — the bot sells immediately after, capturing the difference.

The victim absorbs it as extra [slippage](/blog/slippage-explained); the bot keeps the value.

## Why it matters for your token

Thin pools make sandwiches profitable, because small trades already move the price a lot. Your on-chain buyers get poor fills, feel cheated, and often blame the project. It's a liquidity problem wearing a security costume.

## How to reduce it

- **Deeper liquidity** — the single biggest lever; less price impact means less to extract. See [How Much Liquidity Does Your Token Need Before TGE?](/blog/liquidity-before-tge).
- **Sensible slippage limits** — cap how much a trade can move before it reverts.
- **MEV-protected routes** — private relays or protected pools make attacks harder to land.
- **Consistent cross-venue markets** — see [CEX vs. DEX Market Making](/blog/cex-vs-dex-market-making), and check terms in the [glossary](/blog/market-making-glossary).

You can't delete MEV, but a deep, well-managed market starves sandwich bots of the price impact they feed on — and that's exactly what we maintain.
