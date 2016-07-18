---
layout: post
---

## Warning: In review, will be updated shortly

Disclaimer: This article has not been thoroughly peer reviewed. Usually I would wait a few days for input for others, however the speed at which the DAO hard fork is being developed and rolled out leaves little room. As such, please wait before drawing final conclusions on the viability of this attack.

----

Syncing Ethereum nodes can take hours, or days. Every single header and transaction must be executed one-by-one in the EVM to make sure it is valid.

In order to speed up node syncing, geth uses as `--fast` flag which simply checks headers, then references the longest chain. and downloads the state at that point.

All of this would be fine, however the longest chain is currently the un-forked Ethereum. That means users wishing to run the DAO hard fork and use the `--fast` option will accidentally download the wrong chain.

In order to combat this, the geth team included a [special handshake](https://github.com/karalabe/go-ethereum/blob/44f20203b877c780794571969c1c4b87c8dbf2d5/eth/handler.go#L287-L298), whereby a node reports the DAO block to confirm it does indeed contain a certain extra-data field. However, a coalition of anti-fork miners could start at DAO-fork block and include the relevant extra-data in their headers, thereby posing as the dao-hf chain. Pro-fork miners or pool operators who join after the malicious anti-fork miners have gotten a head start will accidentally start mining on the anti-fork chain (assuming they synced with the --fast option).

I am currently working on a proof of concept of such an attack. You can check [its progress here](https://github.com/aakilfernandes/go-ethereum-imposter).