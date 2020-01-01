const NUMBERS = [15, 6, 7];
const HELLO_MSG = 'Answer "yes" if the number is even, otherwise answer "no".';

export default {
  hello: HELLO_MSG,
  questions: NUMBERS,
  rightAnswer: (number) => {
    if ((number % 2) === 0) {
      return 'yes';
    }
    return 'no';
  },
};
