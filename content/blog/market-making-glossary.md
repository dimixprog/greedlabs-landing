---
title: "Crypto Market Making Glossary: 30+ Terms Explained"
description: "A plain-English glossary of crypto market making terms — order book, bid-ask spread, slippage, depth, AMM, wash trading, token loan, call option, and the deal terms every token project should know."
date: 2022-06-21
updated: 2026-07-10
author: "GREED Labs"
image: "/blog/covers/market-making-glossary.svg"
takeaways:
  - "Covers 30+ terms across order books, liquidity, venues, and deal structures."
  - "The four that matter most in practice: spread, depth, uptime, and the KPI report."
  - "Each term links to a deeper guide where one exists."
tags:
  - market-making
  - fundamentals
  - guide
draft: false
faq:
  - question: "What is the difference between a maker and a taker?"
    answer: "A maker posts a limit order that rests on the order book and adds liquidity; a taker submits an order that immediately matches a resting order and removes liquidity. Makers usually pay lower fees because they provide the liquidity others trade against."
  - question: "What is a healthy volume-to-liquidity ratio?"
    answer: "There is no single correct number, but organically traded tokens usually show daily volume that is a modest multiple of visible order book depth. Volume that is many times larger than the liquidity supporting it is a common signal of wash trading."
  - question: "Do I need to understand all these terms to hire a market maker?"
    answer: "No. The ones that matter most in practice are spread, depth, uptime, and the reporting behind them. A good market maker will explain the rest and show transparent weekly metrics rather than hide behind jargon."
---

**This glossary defines the crypto market making terms token projects run into most often — from order book mechanics to the deal structures market makers propose.** Definitions are deliberately short and plain; where we have a deeper guide, the term links to it.

Bookmark this page as a reference for TGE planning, exchange conversations, and reading a market maker's contract.

## Order book basics

- **Order book** — The live list of all outstanding buy and sell orders for a token on an exchange, sorted by price.
- **Bid** — An order to buy at a specified price. The highest bid is the most anyone is currently willing to pay.
- **Ask (offer)** — An order to sell at a specified price. The lowest ask is the cheapest a token is currently available for.
- **Bid-ask spread** — The gap between the best bid and the best ask. Tighter spreads mean cheaper trading and a healthier market. See [What Is Crypto Market Making?](/blog/what-is-crypto-market-making)
- **Mid price** — The midpoint between the best bid and best ask, commonly used as the reference "current price."
- **Depth** — How much size is resting in the order book near the current price. Deep books absorb large orders with little movement.
- **Level 2 data** — The full view of the order book beyond the top of book, showing size stacked at each price level.

## Orders and roles

- **Limit order** — An order to buy or sell at a set price or better. It rests on the book until filled or cancelled.
- **Market order** — An order to buy or sell immediately at whatever prices are available, consuming resting liquidity.
- **Maker** — A trader whose limit order adds liquidity to the book. See [Market Maker vs. Market Taker](/blog/market-maker-vs-market-taker)
- **Taker** — A trader whose order removes liquidity by matching a resting order immediately.
- **Market maker** — A firm or system that continuously quotes both bids and asks to keep a token liquid and its spread tight. See [How to Choose a Crypto Market Maker](/blog/how-to-choose-a-market-maker)
- **Two-sided quote** — Posting a bid and an ask at the same time, the core activity of market making.
- **Quote uptime** — The percentage of time a market maker actually has live orders in the book. Higher uptime means more reliable liquidity.

## Liquidity and price movement

- **Liquidity** — How easily a token can be bought or sold without moving its price. See [How Much Liquidity Does Your Token Need Before TGE?](/blog/liquidity-before-tge)
- **Slippage** — The difference between the expected price of a trade and the price it actually executes at. See [Slippage Explained](/blog/slippage-explained)
- **Price impact** — How much a single order moves the market price; large orders on thin books cause high impact.
- **Volatility** — The degree to which a token's price fluctuates over time.
- **Inventory** — The token and stablecoin balances a market maker holds to be able to quote both sides.

## Venues and mechanisms

- **CEX (centralized exchange)** — An exchange that runs an order book and custodies user funds, such as Binance, OKX, or Bybit. See [How to Get Listed on a CEX](/blog/how-to-get-listed-on-cex)
- **DEX (decentralized exchange)** — An on-chain exchange where trades settle via smart contracts rather than a central operator.
- **AMM (automated market maker)** — A DEX design that prices trades from a formula against a pooled reserve instead of an order book.
- **Liquidity pool** — The paired token reserves that back an AMM and that traders swap against.
- **TVL (total value locked)** — The total value of assets deposited in a protocol or pool; a measure of scale, not the same as tradable order book liquidity.

## Volume and market health

- **Volume** — The total amount of a token traded over a period, usually reported per 24 hours.
- **Organic volume** — Trading that reflects genuine, independent buying and selling interest.
- **Wash trading** — Fake volume created by trading with yourself to inflate activity; exchanges and analytics platforms flag it. See [Wash Trading vs. Legitimate Volume](/blog/wash-trading-vs-legitimate-volume)
- **Volume-to-liquidity ratio** — Daily volume compared to order book depth; an unusually high ratio is a common wash-trading signal.
- **Holder concentration** — How much of a token's supply sits in a few wallets; high concentration is a liquidity and dump risk. See [What Is Bubblemaps?](/blog/what-is-bubblemaps)

## Launch and deal terms

- **TGE (token generation event)** — The moment a token is created and first becomes transferable, usually aligned with launch and listing. See [Token Launch Checklist](/blog/token-launch-checklist)
- **Listing** — Adding a token to an exchange so it can be traded there; many listings require a market making commitment.
- **Market making commitment** — A formal agreement to provide liquidity to a given standard (spread, depth, uptime), often required by exchanges.
- **Retainer (monthly fee)** — A fixed recurring fee paid to a market maker for their service. See [How Much Does a Crypto Market Maker Cost?](/blog/crypto-market-maker-cost)
- **Token loan model** — A deal where the project lends tokens to the market maker to quote with, instead of (or alongside) a cash fee.
- **Call option** — In a loan deal, the market maker's right to buy the loaned tokens later at a preset price; a common form of compensation.
- **KPI report** — The periodic metrics a market maker shares — spread, depth, uptime, volume — to prove the service is being delivered.

## Which terms actually matter

If you only track a handful, track these four: **spread** and **depth** describe the quality of your market, **uptime** describes how reliably it is maintained, and the **KPI report** is how you verify all three. Everything else in this glossary supports understanding those.

Ready to put real liquidity behind your token? These terms are the vocabulary of that conversation — and where we come in.
