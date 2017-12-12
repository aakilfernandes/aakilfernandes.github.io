---
layout: post
---

## The tangle is a step backwards

IOTA’s claim to fame is called "The Tangle". Spending a lot of time in the blockchain space, I'm well aware of its many limitations of blockchains and hungry for alternatives. Unfortunately, "The Tangle" is a marketing slogan for an old idea already built into every blockchain (including Bitcoin).

To understand how "The Tangle" works, simply read the Bitcoin white paper and remove the blocks. Instead of hash power and weight calculations being applied to blocks of transactions, the tangle applies them to individual transactions. A more fitting, though less hype-inducing, name for "the Tangle" would be a "transaction chain".

It really is that simple. It is so simple, that I assume Satoshi started with “the Tangle” before he opted for a blockchain. Claiming the tangle as a new alternative to the blockchain is like claiming the axis is a new alternative to the wheel. The wheel could not exist without the axis, just as the blockchain could not exist without the tangle.

While I believe that blocks could potentially be unecessary, it is incumbent on the IOTA team to provide a compelling case. Rather, the IOTA whitepaper proposes "the Tangle" as some sort of parallel innovation.

IOTA reminds me of a man walking across a field and running into a fence. Rather than question why the fence is there, and making an argument why it is unecessary, the man simply removes the fence and tells you about the beauty of open fields.

So why is the fence (blocks) there?

If we assume a network has `T` transactions per seconds, a tangle node requires `T` PoW checks and at least `T` weight calculations per second. A blockchain which processes `B` blocks per second, requires requires `B` PoW checks and at least `B` weight calculations per second. Since a block contains many transactions (`B < T`), blockchains will always process transactions more efficiently than a pure tangle.

Furthermore, miners who create blocks waste a block subsidy by including invalid transactions that will get rejected by the nodes. Using blocks allows miners to act as a gatekeeper that saves nodes the overhead of processing invalid transactions.

By analogy, a blockchain is like a bar where you show your ID to a bouncer standing outside. A tangle is like a bar where you have to show your ID to the bartender every time you order a drink.

If the additional overhead was merely checking PoW, this might be insignificant (the IOTA whitepaper offers no analysis). After all, CPUs are more than capable of many thousands of hashes a second, so increasing hashing requirements by a factor of 10 or 20 might be irrelevant. 

However, IOTA also uses a statistical analysis for transaction confirmation (a monte-carlo simulation). I'm not sure how many samples of the simulation are necessary for a given confirmation, and no analysis is provided to determine the resource overhead of running the simulations.

Again, it is possible these overheads amount to triviality, but I believe it is incumbent on the IOTA team to argue so.

## False claims of “free transactions" and "no mining"

In distributed ledgers (blockchains/tangles), there maintains one truism: every full node must process every transaction and maintain an independent ledger to sustain full security.  IOTA’s whitepaper does not claim otherwise. Perhaps sharding will allow us to break out of this paradigm, but its irrelevant since IOTA does not claim to implement sharding.

What their marketing materials does claim is that IOTA offers free transactions and no mining on the IOTA ledger. This is a farce, just as it was farce when claimed by many blockchains before the IOTA. What the IOTA *does* do is replace transaction fees paid in terms of iota (or another digital asset) with transaction fees paid in terms of hash power. But hash power costs electricity, and thus is not free. Somehow, IOTA claims the hash power used to secure the ledger is not mining, even though thats fundamentally what mining is. The lack of a mining subsidy does not make the PoW "not mining", it just makes it "extremely insecure" mining.

With current market value for access to the IOTA ledger, IOTA is able to offer extremely low-cost transactions. This is/was true of any distributed ledger that has low market value for access to the ledger.  Note that asset value is NOT equal to ledger access value. Asset value can rise without ledger access value rising because assets can trade off-ledger (such as on an exchange).

However if demand for transactions on the IOTA ledger increases beyond capacity, there must be some way of rationing access to the ledger. Every ledger (including IOTA) implements a fee auction to decide which transactions are given priority access to the ledger. Unlike other blockchains, IOTA uses a fee auction expressed in PoW instead of a iota (or some other digital asset like bitcoin or ether). Iota transactions can attach a higher “weight” by increasing their PoW. Since PoW isn’t free, and transaction capacity isn't magically increased, fees will rise in IOTA just as they rise in other ledgers. 

I am open to the idea that PoW is a better fee mechanism than digital assets. Namely because digital assets have fixed costs (you need to get access to an exchange). However, claiming PoW is "free" is deceitful.

Notably, non-blockchain tangles are not fundamentally necessary for PoW-fee transactions. You could design a blockchain where PoW is used for paying for transactions, and miners are rewarded with a minted digital asset for including those transactions in a block.

## No convergence with high load and varying node transaction capacities

Another one of IOTA's claims is they have no capacity limit. This is also a farce. The lack of a capacity limit insures the network will enter long periods of time without convergence.

Imagine two nodes with different transaction capacities (for example one node is running on a Rasberry PI and one is running on AWS). These two nodes have capacity (defined in transactions per second) `C1` and `C2` where `C1 < C2`. Imagine the network enters a prolonged state of `T` transactions per second where `C1 < T < C2`. It should be obvious that these two nodes will never converge, simply because the smaller node (the raspberry pi) can not process all the transactions being handled by the larger node (AWS). Ledgers must define a size/computation limit on transactions throughput, thus defining a minimum viable node for joining the network. This is why and Bitcoin has a block size limit, and Ethereum has a gas limit. IOTA defines no limits, thus can only maintain convergence so long as transactions are low (`T < C1 < C2`).

IOTA's claims to "no transaction limits" is purely marketing. They will either have to abandon this claim or accept a network which does not converge.

## Time is the only real test

Distributed ledgers don't need to be perfect to work. Blockchains notably have mining centralization problems and selfish mining attacks. Despite these issues, blockchains work, though not to the degree claimed by many of its supporters. Time is the only real test.

However, the IOTA network has not even begun to be tested. It still uses a central coordinator (closed source and not described in the whitepaper). Furthermore, no heuristic is given as to when the coordinator can be removed. The IOTA foundation can prove this entire article wrong by removing the coordinator, but I wouldn't hold my breath. A good start would be to *at least* offer a heuristic for when the coordinator can be removed.
