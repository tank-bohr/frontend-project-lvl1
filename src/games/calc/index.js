import { cons, car, cdr } from '@hexlet/pairs';

const MULT = '*';
const PLUS = '+';
const MINUS = '-';

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
    expression: e,
    toString: () => toString(e),
  };
}

const EXPRS = [
  makeExpr(PLUS, 4, 10),
  makeExpr(MINUS, 25, 11),
  makeExpr(MULT, 25, 7),
];

export default {
  hello: 'What is the result of the expression?',
  questions: EXPRS.map(makeQ),
  rightAnswer: (q) => evaluate(q.expression),
};
