/* eslint-disable @typescript-eslint/no-unused-vars */
interface Fruit {
  name: string;
  sweetness: number;
  color: unknown;
}

// Add the necessary return types and implementation for these
// user-defined type guards
function isString(maybeString: unknown) {}
function isFruit(maybeFruit: unknown) {}
function assertIsFruit(maybeFruit: unknown) {}

// Don't change anything in this function
function checkFruit(fruit: unknown) {
  if (isFruit(fruit)) {
    if (isString(fruit.color)) {
      console.log(fruit.color.toUpperCase());
    }
  }
  assertIsFruit(fruit);

  console.log(`This fruit is ${fruit.name}`);
}
