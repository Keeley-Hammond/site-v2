---
title: Express vs Koa vs Hapi
date: '2017-07-06T22:40:32.169Z'
layout: post
path: '/node-framework-comparison/'
category: Technical
tags:
  - Node
---

I've been using Express in almost all of my Node applications thus far, but for a recent project, I was asked to use a different framework - Koa. Then, in an open source project, we used yet another framework - Hapi.

I've seen each of the three before (and used Koa lightly for a small app in the past), but didn't know much about their differences, or why a project should choose one over the others. So today, we're going to whip up a few very basic servers and routes to check out the differences between the three.

<!--more-->

Before we do that, though, let's start with the basics:

---

### What is a framework?

A 'framework' is a bit of a suitcase word - it can mean a few different things depending on the context and the application, but is always a supporting structure for an application. In Node, when we say 'framework', we're talking about a structure that lets us build a REST API or otherwise make server connections without having to write a lot of the middleware involved.

So when we're evaluating frameworks, we're looking at:

1. How performant they are (Are they fast? Do they have a lot of middleware that we won't use that might add bloat?)
2. What features they do and don't support (Is async/await supported or built in?)
3. Do I (the developer) like them (this is wildly subjective, but hell, what's software without strong opinions about subjective issues?)

---

### Basic Comparision

Below is a quick summary of each framework, as well as really basic server code, so we can see their similarities and differences:

#### Express

Express is the most popular framework for Node by far.

```js
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
  console.log(`Express is listening to http://localhost:${PORT}`)
})
```

The above probably looks very familiar if you're a node developer. We require express, and then instantiate it by assigning it to the variable app. Then instantiate a server to listen to a port, port 3000.

As an aside: the `app.listen()` is actually just a wrapper around node's `http.createServer()`. You may have also seen it written this way:

```js
const express = require('express')
const app = express()
const http = require('http')

const PORT = process.env.PORT || 3000
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
```

Let's look at Express routing. The code below is a paired down version of the routing we used for songs in HOPS Music, a side project I've been working on.

NOTE: We're using MongoDB and Mongoose for HOPS Music, so some of the methods below (`.save()`, `.find()`, etc) are Mongoose, not strictly Express. I've also removed some methods (like `.lean()`) to add readability here:

```js
const Router = require('express').Router
const router = Router()
const Song = require('../models/song')

router
  .get('/', (req, res, next) => {
    Song.find()
      .then(songs => res.send(songs))
      .catch(next)
  })

  .get('/:id', (req, res, next) => {
    const id = req.params.id
    Song.findById(id)
      .then(song => res.send(song))
      .catch(next)
  })

  .post('/', (req, res, next) => {
    new Song(req.body)
      .save()
      .then(song => res.send(song))
      .catch(next)
  })

  .put('/:id', (req, res, next) => {
    Song.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(song => res.send(song))
      .catch(next)
  })

  .delete('/:id', (req, res, next) => {
    Song.findByIdAndRemove(req.params.id)
      .then(response => {
        res.send({ removed: response ? true : false })
      })
      .catch(next)
  })

module.exports = router
```

### Koa

Koa is developed by the same team behind Express and it looks very similar to Express at first glance:

```js
const koa = require('koa')
const app = koa()
const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
  console.log(`Koa is listening to http://localhost:${PORT}`)
})
```

Right away you can see the similarities. Essentally you just required koa instead of express. We even have the same `app.listen()` wrapper function.

What makes Koa truly standout - and what actually led to me working with it - is its way to ditch callback completely by either using ES6 function generators or the newer async/await control flow. It also eliminates much of the middleware that Express uses.

Generators are new to JavaScript, but had been used in other languages; one person comapred them to `interruption` in C. Generators introduced a means to run -> halt and run something else -> come back.

Koa 1 is famous for supporting generator-based control out of the box, at a time when most frameworks didn't. This is what a typical piece of code for Koa 1 that uses the middleware cascading and improved error handling looks like:

```js
// Taken from https://github.com/koajs/koa
app.use(function*(next) {
  // generator signified by *
  try {
    yield next
  } catch (err) {
    this.body = { message: err.message }
    this.status = err.status || 500
  }
})

app.use(function*(next) {
  const user = yield User.getById(this.session.id)
  this.body = user
})
```

I was confused, however, when I was reading the Koa docs and didn't see any generators in the documentation. It turns out that Koa 2 (the current version) removes built-in support for generators and uses async functions instead. The signature of middleware functions will change to support async arrow functions.

Here's the same code as above, but written for Koa 2:

```js
// Taken from https://github.com/koajs/koa
app.use(async (ctx, next) = > {
  try {
    await next();
  } catch (err) {
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
  }
});

app.use(async ctx => {
  const user = await User.getById(ctx.session.id);
  ctx.body = user;
});
```

From what I can tell, adoption of the async/await control flow is now the standard over ES6 generators. A quick ping on the Koa project confirmed as much.

Let's take a look at what it might look like if we rewrote our music REST API in Koa1, where we're using generators:

```js
const koa = require('koa')
const route = require('koa-route') //notice how this has been added to our server
const app = koa()
const PORT = process.env.PORT || 3000

app.use(
  route.get('/songs', function*() {
    this.body = 'Get'
  })
)

app.use(
  route.get('/songs/:id', function*(id) {
    this.body = 'Get id: ' + id
  })
)

app.use(
  route.post('/songs', function*() {
    this.body = 'Post'
  })
)

