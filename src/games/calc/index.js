import { cons, car, cdr } from '@hexlet/pairs';
import {
  random,
  sample,
  times,
} from 'lodash';

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

function makeQ(e) {
  return {
    answer: () => evaluate(e),
    toString: () => toString(e),
  };
}

const EXPRS = times(3, () => makeExpr(sample(OPERATIONS), random(1, 100), random(1, 100)));

export default {
  hello: 'What is the result of the expression?',
  questions: EXPRS.map(makeQ),
};
