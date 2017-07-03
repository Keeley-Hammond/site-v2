---
title: "Node 8 is here!"
date: "2017-06-01T22:12:03.284Z"
layout: post
path: "/node-8-release/"
category: "node npm technicalthursdays"
description: "We have two pretty big things happening this week - the release of npm5 and the (finally!) release of Node 8."
---

We have two pretty big things happening this week - the release of npm5 and the (finally!) release of Node 8. 🚀

I've been really excited about the newest release of Node (for several reason that we'll go into). Version 8, released on May 30 after a short delay, is packed with features. Node 8 will use V8 5.8 with ABI compatible with V8 6.0 - this is also a reason the Node Foundaton is calling this release Node 8, rather than Node v8. Don't want to confuse the release and the underlying engine. 😊  Node 8 is also still on track to go into LTS in October 2017.

So what's new in Node?

#### AsyncHooks API
Async Hooks, a diagnostics tool that’s been in development for quite some time, has finally landed! This is probably the thing that I'm most excited about.

This diagnostics API allows developers to monitor the operation of the Node.js event loop, tracking asynchronous request and handles through their complete lifecycle and enabling better diagnostic tools and other utilities.

### N-API, An API for Building Native Addons
This API will be Application Binary Interface (ABI) stable across versions of Node.js. It is intended to insulate Addons from changes in the underlying JavaScript engine and allow modules compiled for one version to run on later versions of Node.js without recompilation. The API is currently experimental. It is independent from the underlying JavaScript runtime (ex V8) and is maintained as part of Node.js itself.

### util.promisify
The `util.promisify()` feature allows developers to wrap callback APIs to return Promises. The function works with little overhead and follows a standard API.

### JS Bindings for the Inspector
The new inspector core module enables developers to leverage the debug protocol used by the Chrome inspector in order to inspect currently running JavaScript code. 

#### NPM 5
Node 8 will ship with the newest version of NPM. After the success and notable improvements of Yarn, NPM has followed suit in many areas and is releasing a huge update in version 5 in order to compete. 

Common package management tasks such as package installation and version updates are now up to five times faster; lockfiles ensure consistent installations across development environments; and a self-healing cache with automatic error recovery protects against corrupted downloads. npm@5 also introduces SHA-512 code verification.

Most notable features are offline mode, --save by default, and a new lockfile that gets automatically created.

#### Zero-Filling Buffers
The legacy new Buffer(num) constructor will fill with zeros by default now, which makes Node safer by preventing a common pitfall from becoming a security issue. Previously, buffers allocated using the new Buffer(num) constructor did not initialize the memory space with zeros which allowed sensitive information to potentially leak in.

There are a lot of other notable additions and deprecations; the full list and associated code for the release <a href="https://github.com/nodejs/node/pull/12220">can be found on GitHub.</a>

=

*UPDATE (June 13)*: JS Party, one of my favorite podcasts, released an episode with Rebecca Turner and Kat Marchán about npm@5. <a href="https://changelog.com/jsparty/13">Listen to it here.</a>

*UPDATE (June 23)*: JS Party just released a really good interview with Node Foundation Director James Snell about new features in Node 8. <a href="https://changelog.com/jsparty/14">You can listen to it here.</a>

<!--<figure>
	<blockquote>
		<p>It is a press, certainly, but a press from which shall flow in inexhaustible streams… Through it, god will spread his word.</p>
		<footer>
			<cite>—Johannes Gutenberg</cite>
		</footer>
	</blockquote>
</figure>-->
