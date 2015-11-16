---
layout: post
---
{% include JB/setup %}

TLDR: `block.blockhash()` only works for the previous 256 blocks, so EtherPot is broken.

Something strange happened with [EtherPot](http://etherpot.github.io) after it launched. There were 3 subpots the first round, but somehow a single player was being reported as the winner of all 3. This single account only had 8% of the tickets, so winning all 3 subpots was pretty unlikely. 

The EtherPot contract uses the hash of a specific block - "the decision block" - to determine the winner. In theory that winner could be calculated and paid out at any time. In reality, unless the winner cashed out within 256 blocks of the decision block, the blockhash function would return a 0 and the first buyer would be deemed the winner.

This little quirk didn't come up in testing, since my test chain never made it past 256 blocks. When I tested on the live chain, I tended to try withdrawing directly after the lotto ended (within the 256 block margin).

Its a bit of a bummer, since I can't think of any way to make EtherPot work given the 256 block constraint. Anyone who won would have to make sure they were near their computer to cash out at a specific time, or risk losing their winnings.

If you lost any money in EtherPot, shoot me an email and I'll make you whole. Apologies for the inconvenience.

ps: Thanks to Liana Hus for [pointing the 256 limit out to me](https://github.com/ethereum/solidity/issues/34)