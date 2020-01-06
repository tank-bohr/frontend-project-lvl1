import { cons, car, cdr } from '@hexlet/pairs';
import {
  random,
  sample,
} from 'lodash';
import run from '../engine';

const MULT = '*';
const PLUS = '+';
const MINUS = '-';
const OPERATIONS = [MULT, PLUS, MINUS];

const makeExpr = (op, left, right) => cons(op, cons(left, right));
const op = (e) => car(e);
const left = (e) => car(cdr(e));
const right = (e) => cdr(cdr(e));
const toString = (e) => `${left(e)} ${op(e)} ${right(e)}`;
const evaluate = (e) => {
  const operation = op(e);
  const x = left(e);
  const y = right(e);

  if (operation === MULT) { return String(x * y); }
  if (operation === PLUS) { return String(x + y); }
  if (operation === MINUS) { return String(x - y); }

  return null;
};

const generateQuestion = () => {
  const expr = makeExpr(sample(OPERATIONS), random(1, 100), random(1, 100));
  return {
    answer: () => evaluate(expr),
    toString: () => toString(expr),
  };
};

const game = {
  hello: 'What is the result of the expression?',
  generateQuestion,
};

export default () => run(game);
