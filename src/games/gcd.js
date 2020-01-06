import { cons, car, cdr } from '@hexlet/pairs';
import { random } from 'lodash';
import run from '../engine';

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

const generateQuestion = () => {
  const pair = cons(random(50), random(50));
  return {
    answer: () => String(answer(pair)),
    toString: () => toString(pair),
  };
};

const game = {
  hello: 'Find the greatest common divisor of given numbers.',
  generateQuestion,
};

export default () => run(game);
