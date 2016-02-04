---
layout: post
tagline: An arbitrary key/value data store for your Ethereum contracts
---

> The Infosphere is a massive biological memory bank created by the Brain Spawn to catalogue all the information in the Universe.
>
> -- <cite>[The Futurama Wiki](http://theinfosphere.org/Infosphere)</cite>

## The Problem

Ethereum contracts are forever. Thats an incredibly powerful tool but also very scary for a developer. Not once in my life have I deployed code that was perfect and didn't need an update.

Most developers will rightfully include a way to update specific storage values within a contract. But what if you need to create a new value that you didn't think of when you first deployed your contract?

Enter infosphere - an arbitrary key/value data store. 

![Infosphere](/assets/images/infosphere.png)

Lets imagine you have a `Person` contract that can update various features like `firstName` and `lastName`. You might create a contract that looks like this

    contract Person is owned{
       
    	string firstName;
    	string lastName;

	    function setFirstName(_firstName){
	    	requireOwnersip();
	    	firstName = _firstName;
    	}

    	function setLastName(_lastName){
    		requireOwnersip();
	    	lastName = _lastName;
    	}
    }

Then you could update a person like so

	person.setFirstName('Aakil');
	person.setLastName('Fernandes');

This is reasonable, but not very future proof. Lets say that in a couple years we want to give every person an `coinbase` field. Unfortunately, we'd be stuck without any path to do it.

## The Solution

Rather than individually list the various fields we have, we could simply have our Person contract inherit an `infosphered` contract and set a local infopshere reference.

    contract Person is infosphered{
    	    
    	function Person(){
    		infosphere = Infosphere(0x...)
    	}

    }

And once deployed set storage values

    person.setString('firstName','Aakil');
    person.setString('lastName','Fernandes');

And if we ever need to add a coinbase field, we could simply

    person.setAddress('coinbase',0x...);

## Using Infosphere in your contracts

### Using a prebuilt Infosphere

I've deployed an Infosphere at 0x1a8703734b493578bf84d385b1f537412398277b for use in SafeMarket. You're more than welcome to use it as well. It  includes 6 basic solidity types (`bool`, `address`, `bytes`, `string`, `int`, `uint`). Based on your particular needs, this may be overkill or underkill.

Infosphere Contract:
https://github.com/SafeMarket/dapp/blob/0a7958f22010e5880b92bb40419b5e708feafa0b/app/contracts/0/Infosphere.sol

infosphered contract:
https://github.com/SafeMarket/dapp/blob/0a7958f22010e5880b92bb40419b5e708feafa0b/app/contracts/1/infosphered.sol

### Creating your own Infosphere with Grunt

I've put together a grunt task for building your own `Infosphere` and `infosphered` contracts with whatever arbitrary types you need.

https://github.com/SafeMarket/grunt-infosphere

Here's an example of an Infosphere contract that includes every type solidity currently offers.

https://github.com/SafeMarket/grunt-infosphere/blob/master/contracts/complete/Infosphere.sol

