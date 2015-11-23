---
layout: post
title: Perun - A Useful Unit for Dimensionless Programming
---
{% include JB/setup %}

You may not of known it, but you've already been doing dimensionless programming. Everytime your code has a percentage, you're using a "dimensionless" unit. While the usage of "percent" is commonplace, it ends up causing problems that "perun" can fix.

## Why "percent" is bad

Lets say you come across the following code.

    var feePercent = .03

Simple enough, right? However, with a single line of code we've already introduced two problems: ambiguity and floating point decimals.

### Ambiguity

Ambiguity is writing code that can be interpreted by a human reader multiple ways. In our above example, it is unclear whether the fee is ".03%" or "3%". Thats because while a literal reading of the code indicates the former (.03%), programmers usually express percentages as decimals - which would indicate the latter (3%).

### Floating point decimals

Floating point representations, which is a common way of representing numbers in many languages, is fundamentally incapabale of precisely representing many decimals. Trying to perform mathematical operations on these decimals results in wierd and unexpected behavior.

Programmers typically get around this limitation by storing decimals as strings and abstracting mathematical operations into other libraries. Such libraries result in bloated code and extra dependencies. In most cases they are a reasonable though imperfect solution. In systems like Ethereum where computation power is very scarce, such hacks are unacceptably expensive.

### SI Prefixes

Its easy to represent integers as decimals if units follow SI prefixes. For example, instead of having

    var lengthMeters = .01

You could have

    var lengthCentimeters = 1

SI prefixes are incredibly useful, however they are difficult to apply to percentages. "1 centipercent" means 1 part per 10,000, however it requres some mental gymnastics and is quite unintuitive.

## Why "perun" is good

While "percent" is short for "parts per cent (one-hundred)", "perun" is short for "parts per un (one)". It allows for unambiguous code and, because it also follows SI prefixes, allows for easy representation of decimals as integers.

Here's a little conversion table

<table class="table">
	<tr>
		<td>1 kiloperun</td>
		<td>1000 perun</td>
		<td>100000%</td>
	</tr>
	<tr>
		<td>1 hectoperun</td>
		<td>100 perun</td>
		<td>10000%</td>
	</tr>
	<tr>
		<td>1 decaperun</td>
		<td>10 perun</td>
		<td>1000%</td>
	</tr>
	<tr>
		<td>1 perun</td>
		<td></td>
		<td>100%</td>
	</tr>
	<tr>
		<td>1 deciperun</td>
		<td>.1 perun</td>
		<td>10%</td>
	</tr>
	<tr>
		<td>1 centiperun</td>
		<td>.01 perun</td>
		<td>1%</td>
	</tr>
	<tr>
		<td>1 milliperun</td>
		<td>.01 perun</td>
		<td>.1%</td>
	</tr>
</table>
