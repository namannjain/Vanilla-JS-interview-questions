//map
// map(current val(required), index, arr=array of current element, thisValue=undefined)
Array.prototype.myMap = function (callback) {
  let ans = [];
  for (let i = 0; i < this.length; i++){
    ans.push(callback(this[i], i, this));
  }
  return ans;
}

Array.prototype.myFilter = function (callback) {
  let ans = [];
  for (let i = 0; i < this.length; i++){
    if (callback(this[i], i, this)) {
      ans.push(this[i]);
    }
  }
  return ans;
}

//arr.reduce((acc, curr, i, arr)=>{}, initialVal)
Array.prototype.myReduce = function (cb, initialVal) {
  //if initialVal is not passed, acc takes first element of arr as initial value and current val is assigned second ele of array
  let acc = initialVal;
  for (let i = 0; i < this.length; i++){
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
}

//call()
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + "Its not callable");
  }

  context.fn = this;
  context.fn(...args);
}

let car1 = {
  color: "red", company: "ferrari"
};
function purchaseCar(currency, price) {
  console.log(`${currency}:${price}`);
}
purchaseCar.myCall(car1, "$", 1000000);

//apply() - instead of args, an array of args is passed. Rest all same as call()
Function.prototype.myApply = function (context = {}, args=[]) {
  if (typeof this !== 'function') {
    throw new Error(this + "Its not callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  context.fn = this;
  context.fn(...args);
}

//bind()
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  context.fn = this;
  return function (...remainingArgs) {
    return context.fn(...args, ...remainingArgs);
  }
}
const newFunc = purchaseCar.myBind(car1, "$");
console.log(newFunc(10000));

//once() function - The once() function is a utility function commonly found in JavaScript libraries like Lodash and Underscore.
//It provides a way to ensure that a given function is only executed once, regardless of how many times it's called. 
function once(fn, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;  //so that it can't be called again
    }
    return ran;
  }
}
const hello = once((a,b) => console.log("Hello",a,b));
hello(1,2);
hello(1,2);
hello(1,2);
