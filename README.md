# Quiz

https://github.com/SabineWanka/Quiz/issues/1#issue-589541822

A code quiz with multiple-choice questions. code quiz with multiple-choice questions, the high scores are stored client side. 

Why did I made this Quiz? 

```
As a coding bootcamp student
I want to take a timed quiz on JavaScript fundamentals that stores high scores so that I can gauge my progress compared to my peers
```

How does it works? 

1. The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." The navigation option to "View Highscores" and the "Time" value set at 0.

2. Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

3.  Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

4.  When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

Store your questions as an array of objects in a separate file, `questions.js`, that follows this format:

```js
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  ///etc.
];
```

* The length of the array in `questions.js` determines the length of play. Fifteen seconds per question is a good estimate, so 5 questions will result in a length of play of 75 seconds.

The deployed Quiz can be found here:  https://sabinewanka.github.io/Quiz/




