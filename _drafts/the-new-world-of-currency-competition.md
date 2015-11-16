---
layout: post
---

## A Quick Thought Experiment

Lets assume a counterfactual. Imagine that instead of the year 1813, the Central Bank of the United States of America was founded in 2020. Rather than issuing paper cash or silver coins, this internet-age central bank might simply set up a database with a public api. If you want to check the balance of your money, you could issue a simple http request to the central bank

{% highlight bash %}
curl http://api.federalreserve.us/Aakil/balance
{% endhighlight %}

If I want to pay my landlord $2000 at the end of the month, I could make another request

{% highlight bash %}
curl http://api.FederalReserve.us/send?from=Aakil&amount=2000&to=Landlord
{% endhighlight %}

The benefit of such a system to citizens would be huge. It would allow instant global transfers of wealth without financial intermediaries. No paypal or venmo necessary.

Such a system could work regardless of the monetary policy the central bank chooses. It doesn’t matter if money is backed by gold, silver, diamonds or fiat. A central bank in the 21st century has the power to provide instant and direct transfers of wealth without additional middle men.

In fact, since we already have one central bank with a public api, couldn’t we have more than one central bank with the same public api? Lets say I’m a store owner that wants to accept not only US Dollars, but Canadian Dollars. It would be quite easy for the Bank of Canada to create a public api that matches our counterfactual American Central Bank.

{% highlight bash %}
curl http://api.BankOfCanada.us/Aakil/balance
{% endhighlight %}

But why stop at nation states? Once we’ve agreed to a standardized public api, anyone with a pet economic theory and little bit of programming knowledge could set up their own central bank, issue currency, set inflation targets, print money, destroy money. Once you accept that a central bank is little more than an access-controlled database, there’s no reason you or me couldn’t start one.

{% highlight bash %}
curl http://api.BankOfAakil.us/Aakil/balance
{% endhighlight %}

## Enter the Blockchain

You may not realize it, but the far-fetched future I’ve just described is already here. The first non-state central bank in history already exists, and it is part of the Bitcoin protocol. It doesn’t control the supply of money based on inflation targets, but rather preset the entire inflation rate in its source code. It also provides a public API for near-instant and direct transfers of wealth.

Is bitcoin’s autonomous inflation algorithm the optimal algorithm for creating money? If the answer is yes, its only a matter of time before bitcoin dominates all other currencies.

If the answer is no, there’s good news. Using the technology behind bitcoin (usually referred to as the blockchain), it is possible to create a cryptocurrency with an arbitrary money supply. Here are some possible central banks that can be coded today:

1. A central bank that never inflates the supply
2. A central bank that inflates at 2% a year
3. A central bank that gives control to a board of 7 governors, 5 of which must sign any operation
4. A central bank with a board of governors similar to #3, but  only allows a maximum of 3% inflation a year
5. A central bank which uses decentralized prediction markets to set their interest rates
6. A central bank backed by a vault of gold bars
7. A central bank backed by a vault of US Dollars
7. A central bank backed by one-way-pegged bitcoin, dogecoin, litecoin, etc

A few years ago, currency entrepreneurs would need a lot of skill to get their currency up and running. They would need to create the clients and mining software, then they would have to find a way to incentivize miners to mine.

Thanks to a blockchain technology called Ethereum, the barriers to creating your own currency just got a lot smaller. Ethereum has their own token which powers the network, but that token can (and will) swing wildly in price. Luckily, Ethereum allows you to create your own “sub currency” on top of Ethereum, who’s value is no way linked to the value of Ethereum.

## The State of SubCurrencies

Here are some SubCurrencies already in the works

1. Digix.io is creating gold backed tokens
2. Tether is creating tokens tied to the USD
3. MakerDao is creating tokens tied to a basket of other tokens

More importantly, these “subcurrencies” are all interoperable assuming they respect the already described public subcurrency api. A store owner can choose which currencies to accept simply by checking a box.

Here’s a screenshot of an unreleased version of SafeMarket, the Ethereum powered marketplace I’ve been working on. Merchants will be able to accept tokens in any subcurrency that follows the spec.

Personally, I’d love to see universities enter the currency competition. Today we have dollars backed by faith in the US Government. Tomorrow, we might see cryptocurrency backed by faith in the University of Chicago.