---
layout: post
---
{% include JB/setup %}

I was quick to dismiss Ethereum when I first heard of it. There was a lot of talk about abstract and intangible concepts that made me uneasy. Spend enough time investigating alt coins and words like "turing-complete" and "smart contracts" will start triggering a pavolvian gag reflex. Since learning more about Ethereum, my mindset has completely flipped. In this post I want to talk about a few concrete, practical, applications that were impossible a few years ago, but are now possible with Ethereum.

*Edit: Note that a few of these are possible with Counterparty and Bitshares, and perhaps other "Smart Contract" technologies. However none of them are possible with Bitcoin/Litecoin/Dogecoin/NXT.*

## Betting on a coin-flip, without a casino

Imagine Alice and Bob are gamblers. Their favorite game? Coin-flipping. They can't get enough of that high-octane coin-flip action. Unfortunately, they live on opposite ends of the globe. So they have a problem - who flips the coin and how can either of them be sure they other party isn't lying about the coinflip? Further more, how can they be sure that the other party will actually pay up when they lose?

Currently, Alice and Bob would have to rely on a casino. They would each send the Casino their payment, the Casino would flip the coin, and then send the winner their payment.

There are a number of obvious problems with using a casino (especially on the internet).

1. The casino could lie about the coin-flip
2. The casino could run away with their money or sell their credit card info.

With Ethereum, Alice and Bob can trustlessly gamble on a coin-flip game without a casino. They do this through the use of a "smart contract" which is a fancy way of saying a computer program that allocates ownership of an asset. Anyone who gives the smart contract the same set of data as inputs will be returned the same ownership structure.

For Alice and Bob's coin-flip game, a developer creates a "Virtual Coin-Flip Contract". Here is what the contract would look like in english (in reality it would be expressed in code).

> "This contract will be activated when both Alice and Bob pay me 1 Ether. If either party does not pay before midnight on July 30th 2015, the other is refunded. We will use the hash of block 100 as the source of randomness that determines the output of the coin flip"

Crucially, the contract is submitted to the entire network. Every single member of the Ethereum network can view the contract, give that contract a set of inputs, and get an ownership structure.

Now we have a contract expressing how the coin flip should happen. So where does this virtual coin-flip actually take place? It happens on every computer of every single member of the ethereum network. And because they are all referencing the same smart contract, they all get the same results. If 100,000 people are running ethereum, 100,000 coin-flips happen around the world and they all get the same result.

Each ethereum member enforces the contract on their own database of 'who owns what ether'. If Bob tries to spend ether he lost in the coin-flip, every other member will remember he no longer owns that ether and reject his transaction.

And voila! We now have a coin-flip bet without a casino. This may seem trivial, but remember that every casino is essentially a coin-flip operator with bells and whistles. If you can build a decentralized, trustless coin flip game, you can build a decentralized, trustless slot machine, roulette wheel, or poker table. 

## Issuing stock in your company, without a bank OR exchange

Charlie is the owner of a private corporation looking to undergo an IPO. He wants to issue stock in his company, but he's not interested in giving a fat stack of cash and equity to a bank who will undertake the operation.

With ethereum, Charlie could offer stock in his company without a bank. He creates a smart contract that assignes 10,000 virtual stocks and a price (in Ether) which anyone can purchase a stock for. Furthermore, he can set rules on his own ability to issue new stocks. Charlie's IPO contract could look something like

> Charlie is issuing 1,000 stocks. He may issue more stock at up to 10 stocks per month. Anyone may purchase a stock from this contract for 1 Ether.

Since the stocks are issued from a smart contract that every one can view, each buyer can be assured that Charlie won't dillute ownership in his company too quickly. They can also trade their ownership of Charlie's stock easily since they can prove ownership of the stock.

How is this different than Counterparty or existing smart assets like the one that Overstock recently took? Those all require a trusted exchange. Since ethereum has the ability to execute contracts within the blockchain, no exchange is needed to trade the stock and there is no counter-party risk of fraud.

## Hedging, without an exchange

Danielle owns an oil rig. She wants to protect herself in case the price of oil falls.

Danielle and Eligh could sign a contract that pays out based on the price of oil. How does ethereum know what the price of oil is? They would have to agree on a trusted third party who would inform the network about the price of oil. However, they would not actually have to send their money to the trusted party. Their contract would look something like this.

> Trust that Francis is accurately reporting the price of oil. For every dollar the price of oil falls, Eligh pays Danielle 1 Ether. For every dollar the price of oil rises, Danielle pays Eligh 1 Ether.

There is an extremely interesting attempt using an Ethereum-based technology called [Augur](http://www.augur.net/) which uses some clever game theory to inform the Ethereum network about events in the non-Ethereum world without trusting any single entity.

## And so much more

The amazing thing about decentralized technology like Ethereum is that it allows permission-less innovation. I think we're going to see some beautiful, awesome, and outright crazy stuff built on this network. It's incredibly exciting.