app.use(
  route.put('/songs/:id', function*(id) {
    this.body = 'Put id: ' + id
  })
)

app.use(
  route.delete('/songs/:id', function*(id) {
    this.body = 'Delete id: ' + id
  })
)

const server = app.listen(PORT, () => {
  console.log(`Koa is listening to http://localhost:${PORT}`)
})
```

Now here's a version of what routes might look like in Koa2, using async/await (_NOTE: It was amazing how few examples or demos I could find of this! I hope this is helpful to anyone looking for very basic REST examples in Koa2._):

```js
const koa = require('koa')
const router = require('koa-router')() //notice this is different; 'router' instead of 'route'
const app = koa()
const PORT = process.env.PORT || 3000

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = 500
    ctx.message = err.message || 'Sorry, an error has occurred.'
  }
})

const router = new Router()

router
  .get('/songs/', async ctx => {
    let item = await logic.get()
    ctx.body = item
  })

  .post('/songs', async ctx => {
    let item = await logic.create(ctx.request.fields)
    ctx.body = `item id: ${item._id}`
  })

  .get('/songs/:id', async ctx => {
    let item = await logic.get(ctx.params.id)
    ctx.body = item
  })

app.use(router.routes()).use(router.allowedMethods())

const server = app.listen(PORT, () => {
  console.log(`Koa is listening to http://localhost:${PORT}`)
})
```

I put this fairly crappy code out there as a first attempt at understanding Koa's routing using the async/await control flow, rather than the generator control flow. The handling is fairly different; I thought [Koa's docs](https://github.com/koajs/koa/blob/master/docs/koa-vs-express.md) did a nice job of stating the difference for Express users:

\*Philosophically, Koa aims to "fix and replace node", whereas Express "augments node". Koa uses promises and async functions to rid apps of callback hell and simplify error handling. It exposes its own ctx.request and ctx.response objects instead of node's req and res objects.

Express, on the other hand, augments node's req and res objects with additional properties and methods and includes many other "framework" features, such as routing and templating, which Koa does not.\*

### Hapi

_(As a quick aside: Hapi is the server that I have worked with the least and the one that I had to do the most reading about. I'd be happy to be corrected or have clarification on anything written here.)_

Hapi is a bit more robust than either Express or Koa. It's a "feature rich framework" (as described in the docs) that favors configuration over code and attempts to cover a wider ranger of use cases out of the box. It was originally created by a member of WalmartLabs, and it is intended for large teams and large projects. Because of this, it can be a bit boilerplate-heavy for small projects.

Let's set up our server:

```js
const Hapi = require('hapi')
const PORT = process.env.PORT || 3000
const server = new Hapi.Server(PORT)

server.start(() => {
  console.log(`Hapi is listening to http://localhost:${PORT}`)
})
```

Right away, you can see unique things in Hapi's code. Look at the first few lines: `hapi` is required, but instead of instantiating a hapi app, you create a new Server and specify the port. In Express and Koa, we get a callback function; in Hapi, we get a new server object.

When we call `server.start()`, we start the server on port 3000 which then returns a callback. It's not a wrapper around `http.CreateServer()`; it's using it's own logic.

Where we can really see the differences between Hapi and the other two frameworks, though, is in the routing. Let's write some basic REST routes for a fake music REST API, similar to Express above:

```js
const Hapi = require('hapi');
const PORT = process.env.PORT || 3000;
const server = new Hapi.Server(PORT);

server.route([
  {
    method: 'GET',
    path: '/songs'),
    handler: (request, reply) => {
      reply('GET received for songs');
    }
  },
  {
    method: 'POST',
    path: '/songs'),
    handler: (request, reply) => {
      reply('POST received for songs');
    }
  },
  {
    method: 'GET',
    path: '/songs/{id}'),
    handler: (request, reply) => {
      reply('GET received for object with ID of ' + request.params.id);
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('Hello!');
    }
  }
]);

server.start(() => {
    console.log(`Hapi is listening to http://localhost:${PORT}`);
});
```

You can see right away that, for each API call, we have to write a lot more code than we had to write with Express. Hapi’s configuration-centric approach does tend to mean more boilerplate, and that can make it more error prone.

That's not to say that more boilerplate is always a bad thing; for larger teams, for example, Hapi may be more consistent and self-descriptive and thus easier to read and parse. I also know a several Node developers who like to have the extra control over their code, and so prefer to write out the methods and handlers this way. I don't think it's personally for me, but to each their own!

### Conclusion

In summary:

Express: Lightweight and minimalist, supported by most middleware, seems to be the defacto standard.

Koa: Great async/await support for asynchronous flow. Seems to be 'the new hottness'.

Hapi: Great for larger scale projects out of the box, but has some extra middleware to deal with.

I see myself continuing to use Express in the future, but would really like to do more with Koa, as I really like the new async/await control flow and see us generally moving in that direction. In the future, I'd also like to explore Socket.io, Sails and Meteor, which all seem to be quite popular.

---

### Bibliography:

If you'd like a few more resources on the difference between Node frameworks, here are a few articles that I read while writing this blog post. Thanks to the authors for the great writeups!

- https://www.airpair.com/node.js/posts/nodejs-framework-comparison-express-koa-hapi
- https://www.smashingmagazine.com/2016/08/getting-started-koa-2-async-functions/
- https://objectpartners.com/2016/12/22/node-js-framework-comparison-express-js-vs-hapi-js/
- https://blog.jscrambler.com/migrate-your-express-app-to-koa-2/
-
