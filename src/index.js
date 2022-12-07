import readlineSync from 'readline-sync';

const playGame = (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(rule);

  const roundsCount = 3;
  let correctAnswersCount = 0;

  while (correctAnswersCount < roundsCount) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
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

export default playGame;
