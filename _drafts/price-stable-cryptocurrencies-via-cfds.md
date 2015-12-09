---
title: DRAFT - Price-Stable Cryptocurrencies via Contract For Differences
layout: post
---

The concept of price stable cryptocurrencies has been on my mind a lot because I’m working on a [blockchain based marketplace](http://safemarket.github.io). While traditional cryptocurrency marketplaces have struggled with price instability, price-stable cryptocurrencies offer comfort to users and merchants who are not interested in speculating. I was happy to learn that there are multiple groups working very hard to make such a reality come true. This post is about one particularly novel strategy being utilized by [MakerDao](http://makerdao.com/) and [BitShares](https://bitshares.org/): Contract for Differences or CFDs. 

While the mechanisms of this strategy can be complicated, there are a few main takeaways:

1. It requires an honest price feed that will report changes in exchange rates
2. It allows the creation of token pegged to any price index or asset, **without holding the asset being pegged to**
	1. You could peg a token to the USD without any reserves of USD
	2. You could peg a token to the Big Mac Index without holding any reserves of Big Macs

Lets assume there’s a cryptocurrency enthusiast named Harry. Harry's friends call him High-Risk-High-Reward Harry because he has a high tollerance for risk. Harry really likes reading the latest news in the crypto space and decides she can put her knowledge to good use by becoming a speculator. She goes to a BTC/USD exchange where she starts a bank transfer of $100<sup>USD</sup>. Once the bank transfer is complete, her exchange account holds $100<sup>USD</sup> and $0<sup>BTC</sup>.

On one particular day, Harry reads about a new development in the Bitcoin world that she thinks could radically increase the value of Bitcoin. She goes to her exchange and immediately converts the entirety of her portfolio from USD to BTC. Harry now holds $0<sup>USD</sup> and $100<sup>BTC</sup>

It turns out, Harry’s prediction was right and her decision to convert USD to BTC was very wise. The value of bitcoin doubles. Harry’s exchange account now holds $0<sup>USD</sup> and $200<sup>BTC</sup>

Harry looks at the market, and she concludes that Bitcoin’s current bull run isn’t over yet. She wants to buy more BTC, but she doesn’t have any more USD in her account. She could start a bank transfer, however that will take 3 days and she thinks the bull run might be over by then.

Instead of buying more USD, Harry can create a **contract for difference**, or **CFD**, with another investor,  who we will name Larry. Larry's friends call him Low-Risk-Low-Reward Larry because he likes stability.

Unlike Harry, Larry isn’t really interested in speculating on the day-to-day of Bitcoin. He’d much rather spend his time elsewhere. However, Larry realizes that he can structure a contract with Harry that pays him a 2% interest rate with very little risk.

Harry and Larry agree to a contract that goes like this:

1. Harry will put up her $200<sup>BTC</sup> as collateral into an escrow
2. Larry will put up his $100<sup>BTC</sup> of collateral into the same escrow
3. The contract will end in 24 hours at which point
	1. The escrow will send $102<sup>BTC</sup> of collateral will be sent to Larry
	2. The escrow will send the remainder of the collateral to Harry

*Note that this contract exists entirely on the blockchain. The escrow is automated and there is no risk of the escrow stealing funds.*

Lets take a look at the value of the contract under two scenarios. In the first scenario, the price of BTC in USD doubles. In the second scenario, the price of BTC in USD halves.

1. If the price of BTC doubles, the value of the collateral in the contract doubles from $300<sup>BTC</sup> to $600<sup>BTC</sup>. Since Larry will be returned $102<sup>BTC</sup>, Harry will be returned $498<sup>BTC</sup>.
2. If the price of BTC halves, the value of the collateral in the contract halves from $300<sup>BTC</sup> to $150<sup>BTC</sup>. Since Larry's will be returned $102<sup>BTC</sup>, Harry will be returned a mere $48<sup>BTC</sup>

While the value of the contract to Harry is volatile, the value of the contract to Larry is completely known. He will always receive $102<sup>BTC</sup>.

## But wait!

What if the value of BTC drops so much that even the collateral cannot cover it?

While we have $300<sup>BTC</sup> of collateral for $102<sup>BTC</sup>, severe drops in the price of BTC could make it so that Larry does not receive his investment. This is protected against automatically by the escrow service, who prematurely ends the contract and returns Larry’s $102<sup>BTC</sup> if there is a possibility the CFD might default. In such a scenario, Harry might not be returned any of her original collateral.

## Fungability

Now Larry has a contract provably worth $102<sup>BTC</sup>. Rather then forcing Larry to claim the contract, we could send a ticket to Larry that allows him (or anyone else who presents that ticket) to claim the contract. In turn, Larry could sell that ticket to whoever he likes.

Lets imagine that the terms of the CFD that Harry and Larry agreed to were standardized across thousands of contracts. That means the collateral ratio and the interest rate for each of these CFDs would be the same. The tickets to claim the CFDs could be traded around with stable value, each holder fully aware of the collateral backing it.

As these tickets grow in quantity, they eventually become a currency. Every ticket holder knows their ticket corresponds to a CFD worth $102<sup>BTC</sup>.