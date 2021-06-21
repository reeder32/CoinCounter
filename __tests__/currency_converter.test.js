import Converter from "../src/classes/currency_converter";

describe("Converter", () => {
  let converter;
  beforeEach(() => {
    converter = new Converter();
  });

  test("should return not a number if passed a string", () => {
    expect(converter.getExactCoins("hello", "Not a number"));
  });
});
