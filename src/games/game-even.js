import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const maxRandomNumber = 100;
  const question = getRandomNumber(0, maxRandomNumber);
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

const initGameEven = () => {
  playGame(rule, getQuestionAndAnswer);
};
export default initGameEven;
