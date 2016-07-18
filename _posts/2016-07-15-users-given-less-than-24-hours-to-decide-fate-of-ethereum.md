---
layout: post
---

On July 15th, 2016 the Ethereum Foundation announced on [their blog](https://blog.ethereum.org/2016/07/15/to-fork-or-not-to-fork/) the final details of a hard fork they have been developing. Proponents of the hard fork see it as a reasonable measure to pay DAO token speculators who lost money in [the DAO hack](http://www.bloomberg.com/news/articles/2016-06-23/a-50-million-heist-unleashes-high-stakes-showdown-in-blockchain). Opponents see it as a challenge to the fundamental immutability gaurentees of the system and a naked attempt to edit the ledger in favor of entrenched interests. Full disclosure, I'm in the latter group.

Below a technical explanation of the Foundation's proposed fork, was an important note.

> Unfortunately time limits require swift adoption before a protocol change becomes impractical. The community tool carbonvote will be used to set the default fork option for Geth. At block number 1894000 the votes will be tallied, and the outcome will determine whether the default is set to fork on not to fork.

Not included in the blog post was an estimate of when that block number would pass: less than 24 hours after the blog post was released.

To understand the implication of this announcement, you need to understand that while there are multiple clients capable of running Ethereum, the geth client developed by the Ethereum Foundation accounts for [95% of the nodes currently being run](http://ethernodes.org/network/1). The default settings of the geth client have an enormous impact on the network. It will make users who are happily running the status-quo chain subject to unapproved forks whever they apply a security upgrade. Shipping software with unexpected changes to default settings is, at best, a dark pattern and at worst malware.

The polling tool the Foundation wants to reference, [carbonvote](http://carbonvote.com/), has been around for weeks. It allows ether token holders to vote with their ether on whether they wanted to fork or not. Unlike traditional polls where 1 person = 1 vote, on carbonvote $1 = 1 vote.

However, Ethereum Foundation members have, until this recent blog post, been consistent that carbonvote was a signalling tool and that there would be no official vote to determine fork status [[1]](https://www.reddit.com/r/ethereum/comments/4s0rz6/a_vote_that_nobody_knows_about_is_not_a_vote/d55oc14)[[2]](https://www.reddit.com/r/ethereum/comments/4ro2p9/options_in_the_hard_fork_slockit_blog/d52pgpn)[[3]](https://www.reddit.com/r/ethereum/comments/4s0rz6/a_vote_that_nobody_knows_about_is_not_a_vote/d55nye3). In the succinct words of one Ethereum member

> Endorsing carbonvote.com as "the official vote" would be misleading. There is no "official vote."

With seemingly little at stake, less than 3% of tokens voted. After all, why would anyone bother voting if there's nothing at stake?

With the recent blog post, the Foundation has changed their position on carbonvote and it is now given official status in the largest decision the Etheruem community has made to date. They have given users less than 24 hours to vote. Many users keep their funds in exchanges or cold storage. Retreiving eth can take days, or even weeks, depending on how much you're trying to move and the policies of the businesses you're trying to move it through. The great majority of Ethereum users will hear bout this change too late to vote.

The Foundation has claimed they are looking for community consensus. Their actions, unfortunately, prove they are simply interested in astroturfing consensus so they can claim legal distance from forks they are clearly hell-bent on passing.