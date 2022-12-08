import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < (num / 2 + 1); i += 1){
        if (num % i === 0) return false;
    };
    return true;
};

const getQuestionAndAnswer = () => {  
    const maxRandNum = 179;
    const question = getRandomNumber(0,maxRandNum);;
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, String(answer)];
};

const initGamePrime = () => {
    playGame(rule, getQuestionAndAnswer);
  };
  
  export default initGamePrime;