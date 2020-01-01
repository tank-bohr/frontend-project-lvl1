import { cons, car, cdr } from '@hexlet/pairs';
import { random as rand } from 'lodash';

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

function makeQ(pair) {
  return {
    pair,
    toString: () => toString(pair),
  };
}

const EXPRS = [
  cons(rand(50), rand(50)),
  cons(rand(50), rand(50)),
  cons(rand(50), rand(50)),
];

export default {
  hello: 'Find the greatest common divisor of given numbers.',
  questions: EXPRS.map(makeQ),
  rightAnswer: (q) => String(gcd(car(q.pair), cdr(q.pair), min(q.pair))),
};
