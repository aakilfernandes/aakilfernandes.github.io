---
layout: post
---

## A Quick Thought Experiment

Lets assume a counterfactual. Imagine that instead of the year 1813, the Central Bank of the United States of America was founded in 2020. Rather than issuing paper cash or silver coins, this internet-age central bank might simply set up a database with a public api. If I wanted to check the balance of my money, I could issue a simple http request to the central bank

    curl http://api.FederalReserve.us/Aakil/balance

If I want to pay my landlord $2000 at the end of the month, I could make another request

    curl http://api.FederalReserve.us/send?from=Aakil&amount=2000&to=Landlord

The benefit of such a system to citizens would be huge. It would allow instant global transfers of wealth without financial intermediaries. No Paypal or Venmo necessary.

Such a system could work regardless of the monetary policy the central bank chooses. It doesn’t matter if money is backed by gold, silver, diamonds or fiat. A central bank in the 21st century has the power to provide instant and direct transfers of wealth without additional middle men.

In fact, since we already have one central bank with a public api, couldn’t we have more than one central bank with the same public api? Lets say I’m a store owner that wants to accept not only US Dollars, but Canadian Dollars. It would be quite easy for the Bank of Canada to create a public api that matches our counterfactual American Central Bank.

    curl http://api.BankOfCanada.us/Aakil/balance

But why stop at nation states? Once we’ve agreed to a standardized public api, anyone with a pet economic theory and little bit of programming knowledge could set up their own central bank, issue currency, set inflation targets, print money, destroy money. Once you accept that a central bank is little more than an access-controlled database, there’s no reason anyone couldn't start one.

    curl http://api.SchruteFarms.pa/Aakil/balance

![Currency Competition in SafeMarket](/assets/images/currency/schrutebucks.jpg)

## Enter the Blockchain

You may not realize it, but the far-fetched future I’ve just described is already here. The first non-state central bank in history already exists, and it is part of the Bitcoin protocol. It doesn’t control the supply of money based on inflation targets, but rather preset the entire inflation rate in its source code. It also provides a public API for near-instant and direct transfers of wealth.

Is Bitcoin’s autonomous inflation algorithm the optimal algorithm for creating money? If the answer is yes, its only a matter of time before Bitcoin dominates all other currencies.

If the answer is no, there’s good news. Using the technology behind Bitcoin (usually referred to as the blockchain), it is possible to create a cryptocurrency with an arbitrary money supply. Here are some possible central banks that can be coded today:

1. A central bank that never inflates the supply
2. A central bank that inflates at 2% a year
3. A central bank that gives control to a board of 7 governors, 5 of which must sign any operation
4. A central bank with a board of governors similar to #3, but  only allows a maximum of 3% inflation a year
5. A central bank which uses decentralized prediction markets to set their interest rates
6. A central bank backed by a vault of gold bars
7. A central bank backed by a vault of US Dollars
8. A central bank backed by one-way-pegged Bitcoin, Dogecoin, LiteCoin, etc

A few years ago, currency entrepreneurs would need a lot of skill to get their currency up and running. They would need to create the clients and mining software, then they would have to find a way to incentivize miners to mine.

Thanks to a blockchain technology called Ethereum, the barriers to creating your own currency just got a lot smaller. Ethereum has their own token (Ether) which powers the network, but that token can (and will) swing wildly in price. Luckily, Ethereum allows you to create your own token on top of Ethereum, who’s value is no way linked to the value of Ether. Ethereum provides the clients and networks, you just provide the monetary policy.

## The State of Tokens

Here are some tokens already in the works

1. Digix.io is creating gold backed tokens
2. Tether is creating tokens tied to the USD (TODO: Verify this)
3. MakerDao is creating tokens tied to a basket of other tokens

More importantly, these tokens are all interoperable assuming they respect an already described public subcurrency api. A store owner can choose which currencies to accept simply by checking a box.

Here’s a screenshot of an unreleased version of SafeMarket, the Ethereum powered marketplace I’ve been working on. Merchants will be able to accept any token with a few clicks. Tokens not included out of the box can be added by providing their contract api.

![Currency Competition in SafeMarket](/assets/images/currency/screenshot.png)

Personally, I’d love to see universities and other non-profits enter the currency competition. Today we have dollars backed by faith in the US Government. Tomorrow, we might see cryptocurrency backed by faith in the University of Chicago.
