import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';

const lengthProgression = 10;
const maxDiffProgression = 10;

const getQuestionAndAnswer = () => {
    const firstNum = getRandomNumber();    
    const diffProgression = getRandomNumber(1, maxDiffProgression);
    const skip = getRandomNumber(0, lengthProgression);
    const progression = [];
    for (let i = 0; i < lengthProgression; i += 1) {
        progression.push(firstNum + diffProgression * i);
      }
    const answer = progression[skip];
    progression[skip] = '..';
    const question = progression.join(' ');
    return [question, String(answer)];
};

const initGameProgression = () => {
    playGame(rule, getQuestionAndAnswer);
  };
  
  export default initGameProgression;