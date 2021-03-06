---
title: $1.1 Million of DAO Tokens held within 2 Hops of Ethereum Foundation; $280k Accumulated Since DAO Disclosure
layout: post
---

<style>
  code{
    display: inline-block;
    max-width: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: -6px;
  }

  h4 code{max-width: 100px}
</style>

------------

# DRAFT DO NOT SHARE

<!--

I'd like to take this opportunity to ask the Foundation to commit to the following:

1. Prohibit employees from promoting or endorsing 3rd-party dapps such as the DAO
2. Step back from the DAO and allow the community to spearhead any DAO specific forks.
3. Have all employees disclose their DAO token holdings before any hardfork vote
4. Put an immediate prohibition on the purchase of DAO tokens by employees

If it is true that the community supports and endorses a DAO specific fork, allow the community to develop and implement it. Foundation members should have never involved themselves in the DAO, and it is a mistake for the Foundation to continue to deepen their involvement.

-->

## Methodology

I took a look at the Ethereum Foundation's multisignature account located at `de0b295669a9fd93d5f28d9ec85e40f4cb697bae`. Any of the signatories to this account, or any individual that received at least 100 ether was considered connected by a "hop". From there, I recursively crawled the transaction history making sure to ignore any exchanges (defined liberally as any account engaging in more than 100 transactions)

All data was collected between July 1st and 2nd and represents the state of the chain at that time.

I chose the date of [Slock.it's disclosure](https://blog.slock.it/dao-security-advisory-live-updates-2a0a42a2d07b) (6/17/2016 at 9:27 AM GMT) to analyze accumulations after the public disclosure

### A note about acount formatting

Throughout this article, you will see abbreviated account addresses. This is for readability reasons. If you highlight and copy the address, the full un-abbreviated address will be copied to your clipboard.

## Results

1. Individuals within 1 hop of the Foundation own 957k DAO tokens ($95k)
2. Individuals within 2 hops of the Foundation own 11M DAO tokens ($1.1M)
  * 18 accumulations of DAO tokens totalling 2.8M DAO tokens ($280k) since the vulnerability disclosure
3. Individuals within 3 hops of the Foundation own 23M DAO tokens ($2.3M)
  * 43 accumulations of DAO tokens totalling 3.4M DAO tokens ($340k) since the vulnerability disclosure


## Anecdotes

This section contains a few anecdotes from the data.

#### `2d0efca5e73e90c7707931678dfaef38c068ac10` (2 hops, $430k of DAO Tokens)

On August 15th, 2015, the Ethereum Foundation made a transfer of 3 million ether to `b2d7e6cd1b25f591e2e630ba65dac638e6cd4c8e` [[source]](https://live.ether.camp/transaction/a0de5046066e0b03b42ec96a98fdc816ec4d0e6fb339d69ea5765d18a549eb28). That same day, 9.7k ether, was transferred from that account to `2d0efca5e73e90c7707931678dfaef38c068ac10` [[source]](https://live.ether.camp/transaction/2dbae9b871f6beb1b4921e3a2653c42c2f0f293916ea0575a0ec2d54879efa0d). This account is the owner of  4.3M DAO tokens.

11 transfers of DAO tokens totalling 1.9M DAO tokens ($190k) were made after the public DAO vulnerability disclosure. Those transfers were made from a likely exchange address `df21fa922215b1a56f5a6d6294e6e36c85a0acfb`.

#### `30475463369f8f18ec9724ed53f1b71f24ec48b2` (2 hops, $140k of DAO Tokens)

On September 22, 2015, an Ethereum Foundation signatory (`5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f`) transferred 25k ether to `30475463369f8f18ec9724ed53f1b71f24ec48b2`[[source]](https://live.ether.camp/transaction/194f36f26f26500a210e35f3ea689c5c5019c0ddbc0d4ad49b4141f895e78227). That account is the holder of 1.4 Million DAO tokens).

5 transfers of DAO tokens totalling 915k DAO tokens ($91k) were made to this account after the public DAO vulnerability disclosure. All 5 of those transfers were made from a likely exchange `df21fa922215b1a56f5a6d6294e6e36c85a0acfb`.

#### `345a198eb431776f0383605c838fd237b617868c` (3 hops, $680k of DAO Tokens)
On August 17th, 2015, 100k ether was sent from an Ethereum Foundation signatory (`5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f`) to `1a56A50C378d21D0aA544eD9A482300c7f6E78ec` [[source]](https://live.ether.camp/transaction/120879fd8f289917817b1d43aff0df6f9b3bd40a63abc25021dc947a715c2e0e). That same day, 100k ether (was transferred from `1a56a50c378d21d0aa544ed9a482300c7f6e78ec` to `f6b1e9dc460d4d62cc22ec5f987d726929c0f9f0` [[source]](https://live.ether.camp/transaction/60c7aa72f38fceef298d679be319f9be17398c3a454cc845e5a5f550c45e337e). On May 13th, 2016, that account transferred 68k ether to `345a198eb431776f0383605c838fd237b617868c` [[source]](https://live.ether.camp/transaction/0bb7e815915fa93f49ab50f2d275a4ea030d698f6b7017a8b3098d720c054268). That account is the holder of 6.8 Million DAO tokens.
