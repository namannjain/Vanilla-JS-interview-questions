//Q - why is currying used? Why do you curry your functions?
//1) to avoid passing same variable again and again
//2) to create High Order Functions
//3)to make your function Pure and less prone to errors

//add(5)(2)(4)(6)(7).....so on

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  }
}
console.log(add(5)(2)(4)(6)());

//ques2 - calc.add(10).multiply(5).subtract(30).add(10)...so on
//print total
const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  divide(a) {
    this.total /= a;
    return this;
  }
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);