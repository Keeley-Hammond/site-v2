---
title: "Node 8 is here!"
date: "2017-06-01T22:12:03.284Z"
layout: post
path: "/node-8-release/"
category: "node npm technicalthursdays"
description: "We have two pretty big things happening this week - the release of npm5 and the (finally!) release of Node 8."
---

We have two pretty big things happening this week - the release of npm5 and the (finally!) release of Node 8.

Version 8 is the newest release of Node, and it’s packed with features. Going under the codename Carbon, Node 8 was originally slated to be released in late April but was delayed in favor of the release of Ignition and TurboFan for the V8 JavaScript Engine. Node 8 will use V8 5.8 with ABI compatible with V8 6.0. This will provide better performance, a stronger support contract with V8, and a smaller delta between Node 8 and 9 as indicated by the Node.js Collection. Node 8 is still on track to go into LTS in October 2017 and will be supported until December 2019.

## What’s New

### N-API, An API for Building Native Addons
This API will be Application Binary Interface (ABI) stable across versions of Node.js. It is intended to insulate Addons from changes in the underlying JavaScript engine and allow modules compiled for one version to run on later versions of Node.js without recompilation. The API is currently experimental. It is independent from the underlying JavaScript runtime (ex V8) and is maintained as part of Node.js itself.

### util.promisify
util.promisify() allows developers to wrap callback APIs to return Promises. The function works with little overhead and follows a standard API.

### JS Bindings for the Inspector
The new inspector core module enables developers to leverage the debug protocol used by the Chrome inspector in order to inspect currently running JavaScript code. This feature is experimental.

#### NPM 5
Node 8 will ship with the newest version of NPM. After the success and notable improvements of Yarn, NPM has followed suit in many areas and is releasing a huge update in version 5 in order to compete. Most notable features are offline mode, --save by default, and a new lockfile that gets automatically created.

#### AsyncHooks API
AsyncHooks enables users to monitor and track state across Node’s asynchronous operations, enabling better diagnostic tools and other utilities. This is similar to the popular Continuation Local Storage library which gives the ability to set and get values that are scoped to the lifetime of these chains of function calls. The cls-hooked library has already created a drop-in solution to replace Continuation Local Storage in favor of the native API. Keep in mind that AsyncHooks is still experimental.

#### Zero-Filling Buffers
The legacy new Buffer(num) constructor will fill with zeros by default now, which makes Node safer by preventing a common pitfall from becoming a security issue. Previously, buffers allocated using the new Buffer(num) constructor did not initialize the memory space with zeros which allowed sensitive information to potentially leak in.

#### Date Parsing
When the time zone offset is absent, date-only forms are interpreted as a UTC time and date-time forms are interpreted as a local time. This follows the behavior introduced in ES2015.
Other Notable Additions:
Buffer
Buffer methods now accept Uint8Array as input
Child Process
Argument and kill signal validations have been improved
Methods accept Uint8Array as input
Console
Error events emitted when using console methods are now suppressed
Domains
Native Promise instances are now Domain aware
Errors
Node has started assigning static error codes to errors generated
File System
The utility class fs.SyncWriteStream has been deprecated
The deprecated fs.read() string interface has been removed
HTTP
Improved support for userland implemented Agents
Outgoing Cookie headers are concatenated into a single string
The httpResponse.writeHeader() method has been deprecated
New methods for accessing HTTP headers have been added to OutgoingMessage
Lib
The legacy linkedlist module has been removed
REPL
REPL magic mode has been deprecated
Src
The —-debug command-line argument has been removed
Stream
Stream now supports destroy() and _destroy() APIs
Stream now supports the final() API
TLS
The rejectUnauthorized option now defaults to true
Util
Symbol keys are now displayed by default when using util.inspect()
toJSON errors will be thrown when formatting %j
Convert inspect.styles and inspect.colors to prototype-less objects
Zlib
Support Uint8Array in Zlib convenience methods
Zlib errors now use RangeError and TypeError consistently
URL:
The WHATWG URL implementation is now a fully-supported Node.js API

The full list and associated code for the release can be found on GitHub

<figure>
	<blockquote>
		<p>It is a press, certainly, but a press from which shall flow in inexhaustible streams… Through it, god will spread his word.</p>
		<footer>
			<cite>—Johannes Gutenberg</cite>
		</footer>
	</blockquote>
</figure>
