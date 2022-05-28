// Your job is to define two classes.
// There are a set of tests that automatically run when you make changes to the classes. Follow the instructions in the test names to create the classes so the tests pass.
// Once you are done making the tests pass, make sure there are no TypeScript errors in the classes.test.ts file.

export class Fruit {
  name: string;
  protected sweetness: number;
  private isEdible = true;

  constructor(name: string, sweetness: number = 50) {
    this.name = name;
    this.sweetness = sweetness;
  }

  get tasty() {
    return this.sweetness > 60;
  }

  static cook(fruit: Fruit) {
    return `Cooked ${fruit.name}`;
  }
}

export class Apple extends Fruit {
  constructor(public variety: string) {
    super("Apple");
  }
}
