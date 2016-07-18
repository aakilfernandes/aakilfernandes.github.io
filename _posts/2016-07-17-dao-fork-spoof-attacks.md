---
layout: post
---

## Draft, work in progress

### Disclaimer

This article has not been thoroughly peer reviewed. Usually I would wait longer for input for others, however the speed at which the DAO hard fork is being developed and rolled out leaves little room. As such, please wait before drawing final conclusions on the viability of this attack.

### Description

In the seconds after the DAO hard fork is applied, there will be a split in the network. A pro-fork miner will broadcast a block that many of its peers believe to be invalid. Those nodes will refuse to relay those blocks and the network will begin to split.

Processing bad blocks is costly, so it would be much quicker to peer up to nodes on the same side of the fork. This is especially true for pro-fork nodes, [since they are in the numerical (but not necessarily economic) minority](http://ethernodes.org/) and likely will be for the near future. Until the network split completes, nodes are essentially running spam attacks against each other.

In order to facillitate this network split, the geth team included a [special handshake](https://github.com/karalabe/go-ethereum/blob/44f20203b877c780794571969c1c4b87c8dbf2d5/eth/handler.go#L287-L298), whereby a node requests its peers' DAO fork block to [check if it's header contains an extra-data field](https://github.com/ethereum/go-ethereum/blob/5f55d95aea433ef97c48ae927835d833772350de/core/dao.go#L36-L58) of ["dao-hard-fork"](https://github.com/ethereum/go-ethereum/blob/5f55d95aea433ef97c48ae927835d833772350de/params/dao.go#L39). These extra-data fields are typically used by miners for vanity reasons, but are being co-opted for the hard fork.

The catch, however, is that miners can choose whatever extra-data field they like -- regardless of their position on the fork. So an anti-fork miner could easily include the relevant extra-data, and claim the block its propagating is on the dao-fork. Such a block would be accepted by geth 1.4.10 clients (who aren't running `--oppose-dao-fork` and are synced with `--fast`) and all clients below 1.14.10. The blocks would then be propogated to their peers, who would begin the costlier process of transaction validating and removing peers.

The geth team seems to be concerned enough about this attack, that they included a [settings override](https://github.com/ethereum/go-ethereum/blob/5f55d95aea433ef97c48ae927835d833772350de/miner/worker.go#L479-L483) to stop miners from attempting to spoof the chain. However, miners who do not upgrade to 1.4.10 are more than able to spoof it.

### Attack Execution

Executing the attack is incredibly simple for pro-fork miners

1. Don't upgrade to 1.4.10
2. Restart geth with `--extradata="dao-hard-fork"`
3. Continue to mine as normal
4. If you're lucky enough to get block #1920000, you'll have initated a network-wide spoof attack
