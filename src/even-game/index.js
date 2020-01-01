import { ask, askName, sayHello } from '..';

const NUMBERS = [15, 6, 7];

const helloMessage = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(' ');
};

const isEven = (number) => {
  if ((number % 2) === 0) {
    return 'yes';
  }
  return 'no';
};

const gameLoop = (numbers, name) => {
  if (numbers.length === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  const [number, ...rest] = numbers;
  const answer = ask(`Question: ${number}\nYour answer:`);
  const correct = isEven(number);

  if (answer !== correct) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}').`);
    console.log(`Let's try again, ${name}!`);
    return;
  }

  console.log('Correct!');
  gameLoop(rest, name);
};

const run = () => {
  helloMessage();

  const name = askName();
  sayHello(name);

  gameLoop(NUMBERS, name);
};

export default run;
