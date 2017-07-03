---
title: Spinning up an Amazon Lambda Instance
date: "2017-07-03T22:40:32.169Z"
layout: post
path: "/spinning-up-lambda/"
category: "technicalthursday"
description: "Happy Monday! It's the holiday weekend (happy 4th, everyone), so I have a little extra time to play with code that I've been wanting to play around with for a while."
---

Happy Monday! It's the holiday weekend (happy 4th, everyone), so I have a little extra time to play with code that I've been wanting to play around with for a while.

Before I get into that, a quick weekend recap: I had brunch this weekend with friends, and got to meet the awesome Charity Majors (Founder of [Honeycomb.io](https://twitter.com/honeycombio) and [@mipsytipsy](https://twitter.com/mipsytipsy) on Twitter)! It was a hot one in Portland on Sunday (88*!), so Dave, my friend Kate and I went on a hike to Ramona Falls on Mt Hood, followed by a very pink beer at Ex Novo. 

<div class="row">
  <div class="col-md-6 ">
    <figure>
    <img style="height: 310px;" src="./two-on-bridge.jpg" alt="At the falls">
    </figure>
  </div>
  <div class="col-md-6 text-xs-left">
    <figure>
    <img style="height: 310px;" src="./ex-novo-cactus.jpg" alt="ex-novo-cactus">
    </figure>
  </div>
</div>

This weekend, I played around with Amazon Lambda. I've used AWS in the past (mainly S3), but had never tried Amazon's serverless solution, and wanted to see what it was capable of.

### What is Lambda?

AWS has become an enormous suite of services, and Lambda is the "serverless" option under the greater AWS umbrella.

### Setting Up Your First Instance

I followed the tutorial in the AWS docs for 'Getting Started with Lambda'; [you can see the tutorial here.](http://docs.aws.amazon.com/lambda/latest/dg/getting-started.html) I'm not a fan of the AWS docs in general, but found this to be pretty straightforward.

