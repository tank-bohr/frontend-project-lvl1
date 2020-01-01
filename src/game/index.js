import { ask, askName, sayHello } from '..';

const helloMessage = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  console.log('');
};

const gameLoop = (questions, name) => {
  if (questions.length === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  const [question, ...rest] = questions;
  console.log(`Question: ${question}`);
  const answer = ask('Your answer:');
  const correct = question.answer();

  if (answer !== correct) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}').`);
    console.log(`Let's try again, ${name}!`);
    return;
  }

  console.log('Correct!');
  gameLoop(rest, name);
};

export default (game) => {
  helloMessage(game.hello);

  const name = askName();
  sayHello(name);

  gameLoop(game.questions, name);
};
