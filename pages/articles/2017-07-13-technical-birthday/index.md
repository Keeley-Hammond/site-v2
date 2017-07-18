---
title: What does 'junior' code look like?
date: "2017-07-13T22:40:32.169Z"
layout: post
path: "/this-week-july-13/"
category: "technicalthursday"
description: "I've been thinking a lot recently about the difference between a junior developer and a senior developer. There's a variety of tangible and intangible qualities that make up both positions, but the hard skill that has me most curious is the quality of code."
---

*Before I dive into this, I just want to give a shoutout about the event I'm hosting with Women Who Code tonight(!) - [WWC Networking Night @ Wieden+Kennedy - Intro to VR & Wearable Tech.](https://www.eventbrite.com/e/networking-night-wiedenkennedy-intro-to-vr-wearable-tech-tickets-35443175492) It looks like it's going to be an incredible night, and you should all come out.*

  <figure>
    <img style="height: 310px;" src="./july-networking-night.jpg" alt="July Networking Night">
  </figure>

----
I've been thinking a lot recently about the difference between a junior developer and a senior developer. There's a variety of tangible and intangible qualities that make up both positions, but the hard skill that has me most curious is the code.

Obviously there's a lot of subjectivity here, and I'm also not suggesting that junior people can't write high-quality code (or that senior people can't write terrible code from time to time). But I was curious about common patterns or knowledge gaps that junior programmers may have over more experienced engineers, and how they could try to improve those technical skills.

The thing main points I was curious about:

1. What does 'junior' code look like? What are the patterns or knowledge gaps that show in 'junior' code.
2. At what level (and with what qualities) is 'junior' code passable for your code base?
3. At what level (and with what qualities) does 'junior' code move into 'mid-level' and 'senior' code?

Let's use an actual interview question as an example: what's the difference between these two solutions?

*Problem: Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.*

*Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.*

*Example:*
*Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"*
*Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"*

Solution #1:
```js
String.prototype.toJadenCase = function () {
  const sentence = this.split(' ');
  const newSentence = [];
  for (let i = 0; i < sentence.length; i++) {
    let word = sentence[i].split('');
    let upperCase = word[0].toUpperCase();

    word.shift();
    let removedLetter = word.join('');
    let newWord = upperCase.concat(removedLetter);
    newSentence.push(newWord);
  }
  return newSentence.join(' ');
};
```

Solution #2:
```js
String.prototype.toJadenCase = function () { 
  return this.split(' ').map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}
```

* [*Credit to Code Wars for the problem, which you can do here with an account*](https://www.codewars.com/kata/5390bac347d09b7da40006f6)

This is admittedly a very small problem, but illustrates some clear differences in thinking. One, for example, has a lot of variables declared. One makes good use of string and array methods, such as `.map` and `.chartAt()`.  



One piece of advice that I found very helpful:

'Specific examples are hard to give, there are different styles and opinions. Mainly I consider a good programmer someone who understands that she's programming for the next person to read, not to make the machine run, and codes appropriately.'










DELETE BELOW:

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