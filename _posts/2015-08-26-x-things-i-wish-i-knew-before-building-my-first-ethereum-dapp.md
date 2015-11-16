---
layout: post
---
{% include JB/setup %}

I finally got [EtherPot](http://etherpot.github.io/) out the door yesterday and I figured I'd reflect on some of the hard won lessons. This isn't meant to be a tutorial, but a bunch of quick factoids which might save you a headache or two.

All of these assume you are using Solidity and Embark, since thats the language I used to build Etherpot.

#### 1. Use the Realtime Solidity Browser Compiler

The [Realtime Solidity Browser Compiler](https://chriseth.github.io/browser-solidity/) provides you with a lot of debugging info that you don't get when you work locally. There's a lot of hair pulling I could of avoided if I just used the RSBC instead of trying to fix it through trial and error.

That being said, the RSBC doesn't seem to match the local compiler (SOLC) perfectly, so don't go crazy if things work in the browser but not on your local machine.

#### 2. There are no 'objects', only 'mappings'

There are a couple differences between objects and mappings

1. Mappings can have keys which are integers, strings, or addresses
2. All keys must be of the same type. If the first key is an integer, every key is an integer.
3. Every key in a mapping resolves to the same type. If they first key in a map resolves to an integer, then every key in a map resolves to an integer. That includes keys which have never been set.
4. Mappings can't be iterated over. Lets say you have a mapping of addresses to integers, where the addresses represent the buyer of lottery tickets and the integers represent how many tickets they bought. How can you get a list of every buyer? You can't! Any time you create a mapping, you'll probably also want to create an array of the keys (in the above case, an array of buyers).

#### 3. `constant` functions 

`constant` functions execute locally and return a value. Non-`constant` functions execute on the blockchain and return a transaction hex.

In other words, if you're trying to get a value out of your contract, you probably want a function that is `constant`. If you're trying to update a value in your contract, you do not want a function that is `constant`.

[Here's an example of a constant function](https://github.com/etherpot/contract/blob/master/app/contracts/lotto.sol#L25-L29)

#### 4. There are no mixed arrays

All arrays must be completely of a single type. If the first element of an array is an integer, then every element of the array is an integer.

#### 5. There are no dynamic arrays in memory (only in storage)

If you find yourself declaring an array in a contract function, you've probably made a mistake. Thats because unlike arrays in storage, you cant change the size of the array in a loop.

#### 6. All arrays sizes must be managed manually

There is no `array.push` in Solidity. You have to

1. Increment the length `arr.length++`
2. Add the element `arr[arr.length-1] = element`

A large chunk of your contract will probably be devoted to manually managing arrays.

#### 7. Unintuitive '++' math

Here's a code block. Tell me what the value is of `b` after this sequence runs.

    var a = 4;
    var b = a++;

I assumed it would be 5, however the value of `b` is still 4. To be fair, this is the behavior in Javascript as well. However since there's no reason to manually manage the size of arrays in javascript, I went 3 years without learning this particular quirk. Now you know!

Edit: [/u/secretlymallard](https://www.reddit.com/r/ethereum/comments/3ihmu9/x_things_i_wish_i_knew_before_building_my_first/cughtor?context=3) pointed out that `a++` and `++a` have different meanings. `a++` means return `a`, then increment while `++a` means increment then return `a`.

#### 8. Batch your RPC requests (especially if you're on a server)

Every time you call your contract or check the state of the blockchain you're making a seperate RPC request. When I released the Beta of my app, I had a single function making 10 RPC requests and my server got absolutely wrecked. Don't be like me!

#### 9. Gas estimation is not yet reliable

The first time I built EtherPot, my contract had the amount of gas required correlated to the number of tickets being bought. This was fine for small numbers of tickets, but as I tried larger number of tickets I noticed my requests weren't syncing. I tried using `estimateGas` to use increase the gas amount as the ticket count increased, but it never quite seemed to work.

I ended up reworking my contract so the gas of buying 10 tickets was the same as buying 100 tickets and haven't had a problem since. When thinking about your contract gas, aim for uniformity so that you won't be surprised when certain requests don't sync.

#### 10. If things aren't working, check the output of `embark blockchain` and `embark run`

Make sure that the miner is actually running (it should run every time you submit a new transaction, then stop). Sometimes you'll get notifications that the you don't have enough ether to deploy a contract or that the cost of deploying a contract exceeds the limit you set in your config.