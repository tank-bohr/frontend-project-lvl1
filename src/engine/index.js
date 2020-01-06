import readlineSync from 'readline-sync';

const helloMessage = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  console.log('');
};

const gameLoop = (generateQuestion, name, times) => {
  if (times === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const question = generateQuestion();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const correct = question.answer();

  if (answer !== correct) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}').`);
    console.log(`Let's try again, ${name}!`);
    return;
  }

  console.log('Correct!');
  gameLoop(generateQuestion, name, times - 1);
};

export default (game) => {
  helloMessage(game.hello);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  gameLoop(game.generateQuestion, name, 3);
};
