const maxNumR = 100;
const minNumR = 0;

const getRand = (minNum = minNumR, maxNum = maxNumR) => Math.trunc(Math.random() * maxNum) + minNum;
export default getRand;
