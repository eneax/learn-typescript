/* eslint-disable @typescript-eslint/no-unused-vars */
// Without changing the input or return types of the functions, fix all of the TypeScript errors with type narrowing
// If the input is an invalid type, feel free to throw an error in your function.
function doubleIfNumber(input: unknown) {
  return input * 2;
}

function combineValues(input1: unknown, input2: unknown): string | number {
  return input1 + input2;
}

function appendToArray(list: unknown, input: unknown): string[] {
  return list.concat(input);
}

function sumArray(list: unknown) {
  return list.reduce((accumulator: number, item: number) => {
    return accumulator + item;
  }, 0);
}

// The type of "sum" should not be "any"
const sum = sumArray([1, 2, 3]);

interface Fruit {
  name: string;
  color?: string;
  eat?: () => void;
}
function shoutFruitName(fruit: object | Fruit) {
  console.log(fruit.name.toUpperCase());
}

function shoutFruitColor(fruit: Fruit) {
  console.log(fruit.color.toUpperCase());
}

function eatFruit(fruit: Fruit) {
  fruit.eat();
}
