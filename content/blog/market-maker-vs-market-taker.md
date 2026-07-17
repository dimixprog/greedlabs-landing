---
title: "Market Maker vs. Market Taker: What's the Difference?"
description: "A market maker provides liquidity by placing limit orders that rest on the book; a market taker removes it by filling those orders. Here's how the two roles differ and why it matters."
date: 2021-02-10
updated: 2021-02-10
author: "GREED Labs"
image: "/blog/covers/market-maker-vs-market-taker.svg"
tags:
  - market-making
  - fundamentals
draft: false
faq:
  - question: "Is it better to be a maker or a taker?"
    answer: "Neither is universally better — it depends on your goal. Makers add liquidity and pay lower fees or earn rebates, but their orders may not fill. Takers get instant, guaranteed execution but pay higher fees and cross the spread. Traders who need certainty pay to take; those providing liquidity are rewarded for making."
  - question: "Do market makers pay lower fees?"
    answer: "Yes, typically. Under the maker-taker fee model used by most exchanges, makers pay a lower fee than takers, and some venues even pay makers a rebate for adding liquidity. Exchanges do this deliberately to attract resting orders and build deep, tradable books."
  - question: "Can one participant be both a maker and a taker?"
    answer: "Yes. The role is defined by the order, not the trader. If your limit order rests on the book and waits to be filled, you are a maker on that trade; if your order crosses the spread and fills immediately, you are a taker. The same account can do both throughout a single session."
---

**A market maker places resting limit orders that sit on the order book and add liquidity, while a market taker submits orders that immediately fill against those resting orders and remove liquidity.** The distinction is not about who the trader is — it is about what their order does to the book. The same account can be a maker on one trade and a taker on the next.

This guide explains how each role works, how exchanges price them differently, and why the difference matters for token projects.

## The core difference

A **market maker** posts a limit order at a price away from the current market — a bid below the mid price or an ask above it. That order does not execute right away; it rests on the order book and waits for someone else to trade against it. By sitting there, it adds depth and gives other traders something to buy from or sell into.

A **market taker** does the opposite. They submit a market order, or a limit order priced to cross the spread, that matches instantly against the best resting orders. Execution is immediate and effectively guaranteed, but the taker consumes the liquidity a maker provided and pays the spread to get filled now.

| | Market maker | Market taker |
| --- | --- | --- |
| Order type | Limit order that rests on the book | Market or marketable limit order |
| Effect on liquidity | Adds liquidity | Removes liquidity |
| Typical fee | Lower fee, sometimes a rebate | Higher fee |
| Execution | Not guaranteed — waits to be filled | Immediate |
| Price control | Sets the price, gives up on timing | Controls timing, gives up on price |

## Maker-taker fee model

Most exchanges use a **maker-taker fee model** that prices the two roles asymmetrically on purpose. Makers pay a lower fee than takers, and some venues go further and pay makers a small rebate for every order that adds liquidity.

The logic is straightforward: deep, tightly quoted order books attract traders, and traders generate volume and fees. So exchanges subsidize the participants who supply that depth — the makers — and recover the cost from the participants who consume it — the takers. Lower fees and rebates are the incentive that keeps resting liquidity on the book.

The exact numbers vary by exchange, by trading pair, and by a trader's volume tier, so the takeaway is relative rather than absolute: makers are consistently charged less than takers, and the gap is what nudges liquidity providers to keep quoting.

## Why it matters for token projects

For an individual trader, the maker-taker distinction is a cost-and-timing trade-off. For a token project, it explains a structural problem: **takers only consume liquidity, so someone has to continuously provide it.**

Retail traders and speculators are overwhelmingly takers. They hit the best available price and move on. If no one is posting resting limit orders on both sides of the book, there is nothing for those takers to trade against — spreads widen, depth disappears, and every order moves the price. A token cannot rely on organic order flow alone to stay liquid, because that flow is mostly one-directional demand for immediate execution.

That is why projects engage a dedicated market maker. A professional maker keeps live bids and asks on the book around the clock, absorbing buy and sell pressure and keeping spreads tight regardless of which way the crowd is leaning. The takers get a market they can actually trade in; the maker earns the favorable fee treatment for supplying the depth that makes it possible.

See our guide on [what crypto market making is](/blog/what-is-crypto-market-making) for the bigger picture on how dedicated liquidity provision works and why token projects rely on it.

**Related reading:** [What Is the Bid-Ask Spread?](/blog/what-is-the-bid-ask-spread) · [Crypto Market Making Glossary](/blog/market-making-glossary)
