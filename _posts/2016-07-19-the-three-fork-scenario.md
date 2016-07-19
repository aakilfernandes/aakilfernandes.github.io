---
layout: post
---

Tomorrow, there will be a hard fork in the Ethereum blockchain where the network splits into two different chains, one which moves funds from the DAO to a refund contract, and another that does not.

However, this is a small and distinct possibility that there will actually be three separate chains. These chains are

1. (`NF1`) geth <= 1.4.9
2. (`NF2`) geth 1.4.10 --oppose-hard-fork
3. (`HF`) geth 1.4.10 --support-hard-fork

In order for this three-fork-scenario to come into existence, two conditions must be met:

1. The hashpower behind `NF1` >= the hashpower behind `NF2`
2. A miner executes a "[dao-fork spoof attack](http://aakilfernandes.github.io/dao-fork-spoof-attacks)" between blocks 1920000 and 192010

## Recommendations

Please note, these recommendations do not match those of the Ethereum Foundation and their developers. You are encouraged to hear both sides and generate your own opinion.

### If you are pro fork

Upgrade to geth 1.4.10 --support-hard-fork

### If you are anti fork

1. Use `NF1` (Do not upgrade to geth 1.4.10)
2. Do not use --fast sync after the hard fork has happened (block 1920000)
3. After block 1920010, check your chain to see if a hard fork spoof attack has occured.
    1. You will know an attack occured if any of the blocks between 1920000 and 1920010 have an extradata field of `dao-hard-fork`.
    2. If the spoof attack has not occurred...
        1. You can safely upgrade to 1.4.10 --oppose-hard-fork safely and use --fast
    3. If the spoof attack has occured...
        1. You can wait for the hashpower of `NF2` to overtake `NF1` (in which case `NF2` and `NF1` will converge to the same chain).

## Why is this so complicated?

Geth 1.4.10 imposes a soft fork on all users, including those who use the --oppose-dao-fork. The Ethereum Foundation developers have made the assumption that the hashpower behind `NF2` will be greater than `NF1`. I contend that is a risky assumption to make, especially since the fork was unveiled two days in advance of when it neds to be rolled out. We know a large number of nodes are still running older versions of geth and have no way of knowing in advance the relative miner adoption between the 3 potential chains.