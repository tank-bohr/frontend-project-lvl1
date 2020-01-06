import { random } from 'lodash';
import run from '../engine';

const generateQuestion = () => {
  const number = random(1, 100);
  return {
    answer: () => {
      if ((number % 2) === 0) {
        return 'yes';
      }
      return 'no';
    },
    toString: () => String(number),
  };
};

const game = {
  hello: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateQuestion,
};

export default () => run(game);
