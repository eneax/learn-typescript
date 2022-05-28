import { Apple, Fruit } from "./solution";

// This type declaration makes the test utilities
// not throw type errors.
declare global {
  function describe(name: string, implementation: Function): void;
  function it(name: string, implementation: Function): void;
  function expect(value: any): any;
}

describe("fruit class", () => {
  it("should instantiate with just a name", () => {
    const fruit = new Fruit("Apple");

    expect(fruit.name).toEqual("Apple");
  });
  it("should include a protected sweetness value that is 50 by default", () => {
    const fruit = new Fruit("Apple");

    expect(fruit.name).toEqual("Apple");
    // Since this value is protected, TypeScript will throw an error here
    // We want to read this value in our tests, so we will expect the error
    // @ts-expect-error
    expect(fruit.sweetness).toEqual(50);
  });
  it("should instantiate with a name and sweetness value", () => {
    const fruit = new Fruit("Fruit", 80);

    expect(fruit.name).toEqual("Fruit");
    // @ts-expect-error
    expect(fruit.sweetness).toEqual(80);
  });
  it("should include a get accessor called `tasty` that returns true if sweetness is greater than 60", () => {
    const fruit = new Fruit("Fruit", 80);
    expect(fruit.tasty).toEqual(true);

    const notTasty = new Fruit("Fruit", 40);
    expect(notTasty.tasty).toEqual(false);
  });
  it("should have a private 'isEdible' boolean property that is true.", () => {
    const fruit = new Fruit("Fruit");

    // @ts-expect-error
    expect(fruit.isEdible).toBe(true);
  });
  it('should have a static method called `cook` that cooks the fruit. It takes a fruit instance and returns a string that says "Cooked {fruit.name}"', () => {
    const fruit = new Fruit("Fruit", 80);

    expect(Fruit.cook(fruit)).toEqual("Cooked Fruit");
  });
});

describe("apple class", () => {
  it("should instantiate properly, and include a variety field", () => {
    const fiji = new Apple("fiji");
    expect(fiji instanceof Fruit).toBeTruthy();
    expect(fiji.name).toEqual("Apple");
    expect(fiji.variety).toEqual("fiji");
  });
});
