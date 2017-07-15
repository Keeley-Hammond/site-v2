---
title: Express vs Koa vs Hapi
date: "2017-07-06T22:40:32.169Z"
layout: post
path: "/node-framework-comparison/"
category: "technicalthursday"
description: "--."
---

So I've been using Express in almost all of my Node applications thus far - 

### What is a framework?
Express is the most popular framework for Node by far.

### Basic Comparision
The first step for any developer when working on a Node.js web application is to create a basic server. So let's create a server using each framework to see their similarities and differences.

#### Express

```js
var express = require('express');
var app = express();

var server = app.listen(3000, function() {
    console.log('Express is listening to http://localhost:3000');
});
```

This is probably pretty natural to all node developers. We require express and then instantiate it by assigning it to the variable app. Then instantiate a server to listen to a port, port 3000. The app.listen() is actually just a wrapper around node's http.createServer().

### Koa

```js
var koa = require('koa');
var app = koa();

var server = app.listen(3000, function() {
    console.log('Koa is listening to http://localhost:3000');
});
```

Right away you can see that Koa is similar to Express. Essentally you just required koa instead of express. Also app.listen() is the exact same wrapper function as used in Express.

### Hapi

```js
var Hapi = require('hapi');
var server = new Hapi.Server(3000);

server.start(function() {
    console.log('Hapi is listening to http://localhost:3000');
});
```

Hapi is the unique one of the group. First like always, hapi is required but instead of instantiating a hapi app, you create a new Server and specify the port. In Express and Koa we get a callback function but in Hapi we get a new server object. 

Then once we call server.start(), we start the server on port 3000 which then returns a callback. However this is not like Koa and Express, it is not a wrapper around http.CreateServer(), it is using it's own logic.


### Bibliography:

If you'd like a few more resources on the difference between Node frameworks, here are a few articles that I read while writing this blog post:

* https://www.airpair.com/node.js/posts/nodejs-framework-comparison-express-koa-hapi
* 