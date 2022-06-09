/* eslint-disable @typescript-eslint/no-unused-vars */

// Change these functions into generic functions by altering the type signatures.
// There should be no `unknown` types when you are done
function randomFromList<Item>(list: Item[]) {
  const length = list.length;
  const index = Math.floor(Math.random() * length);
  return list[index];
}

function duplicateList<Item>(list: Item[], count: number = 1) {
  let output: Item[] = [];
  for (let i = 0; i < count; i++) {
    output = output.concat(list);
  }
  return output;
}

function createTuple<T, U>(item1: T, item2: U): [T, U] {
  return [item1, item2];
}

// Use the following interface to constrain the generic in the next function
interface Length {
  length: number;
}

function getLength<Item extends Length>(item: Item): number {
  return item.length;
}
