/* eslint-disable @typescript-eslint/no-unused-vars */
// Without changing the input or return types of the functions, fix all of the TypeScript errors with type narrowing
// If the input is an invalid type, feel free to throw an error in your function.
function doubleIfNumber(input: unknown) {
  if (typeof input === "number") {
    return input * 2;
  }

  throw new Error("Not a number");
}

function combineValues(input1: unknown, input2: unknown): string | number {
  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1 + input2;
  }

  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }

  throw new Error("Could not combine values");
}

function appendToArray(list: unknown, input: unknown): string[] {
  if (Array.isArray(list)) {
    const mappedArray = list.map((item) => String(item));
    if (typeof input === "string") {
      return mappedArray.concat(input);
    }
  }

  throw new Error("Invalid input");
}

function sumArray(list: unknown) {
  if (!Array.isArray(list)) throw new Error("Invalid input");

  const sum: number = list.reduce((accumulator: number, item: number) => {
    if (typeof item !== "number") return accumulator;
    return accumulator + item;
  }, 0);

  return sum;
}

// The type of "sum" should not be "any"
const sum = sumArray([1, 2, 3]);

interface Fruit {
  name: string;
  color?: string;
  eat?: () => void;
}
function shoutFruitName(fruit: object | Fruit) {
  if ("name" in fruit) {
    console.log(fruit.name.toUpperCase());
  }
}

function shoutFruitColor(fruit: Fruit) {
  console.log(fruit.color?.toUpperCase());
}

function eatFruit(fruit: Fruit) {
  fruit.eat?.();
}
