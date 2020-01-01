import readlineSync from 'readline-sync';

export const ask = (message) => readlineSync.question(`${message} `);
export const askName = () => ask('May I have your name?');
export const sayHello = (name) => console.log(`Hello, ${name}!`);

export default () => {
  const name = askName();
  sayHello(name);
};
