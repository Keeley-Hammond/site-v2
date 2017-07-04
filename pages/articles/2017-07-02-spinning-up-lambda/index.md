---
title: Spinning up an Amazon Lambda Instance
date: "2017-07-02T22:40:32.169Z"
layout: post
path: "/spinning-up-lambda/"
category: "technicalthursday"
description: "This weekend, I played around with Amazon Lambda. I've used AWS in the past (mainly S3), but had never tried Amazon's serverless solution, and wanted to see what it was capable of."
---

It's the holiday weekend (happy 4th, everyone), so I have a little extra time to play with code that I've been wanting to play around with for a while.

This weekend, I played around with Amazon Lambda. I've used AWS in the past (mainly S3), but had never tried Amazon's serverless solution, and wanted to see what it was capable of.

#### What is Lambda?

AWS has become an enormous suite of services, and Lambda is the "serverless" option under the greater AWS umbrella.

#### Setting Up Your First Instance

I followed the tutorial in the AWS docs for 'Getting Started with Lambda'; [you can see the tutorial here.](http://docs.aws.amazon.com/lambda/latest/dg/getting-started.html) I'm not a fan of the AWS docs in general, but found this to be pretty straightforward.

If you've set up an AWS instance before and already have the AWS CLI installed, you can go ahead and skip ahead to Step 2: Hello World. If you haven't set up your AWS CLI, [the instructions are actually pretty good, albeit verbose (but I think that's true of most of AWS' docs).](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration)

Go ahead and install the AWS CLI and run the two tests to make sure it's installed. Note down your account id and the secret key - I downloaded mine.

One thing for Mac users: **make sure you have Python installed from python.org, so that you have a global version of `pip`.** I had Python installed through OSX's defaults, and it had wiped out `pip` in the last update, which was very cool and good until I figured out what was going on. Also, the docs say that you can configure with `aws configure`, but later commands threw errors for me until I reconfigued my admin user with `aws configure --profile [adminfoo]`. So if you're getting 'not found' errors, trying reconfiguring with that.

#### 'Hello World' Lambda Function and Console

Once your CLI is up, it's time to create your first Lambda function. The docs used Python as their default blueprint; the most basic lambda will look like the following in Python:

```py
def lambda_handler(event, context):
  return "Hello World!"
```

I really wanted to use Node, however, so I deviated from the tutorial slightly and created my blueprint in Node. The Node version is pretty similar:

```js
exports.handler = function(event, context) {
 context.succeed(“Hello, World!”);
};
```

Spinning

Editing code inline is great for getting your feet wet with Lambda, but it's definitely not scalable. For real-world projects, we’ll need an automated way for zipping up our lambda with the node modules and pushing it to AWS. I have a few other projects to work on this week, but I'm going to do a part two of this blog post next weekend that covers moving past 'Hello World'.

#### Final Thoughts


