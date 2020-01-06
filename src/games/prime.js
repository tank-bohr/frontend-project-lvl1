import { random } from 'lodash';
import run from '../engine';

const NOT_FOUND = 'NOT FOUND';
const isDivisor = (a, b) => a % b === 0;
const findDivisorOf = (number, current, limit) => {
  if (current > limit) { return NOT_FOUND; }
  if (isDivisor(number, current)) { return current; }

  return findDivisorOf(number, current + 1, limit);
};
const isPrime = (num) => findDivisorOf(num, 2, Math.sqrt(num)) === NOT_FOUND;

const generateQuestion = () => {
  const number = random(1, 20);
  return {
    answer: () => {
      if (isPrime(number)) {
        return 'yes';
      }
      return 'no';
    },
    toString: () => String(number),
  };
};

const game = {
  hello: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateQuestion,
};

export default () => run(game);
