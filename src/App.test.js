import { hello, add, onlyFourCharWords, truncate } from "./App";

describe("hello function ", () => {
  it("should output hello as a string", () => {
    expect(hello()).toBe("Hello");
  });
  it("should not just be some random greeting", () => {
    expect(hello()).not.toBe("Bye");
  });
});

describe("add function", () => {
  it("should add numbers", () => {
    expect(add(4, 5)).toBe(9);
    expect(add(1, 2)).toBe(3);
    expect(add(1, 1)).toBe(2);
  });
  it("should not concatenate strings", () => {
    expect(add("foo", "bar")).toBe(null);
  });
  it("should not add objects", () => {
    expect(add(2, {})).toBe(null);
  });
  it("should not add arrays", () => {
    expect(add(2, [])).toBe(null);
  });
});

describe("onlyFourCharWords ", () => {
  const randomWords = ["booger", "cheese", "monkeys", "ham", "eggs"];
  it("should only save four character words", () => {
    expect(onlyFourCharWords(randomWords)).toContain("ham");
    expect(onlyFourCharWords(randomWords)).toContain("eggs");
  });

  it("should not contain any words with more than four characters", () => {
    expect(onlyFourCharWords(randomWords)).not.toContain("booger");
    expect(onlyFourCharWords(randomWords)).not.toContain("cheese");
    expect(onlyFourCharWords(randomWords)).not.toContain("monkeys");
  });
});

describe("truncate ", () => {
  //deliberately
  it("should truncate booger to 3 characters", () => {
    expect(truncate("booger", 3)).toBe("boo");
  });
  it("should truncate cheese to 4 characters", () => {
    expect(truncate("cheese", 4)).toBe("chee");
  });
});
