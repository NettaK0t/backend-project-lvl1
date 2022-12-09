import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  if (num2) return getGCD(num2, num1 % num2);
  return Math.abs(num1);
};

const getQuestionAndAnswer = () => {
  const maxRandomNumber = 20;
  const num1 = getRandomNumber(0, maxRandomNumber);
  const num2 = getRandomNumber(0, maxRandomNumber);

  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);
  return [question, String(answer)];
};

const initGameGCD = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGameGCD;
