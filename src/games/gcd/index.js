import { cons, car, cdr } from '@hexlet/pairs';
import { times, random } from 'lodash';

const min = (pair) => {
  const a = car(pair);
  const b = cdr(pair);

  return a < b ? a : b;
};

const toString = (pair) => `${car(pair)} ${cdr(pair)}`;

const isDiv = (a, b) => a % b === 0;

const gcd = (a, b, c) => {
  if (isDiv(a, c) && isDiv(b, c)) { return c; }
  return gcd(a, b, c - 1);
};

const answer = (pair) => gcd(car(pair), cdr(pair), min(pair));

function makeQ(pair) {
  return {
    answer: () => String(answer(pair)),
    toString: () => toString(pair),
  };
}

const EXPRS = times(3, () => cons(random(50), random(50)));

export default {
  hello: 'Find the greatest common divisor of given numbers.',
  questions: EXPRS.map(makeQ),
};
