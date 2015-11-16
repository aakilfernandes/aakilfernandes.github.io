---
layout: post
---
{% include JB/setup %}

Full credit for this post goes to [Andrew Miller](https://github.com/amiller) who first brought callstack attacks to my attention and Least Authority who [published the attack](https://github.com/LeastAuthority/ethereum-analyses/blob/master/GasEcon.md#callstack-depth-limit-errors) back in July.

Any time your contract sends money to another address, it is using the `CALL` opcode.