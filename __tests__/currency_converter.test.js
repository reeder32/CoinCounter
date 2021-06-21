import Converter from "../src/classes/currency_converter";

describe("Converter", () => {
  let converter;
  beforeEach(() => {
    converter = new Converter();
  });

  test("should return not a number if passed a string", () => {
    expect(converter.getExactCoins("hello")).toBe("Not a number");
  });

  test("should return string number of quarters", () => {
    expect(converter.getExactCoins(1)).toEqual("4");
  });
});
