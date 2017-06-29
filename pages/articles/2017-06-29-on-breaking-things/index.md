---
title: On Breaking Things
date: "2017-06-29T22:40:32.169Z"
layout: post
path: "/on-breaking-things/"
category: "technicalthursday"
description: "One of my first forays into code happened because I didn’t want to pay for airport wifi. It was Chicago, specifically, one of the last airports where Boingo still has a stronghold over the “first 30 minutes are free, all other minutes thereafter will be $50 each” airport internet market. There was a part of me that was furious over the idea of..."
---

One of my first forays into code happened because I didn’t want to pay for airport wifi.

It was Chicago, specifically, one of the last airports where Boingo still has a stronghold over the “first 30 minutes are free, all other minutes thereafter will be $50 each” airport internet market. There was a part of me that was furious over the idea of paying for internet and - after signing up for the free 30 minutes - started Googling around looking for a way to get around it.

On the third hit, I found a tutorial that told me to open Terminal, run a few sudo commands that would restructure my computer’s perceived timezones to trick the wifi into thinking that 30 minutes had not passed (and would, in fact, never pass) and then enjoy all of the free wifi I was now bathing in. I opened Terminal, ran the commands and opened Chrome, thinking that I would have all of the free internet I could want.

What actually happened was that I nuked all of the preset Apple timezones settings off of my computer.

-

It’s been about four years and a new computer since then. I’ve learned a lot more about the command line and a bit more about stealing wifi ([thanks @ohhoe, for this great ORD wifi workaround](http://rachelisaweso.me/ok/how-to-get-around-airport-wi-fi-limits/)). But I still remember the intermingling of pride and complete dismay that came after I realized I had permanently fucked up my laptop because I decided to try something I didn’t fully understand.

The sense of pride was the most interesting - because, in breaking my laptop, I felt like I was sort of a “real developer”. A real developer - or maybe more accurately in my heart of hearts, a real hacker - is someone who breaks the system because it doesn’t work the way that they want to, but they know how to get what they want regardless.

A few years after my timezone destruction, I was a student at a code bootcamp. Our back-end project in Node was using Spotify’s API to grab a list of recommendations for a user, based on their friend’s recently played songs. After playing with the API on the first day of our project… we discovered that Spotify’s API, despite being incredibly well-documented and frequently updated, doesn’t have an endpoint that will allow you to get your friends’ songs - or your friends’ anything, for that matter.

(To be clear and fair to the Spotify team: I’m 90% sure this is a business-driven decision, rather than an engineering decision. You don’t want third party APIs to have easy access to the data that makes up the backbone of your business model. Their API was otherwise a joy to work with - amazing docs and tutorials.).

At that point, there were two options:

1. Give up and change our project idea
2. Break the shit out of the Spotify API and risk having it blow up in our faces.

We chose Route #2. 

[Fortunately for us, this time it ended better than my first attempt to beat Boingo.](https://donutjs.club/)

I’ve been thinking a lot about these two examples because as I look back on the stuff that I’m the most proud of, it’s really been on the projects or places where I was trying to break the system or to outwit an existing structure to make the code do what I want it to do. 

What's something else that I could break? What are some of the best examples or your favorite examples of people busting things to get ahead?

*Oh and for the record, [I finally found a great tutorial for getting around airport wifi limits](http://rachelisaweso.me/ok/how-to-get-around-airport-wi-fi-limits/). I tested it a few weeks ago in Chicago, and I still have all of my timezone settings ;).*