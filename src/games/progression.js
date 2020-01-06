import { cons, car, cdr } from '@hexlet/pairs';
import {
  random as rand,
  join,
  concat,
} from 'lodash';
import run from '../engine';

const COUNT = 10;
const STEP_MAX = 5;
const START_MAX = 10;

const makeProgression = (start, step, count, hidden) => cons(hidden,
  cons(count, cons(start, step)));
const getHidden = (p) => car(p);
const getCount = (p) => car(cdr(p));
const getStart = (p) => car(cdr(cdr(p)));
const getStep = (p) => cdr(cdr(cdr(p)));

const toString = (p, idx, acc) => {
  const cnt = getCount(p);
  if (cnt === 0) { return join(acc, ' '); }

  const start = getStart(p);
  const step = getStep(p);
  const hidden = getHidden(p);

  const elem = idx === hidden ? '..' : start;
  const next = makeProgression(start + step, step, cnt - 1, hidden);
  return toString(next, idx + 1, concat(acc, elem));
};

const hiddenValue = (p, idx) => {
  const start = getStart(p);
  const hidden = getHidden(p);
  if (hidden === idx) { return start; }

  const step = getStep(p);
  return hiddenValue(makeProgression(start + step, step, getCount(p), hidden), idx + 1);
};

const generateQuestion = () => {
  const progression = makeProgression(
    rand(1, START_MAX),
    rand(1, STEP_MAX),
    COUNT,
    rand(1, COUNT),
  );
  return {
    answer: () => String(hiddenValue(progression, 1)),
    toString: () => toString(progression, 1, []),
  };
};

const game = {
  hello: 'What number is missing in the progression?',
  generateQuestion,
};

export default () => run(game);
