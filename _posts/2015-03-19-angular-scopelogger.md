---
layout: post
title: Angular ScopeLogger
---
{% include JB/setup %}

I put together a little chrome extension that will let you right click anywhere on the page and log the current scope to the console. I've been using it for about a month and its been incredibly useful to my workflow.

![Angular ScopeLogger Screenshot](https://lh5.googleusercontent.com/oJ3uMIOvIqS55SygeO-PitYRgWf5tqx24DA6PP0_piytFvZ6vTlCsMaSYQNfJCkJOPunQ-G0ug=s640-h400-e365-rw)

## How to Get It

There's two ways to get the extension

* [The Chrome Store](https://chrome.google.com/webstore/detail/angular-scopelogger/lbfklacacfeehegkhklnoadciknkhlcb)
* Download and load via [github](https://github.com/aakilfernandes/Angular-ScopeLogger)

## Why

Angular is incredibly modular which makes it a lot of fun to work with, but difficult to debug. The Angular team released [ng-inspector](https://chrome.google.com/webstore/detail/ng-inspector-for-angularj/aadgmnobpdmgmigaicncghmmoeflnamj?hl=en) which is great for getting a birds eye view of your application. However, sometimes you want to zero-in on a specific scope.

## Todo

* Right now you have to manually open the console. I'd like to have the console automatically open, kind of like "inspect element"
* The permissions are a bit broad. This is because as far as I can tell, there's no way to get the clicked element unless an event listener already exists on the page. This means inject a listener on every single page the user browses. Not pretty.