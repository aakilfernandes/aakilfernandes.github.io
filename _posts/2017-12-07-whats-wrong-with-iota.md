---
layout: post
---

## The tangle is a step backwards

IOTA’s tangle sounds complicated, but if you know how a blockchain works, it is incredibly simple. Just take Satoshi’s Bitcoin white paper and remove the blocks.  Instead of hash power and weight calculations being applied to blocks of transactions, the tangle applies them to individual transactions.

It really is that simple. It is so simple, that I assume Satoshi started with “the tangle” before he opted for a blockchain. Claiming the tangle as a new alternative to the blockchain is like claiming the axis is a new alternative to the wheel. The wheel could not exist without the axis, just as the blockchain could not exist without the tangle.

### Why did Satoshi add blocks to the tangle?

If we assume a network has `T` transactions per seconds, a tangle node requires `T` PoW checks and at least `T` weight calculations per second. A blockchain which processes `B` blocks per second, requires requires `B` PoW checks and at least `B` weight calculations per second. Since a block contains many transactions (`B < T`), blockchains will always process transactions more efficiently than a pure tangle.

Perhaps there is some other optimization made by removing the blocks. For example, there could be some memory or file read improvements. However, the IOTA whitepaper makes no references to any such improvements.

## “Free” transactions

In distributed ledgers (blockchains/tangles), there maintains one truism: every full node must process every transaction and maintain an independent ledger to sustain full security.  IOTA’s whitepaper does not claim otherwise. Perhaps sharding will allow us to break out of this paradigm, but its irrelevant since IOTA does not claim to implement sharding.

What their marketing materials does claim is that IOTA offers free transactions on the IOTA ledger. This is a farce, just as it was farce when claimed by many blockchains before the IOTA. What the IOTA *does* do is replace transaction fees paid in terms of iota (or another digital asset) with transaction fees paid in terms of hash power. But hash power costs electricity, and thus is not free.

With current market value for access to the IOTA ledger, IOTA is able to offer extremely low-cost transactions. This is/was true of any distributed ledger that has has low market value for access to the ledger. Note that asset value is NOT equal to ledger access value. Asset value can rise without ledger access value rising because assets can trade off-ledger (such as on an exchange).

However if demand for transactions on the IOTA ledger increases beyond capacity, there must be some way of rationing access to the ledger. Every ledger (including IOTA) implements a fee auction to decide which transactions are given priority access to the ledger. Unlike most blockchains I'm aware of, IOTA uses a fee auction  expressed in PoW instead of a iota (or some other digital asset like bitcoin or ether). Iota transactions can attach a higher “weight” by increasing their PoW. Since PoW isn’t free, and transaction capacity isn't magically increased, fees will rise in IOTA just as they rise in other ledgers.

I am open to the idea that PoW is a better fee mechanism than digital assets. Namely because digital assets have fixed costs (you need to get access to an exchange). However, claiming PoW is "free" is deceitful.

Notably, non-blockchain tangles are not fundamentally necessary for PoW-fee transactions. You could design a blockchain where PoW is used for paying for transactions, and miners are rewarded with a minted digital asset for including those transactions in a block.

## No Convergence With High Load and Varying Node Transaction Capacities

Imagine two nodes with different transaction capacities (for example one node is running on a Rasberry PI and one is running on AWS). These two nodes have capacity (defined in transactions per second) `C1` and `C2` where `C1 < C2`. Imagine the network enters a prolonged state of `T` transactions per second where `C1 < T < C2`. It should be obvious that these two nodes will never converge, simply because the smaller node (the raspberry pi) can not process all the transactions being handled by the larger node (AWS). Ledgers must define a size/computation limit on transactions throughput, thus defining a minimum viable node for joining the network. This is why and Bitcoin has a block size limit, and Ethereum has a gas limit. IOTA defines no limits, thus can only maintain convergence so long as transactions are low (`T < C1 < C2`).
