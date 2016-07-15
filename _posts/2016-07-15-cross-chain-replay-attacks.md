---
layout: post
tagline: What They Mean For Contentious Hard Forks
---

In Ethereum, users can transfer ether or interact with dapps by broadcasting signed transactions to a network of peers, miners, and exchanges. The catch is that signed transactions contain no network-identifying data. A signed transaction on one network can be "replayed" on the other network by anyone who wants to do so.

## What does this mean for...

### users?

This means that when interacting with any Ethereum client (be it Mist, geth, or parity), be prepared that any transactions on one chain may be replayed on the other. If you choose the "wrong" fork, you may end up losing funds when switching back to the "right" fork. For those who will use whichever chain has the most support, the safest course of action is to wait a few days or weeks until the contention dies down.

### exchanges?

Lets say an exchange allows users to withdraw funds on both status-quo and dao-replacement chains and there is a 10% price difference in between the two. An attacker could easily withdraw at the market price on the cheaper chain, replay the transaction on the more expensive chain, and redeposit their eth for a 10% arbitrage. Like users, exchanges must pick a chain and live with the consequences, or wait until there has been a clear winner.

## Solutions

### Fork splitter contracts

One possible solution is to create fork-splitter contracts. These contracts will transfer funds to a new account, conditional on whether the hard fork has been applied or not. AFAIK, no fork-splitter contracts have been created or audited.

Splitter contract transactions also have the drawback of being protocol-valid on both chains. Miners on both chains will happily process them and they will consume gas, yet their state-change will only be applied on one chain.

### EIP 134

I've submitted [an EIP](https://github.com/ethereum/EIPs/issues/134) to the Ethereum Foundation that would require transactions to contain data about a recent blockhash. This would prevent cross-chain replays and have the added benefit of time limiting transactions.

### Nonce Burning (courtesy Tjaden Hess)

Lets say you know you're planning on using the status-quo chain for the near future. You could "burn" a bunch of nonces on the dao-replacement chain, thereby making transactions with those nonces invalid. This is a somewhat expensive and time consuming solution, it requires a new and seperate transaction on the unchosen chain to be mined before an equivalent nonce transaction on the chain of choice.
