import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getCorrectAnswer = (operand1, operand2, operation) => {
  switch (operation) {
    case '+': return (operand1 + operand2);
    case '-': return (operand1 - operand2);
    case '*': return (operand1 * operand2);
    default: throw new Error('Incorrect input data...');
  }
};

const getQuestionAndAnswer = () => {
  const maxRandomNumber = 20;
  const operand1 = getRandomNumber(0, maxRandomNumber);
  const operand2 = getRandomNumber(0, maxRandomNumber);
  const operation = operations[getRandomNumber(0, operations.length)];
  const question = `${operand1} ${operation} ${operand2}:`;
  const answer = getCorrectAnswer(operand1, operand2, operation);
  return [question, String(answer)];
};

const initGameCalc = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGameCalc;
