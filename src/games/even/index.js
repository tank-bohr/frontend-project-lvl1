import {
  random,
  times,
} from 'lodash';

const NUMBERS = times(3, () => random(1, 100));
const HELLO_MSG = 'Answer "yes" if the number is even, otherwise answer "no".';

function make(number) {
  return {
    toString: () => String(number),
    answer: () => {
      if ((number % 2) === 0) {
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
