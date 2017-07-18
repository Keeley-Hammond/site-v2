---
title: What Makes Code 'Junior'?
date: "2017-07-13T22:40:32.169Z"
layout: post
path: "/this-week-july-13/"
category: "technicalthursday"
description: "I've been thinking a lot recently about the difference between a junior developer and a senior developer. There's a variety of tangible and intangible qualities that make up both positions, but the hard skill that has me most curious is the quality of code."
---

Before I dive into this, I just want to give a shoutout about the event I'm hosting with Women Who Code tonight(!) - [WWC Networking Night @ Wieden+Kennedy - Intro to VR & Wearable Tech.](https://www.eventbrite.com/e/networking-night-wiedenkennedy-intro-to-vr-wearable-tech-tickets-35443175492) It looks like it's going to be an incredible night, and you should all come out.

  <figure>
    <img style="height: 310px;" src="./july-networking-night.jpg" alt="July Networking Night">
  </figure>

----
I've been thinking a lot recently about the difference between a junior developer and a senior developer. There's a variety of tangible and intangible qualities that make up both positions, but the hard skill that has me most curious is the code.

1. What does 'junior' code look like? 
2. At what level (and with what qualities) is 'junior' code passable for your code base?
3. At what level (and with what qualities) does 'junior' code move into 'mid-level' and 'senior' code?

I spent the day solving a lot of code challenges and trying to figure out the problems for each:

  ```js
  function openOrSenior(data){
  let membership = [];
  for (let i = 0; i < data.length; i++) {
    let age = data[i][0];
    let handicap = data[i][1];
    
    if (age >= 55 && handicap > 7) membership.push('Senior');
    else membership.push('Open');
  }
    
  return membership;
}
  ```

  Versus this smaller, refactored version:

  ```js
  function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  
  return data.map(determineMembership);
}
  ```

This is admittedly a very small problem, but one similar to what a developer might actually put in a code base. 

Similarly, this longer version of the code is:

```js
    x = x + 1;
    let firstThree = parseInt(x.toString().substring(0,3));
    let lastThree = x % 1000;
    
    function sumInt(int){
        let num = int;
        let sum = 0;
        while (num > 0) {
            sum = sum + num % 10;
            num = num / 10;
        }
        return Math.floor(sum);
    }
    
    if (sumInt(firstThree) === sumInt(lastThree)) {
        console.log('YES: ', typeof(x));
        x = x.toString();
        console.log('STRING: ', typeof(x));
        return x;
    }
    else onceInATram(x);
}
```