---
layout: post
title: Faster, Simpler, Web Apps with Frontloaded Data
---
{% include JB/setup %}

A common way that html apps bootstraps goes like this

1. HTML loads
2. Assets are loaded
3. AJAX requests are kicked off
4. Data is returned
5. The page is rendered

How could we improve this pattern? Since we're already loading the HTML, lets embed all the necessary data as strings in that first HTML call. That reduces our bootstrap pattern to

1. HTML and frontloaded data loads
2. Assets are loaded
3. The page is rendered

The result is cleaner code and faster load times. Especially since you've gotten rid of all that asynchronous code that can be difficult to debug. I know embedding data as strings in HTML feels dirty... but it works suprisingly well.

## How is data frontloaded

There are two ways to frontload data. My preference is for the string method.

### The script method

	<script> var key = 'asdfsdaf' </script> 

This is probably the most common method. I'm not a big fan of this method. It requires you to think about client side javascript on the server, pollutes the global namespace, and could possibly open up XSS issues.

### The string method

    <textarea frontload="key">asdfsdaf</textarea> 

This is the method I've been using in most of my projects. Once the data is on the page, you can use whatever tool of choice to grab the value of the textarea and interpret it as you like. If you go this route, you might enjoy my angular solution: <a href="https://github.com/aakilfernandes/angular-frontloader">https://github.com/aakilfernandes/angular-frontloader</a>