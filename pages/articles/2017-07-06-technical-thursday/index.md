---
title: Express vs Koa vs Hapi
date: "2017-07-06T22:40:32.169Z"
layout: post
path: "/node-framework-comparison/"
category: "technicalthursday"
description: "I've been using Express in almost all of my Node applications thus far,but for a recent project, I was asked to use a different framework - Koa. Then, in an open source project, we used yet another framework - Hapi."
---

I've been using Express in almost all of my Node applications thus far,but for a recent project, I was asked to use a different framework - Koa. Then, in an open source project, we used yet another framework - Hapi.

I've seen each of the three before (and used Koa lightly for a small app in the past), but didn't know much about their differences, or why a project should choose one over the others. So today, we're going to whip up a few very basic servers and routes to check out the differences between the three.

Before we do that, though, let's start with the basics:

### What is a framework?
A 'framework' is a bit of a suitcase word - it can mean a few different things depending on the context and the application, but is always a supporting structure for an application. In Node, when we say 'framework', we're talking about a structure that lets us build a REST API or otherwise make server connections without having to write a lot of the middleware involved.

So when we're evaluating frameworks, we're looking at:

1. How performant they are (Are they fast? Do they have a lot of middleware that we won't use that might add bloat?)
2. What features they do and don't support (Is async/await supported or built in?)
3. Do I (the developer) like them (this is wildly subjective, but hell, what's software without strong opinions about subjective issues?)

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

The above probably looks very familiar if you're a node developer. We require express, and then instantiate it by assigning it to the variable app. Then instantiate a server to listen to a port, port 3000. 

The `app.listen()` is actually just a wrapper around node's `http.createServer()`. You may have also seen it written this way:

```js
const express = require('express');
const app = express();
const http = require('http');

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```
Express is fairly low weight and the functionality is not

### Koa

Koa is developed by the same team behind Express and it looks very similar to Express at first glance:

```js
const koa = require('koa');
const app = koa();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, function() {
    console.log(`Koa is listening to http://localhost:${PORT}`);
});
```

Right away you can see the similarities. Essentally you just required koa instead of express. We even have the same `app.listen()` wrapper function.

What makes Koa truly standout - and what actually led to me working with it - is its way to ditch callback completely by either using ES6 function generators or the newer async/await control flow. It also eliminates much of the middleware that Express uses.

Generators are new to JavaScript, but had been used in other languages; one person comapred them to `interruption` in C. Generators introduced a means to run -> halt and run something else -> come back. Koa 1 is famous for supporting generator-based control out of the box, at a time when most frameworks didn't. This is what a typical piece of code for Koa 1 that uses the middleware cascading and improved error handling looks like:

```js
// Adapted from https://github.com/koajs/koa
// In Koa 1.0, middleware is a generator function.
app.use(function *(next) { // generator signified by *
  try {
    yield next;
  } catch (err) {
    // the request context is <code>this</code>
    this.body = { message: err.message }
    this.status = err.status || 500
  }
})

app.use(function *(next) {
  const user = yield User.getById(this.session.id);
  this.body = user;
})
```

I was confused, however, when I was reading the Koa docs and didn't see any generators in the documentation. It turns out that Koa 2 (the current version) removes built-in support for generators and uses async functions instead. The signature of middleware functions will change to support async arrow functions. 

Here's the same code as above, but written for Koa 2:

```js
// Taken from https://github.com/koajs/koa
// Uses async arrow functions
app.use(async (ctx, next) = > {
  try {
    await next(); // next is now a function, await instead of yield
  } catch (err) {
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
  }
});

app.use(async ctx => {
  // await instead of yield
  const user = await User.getById(ctx.session.id);
  // ctx instead of this
  ctx.body = user;
});
```

From what I can tell, adoption of the async/await control flow is now the standard over ES6 generators, but I would be happy to be corrected on that point.


### Hapi

*(As a quick aside: Hapi is the server that I have worked with the least and the one that I had to do the most reading about. I'd be happy to be corrected or have clarification on anything written here.)*

Hapi is a bit more robust than either Express or Koa. It's a "feature rich framework" (as described in the docs) that favors configuration over code and attempts to cover a wider ranger of use cases out of the box. It was originally created by a member of WalmartLabs, and it is intended for large teams and large projects. Because of this, it can be a bit boilerplate-heavy for small projects.

```js
const Hapi = require('hapi');
const PORT = process.env.PORT || 3000;
const server = new Hapi.Server(PORT);

server.start(function() {
    console.log(`Hapi is listening to http://localhost:${PORT}`);
});
```

Right away, you can see unique things in Hapi's code. Look at the first few lines: `hapi` is required, but instead of instantiating a hapi app, you create a new Server and specify the port. In Express and Koa, we get a callback function; in Hapi, we get a new server object. 

When we call `server.start()`, we start the server on port 3000 which then returns a callback. It's not a wrapper around `http.CreateServer()`; it's using it's own logic.

So what happens when we start writing routes in Hapi?


### Conclusion

In summary:

Express:
* Lightweight and minimalist, supported by most middleware, seems to be the defacto standard

Koa:
* Great async/await support for asynchronous flow
* 'The new hottness'

Hapi:
* Great for larger scale projects out of the box.

I see myself continuing to use Express in the future, but would really like to do more with Koa, as I really like the new async/await control flow and see us generally moving in that direction. In the future, I'd also like to explore Socket.io, Sails and Meteor, which all seem to be quite popular.


### Bibliography:

If you'd like a few more resources on the difference between Node frameworks, here are a few articles that I read while writing this blog post. Thanks to the authors for the great writeups!

* https://www.airpair.com/node.js/posts/nodejs-framework-comparison-express-koa-hapi
* https://www.smashingmagazine.com/2016/08/getting-started-koa-2-async-functions/
* https://objectpartners.com/2016/12/22/node-js-framework-comparison-express-js-vs-hapi-js/
* 