#!/usr/bin/env node
import readlineSync from 'readline-sync';

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rule);

  const roundsCount = 3;
  let correctAnswersCount = 0;

  while (correctAnswersCount < roundsCount) {
    const question = Math.trunc(Math.random() * 100) + 1;
    console.log(`Question: ${question}`);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;\(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

playGame();
