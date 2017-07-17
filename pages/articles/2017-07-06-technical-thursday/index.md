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


### Basic Comparision
Below is a quick summary of each framework, as well as really basic server code, so we can see their similarities and differences:

#### Express
Express is the most popular framework for Node by far.

```js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, function() {
    console.log(`Express is listening to http://localhost:${PORT}`);
});
```

The above probably looks very familiar if you're a node developer. We require express, and then instantiate it by assigning it to the variable app. Then instantiate a server to listen to a port, port 3000. The `app.listen()` is actually just a wrapper around node's `http.createServer()`.

### Koa

```js
const koa = require('koa');
const app = koa();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, function() {
    console.log(`Koa is listening to http://localhost:${PORT}`);
});
```

Right away you can see that Koa is similar to Express. Essentally you just required koa instead of express. Also `app.listen()` is the exact same wrapper function as used in Express.

### Hapi

```js
const Hapi = require('hapi');
const PORT = process.env.PORT || 3000;
const server = new Hapi.Server(PORT);

server.start(function() {
    console.log(`Hapi is listening to http://localhost:${PORT}`);
});
```

Hapi is the unique one of the group. First like always, hapi is required but instead of instantiating a hapi app, you create a new Server and specify the port. In Express and Koa we get a callback function but in Hapi we get a new server object. 

Then once we call `server.start()`, we start the server on port 3000 which then returns a callback. However this is not like Koa and Express, it is not a wrapper around `http.CreateServer()`, it is using it's own logic.


### Bibliography:

If you'd like a few more resources on the difference between Node frameworks, here are a few articles that I read while writing this blog post:

* https://www.airpair.com/node.js/posts/nodejs-framework-comparison-express-koa-hapi
* 