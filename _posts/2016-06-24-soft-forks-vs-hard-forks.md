---
layout: post
---

There's been a lot of discussion of soft forks and hard forks lately. I've found a lot of misunderstanding between the two so I thought I'd write out the differences between the two.

------------------------

### Implementation

What are the barriers to implementing a soft and hard fork?

#### Soft Fork

* Works at the network level
* Requires 51% of mining hash power
* Does not require nodes, exchanges, or users to upgrade

#### Hard Fork

* Works at the protocol level 
* Hashpower is irrelevant
* Nodes, exchanges, and users must all upgrade

------------------------

### Network Splits

One of the biggest concerns is a "network split" where users cannot safely transact with each other because they are referrincing different forks.

#### Soft Fork

* Will not cause a network split. Users, nodes, and exchanges can be sure they are transacting safely
* Miners may find themselves mining on the "non-forked chain" thus wasting hashpower

#### Hard Fork

* Nodes, exchanges, users, and miners, who fail to fork will be split from the rest of the network

------------------------

### The DAO Fund Retreival

#### Soft Fork

* Can lock funds in contract
* Cannot retreive funds already in attacker's child DAO
* Can be used as bargaining chip to get attacker to return funds
* Attacker can try and bribe miners to reject the soft fork

#### Hard Fork

* Can fully return funds, with our without attacker's consent
