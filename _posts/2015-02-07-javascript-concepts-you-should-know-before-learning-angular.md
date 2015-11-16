---
layout: post
---
{% include JB/setup %}

Javascript developers have been a bit spoiled by jQuery. With its elegant syntax and cross browser compatability, jQuery makes it easy to develop powerful apps without a deep understanding of how javascript works. Angular, however, does not afford such a luxury. Once you get past the trivial To Do apps, progressing with Angular requires a more nuanced understanding of javascript. This is part of why Angular is partially described as having a "hockey stick" learning curve - relatively easy at the beginning with a bend in the middle that gets dramatially tougher. This post hopes to ease that learning curve by diving in to some javascript concepts that are important to progressing with angular.

## Synchronous vs Asynchronous functions

Most functions in javascript are synchronous, meaning they take run in the same thread that they were called in. However, a few functions are asynchronous, meaning that they occur in another thread. Here are the most common asynchronous functions:

1. setTimeout
2. setInterval
3. xmlhttp.send ($.ajax / $.get / $.post in jQuery)

Lets take a look at two quick examples to see why how syncrhonysity effects code execution.

#### Synchronous example
{% highlight javascript %}
var x = 5
syncronousFunctionThatSetsXEqualTo9()
console.log(x) // Logs 9
{% endhighlight %}

#### Asynchronous example
{% highlight javascript %}
var x = 5
asyncronousFunctionThatSetsXEqualTo9()
console.log(x) // Could log 5, could log 9
{% endhighlight %}

### Why does it matter

Angular uses a technique called "dirty checking" to determine when data has updated. However, dirty checking only works if code executes in a single thread. As soon as you start a new thread, dirty checking becomes unpredictable.

How do we use asynchronous functions with Angular? The short answer is that angular provides alternatives which allow dirty checking to work even for asyncrhnous functions. Those alternatives are

1. $timeout
2. $interval
3. $http

The long answer requires a deeper understanding of how angular works, so we'll ignore it for now.

## Prototypical inheritence

The easiest way to think of an object in javascript is as a bag of properties. Those properties might be strings, numbers, functions, or other objects. However, any time we create an object, we also create many *secret* properties. Let's take a look at one of these secret properties below.

{% highlight javascript %}
var x = {a:'b'}

x.toString()
> "[object Object]"
{% endhighlight %}

We called a `toString` function which returns a string version of the object, however we did not define any `toString` function. So who defined this function and how are we able to access it?

We are able to call `toString` because it exists on the Object prototype. Each object you create inherits all the properties of the Object prototype. If you're using chrome's inspector can take a peek at the prototype of any object (or primitive such as number or string) by looking at the `__proto__` property and letting chrome autosuggest the properties for you. First lets create some test variables so we can check their prototype: 

{% highlight javascript %}
var testObject = {a:'b'}
    ,testString = 'hello'
    ,testNumber = 5
{% endhighlight %}

#### The object prototype
![the object prototype](/assets/images/prototypes/object.png)

#### The string prototype
![the string prototype](/assets/images/prototypes/string.png)

#### The number prototype
![the number prototype](/assets/images/prototypes/number.png)

### Why does it matter
We saw previously that objects in javascripts have prototypes and that they can inherit from each other. The same is true of Angular scopes. When you declare a new scope in Angular, be mindful of how your scope inherits from the parent.

## Named parameters
Sometimes you need to pass a function as an argument. Here are some examples of times where we pass a function as an argument

{% highlight javascript %}
setTimeout(function(){...},500)
{% endhighlight %}

{% highlight javascript %}
$.get('/url',function(response){...})
{% endhighlight %}
    
{% highlight javascript %}
animals.forEach(function(value,index){...})
{% endhighlight %}

When we pass a function as a argument, our function might expect arguments that it needs to interact with. `forEach` is an example of that - it gets passed `value` and `index` as arguments. However, these arguments need to be declared in the correct order. For example the following two `forEach` functions below will do different things, just because the names of the arguments are switched.

{% highlight javascript %}
animals.forEach(function(value,index){ //value first, index second
    console.log(value,index,',')
})
>> dog 0 , cat 1 , bird 2 ,
{% endhighlight %}

{% highlight javascript %}
animals.forEach(function(index,value){ //index first, value second
    console.log(value,index,',')
})
>> 0 dog , 1 cat ,  2 bird ,
{% endhighlight %}

Wouldn't it be nice if the order of our arguments didn't matter? If a function uses named parameters - then it doesn't. All that matters is that the name of the argument is correct.

Let's assume there is an function `namedForEach` which gets passed a function we define and utilizes named parameters. In this case, `namedForEach` will log the same text in both of the following functions, even though the parameters are switched.

{% highlight javascript %}
animals.namedForEach(function(value,index){ //value first, index second
    console.log(value,index,',')
})
>> dog 0 , cat 1 , bird 2 ,
{% endhighlight %}

{% highlight javascript %}
animals.namedForEach(function(index,value){ //index first, value second
    console.log(value,index,',')
})
>> dog 0 , cat 1 , bird 2 ,
{% endhighlight %}

If we only wanted one of the arguments we could simply list the argument we need and ignore the other.

{% highlight javascript %}
animals.namedForEach(function(index){ //only one argument
    console.log(index,',')
})
>> 0 , 1 , 2 ,
{% endhighlight %}

### Why it matters

Angular utilizes a concept called "dependency injection" to make our code more elegant. Imagine we have a function that requires a number of different libraries to work. We could pass those libraries as arguments to the function, but then we'd need to manage the logic of which functions need which variables. Named parameters rids us of this overhead - we simply list the libraries we need as arguiments.

