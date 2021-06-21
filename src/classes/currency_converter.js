export default class Converter {
  constructor() {}
  // functional functions
  getExactCoins = (num) => {
    var returnString = "Not a number";
    if (isNaN(num)) {
      return returnString;
    }

    if (num <= 0) {
      return "";
    } else if (num >= 0.25) {
      return this.getExactCoins(num - this.getCoinValue(num, 0.25));
    } else if (num >= 0.1) {
      return this.getExactCoins(num - this.getCoinValue(num, 0.1));
    } else if (num >= 0.05) {
      return this.getExactCoins(num - this.getCoinValue(num, 0.05));
    } else if (num >= 0.01) {
      return this.getExactCoins(num - this.getCoinValue(num, 0.01));
    }
  };
  getCoinValue(num, denominator) {
    const dividedBy = parseInt(num / denominator);
    const value = dividedBy * denominator;
    console.log(Math.round(value));
    return Math.round(value);
  }
}
