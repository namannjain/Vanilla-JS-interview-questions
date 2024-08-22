//composition polyfill
function addFive(a) {
  return a + 5;
}

function subtractThree(a) {
  return a - 3;
}

function multipleTwo(a) {
  return a*2;
}

const compose = (...fns) => {
  return (args) => {
    return fns.reduceRight((arg, fn) => fn(arg), args);
  };
}

//compose evaluates from right to left.
//However, there's another function - pipe (it evaluates from left to right)
const evaluate = compose(addFive, subtractThree, multipleTwo);
console.log(evaluate(5));