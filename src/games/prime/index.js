import {
  random,
  times,
} from 'lodash';

const NUMBERS = times(3, () => random(1, 20));
const HELLO_MSG = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const NOT_FOUND = 'NOT FOUND';
const isDivisor = (a, b) => a % b === 0;
const findDivisorOf = (number, current, limit) => {
  if (current > limit) { return NOT_FOUND; }
  if (isDivisor(number, current)) { return current; }

  return findDivisorOf(number, current + 1, limit);
};
const isPrime = (num) => findDivisorOf(num, 2, Math.sqrt(num)) === NOT_FOUND;

function make(number) {
  return {
    toString: () => String(number),
    answer: () => {
      if (isPrime(number)) {
        return 'yes';
      }
      return 'no';
    },
  };
}

export default {
  hello: HELLO_MSG,
  questions: NUMBERS.map(make),
};
