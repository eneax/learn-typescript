/* eslint-disable @typescript-eslint/no-unused-vars */

// Change these functions into generic functions by altering the type signatures.
// There should be no `unknown` types when you are done
function randomFromList(list: unknown[]) {
  const length = list.length;
  const index = Math.floor(Math.random() * length);
  return list[index];
}
function duplicateList(list: unknown[], count: number = 1) {
  let output: unknown[] = [];
  for (let i = 0; i < count; i++) {
    output = output.concat(list);
  }
  return output;
}
function createTuple(item1: unknown, item2: unknown) {
  return [item1, item2];
}

// Use the following interface to constrain the generic in the next function
interface Length {
  length: number;
}
function getLength(item: unknown): number {
  return item.length;
}
