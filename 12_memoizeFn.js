//Question 3 of Cars24 - Implement Caching/Memoize function
function myMemoize(fn, context) {
  const cache = {};
  return function (...args) {
    const stringifiedArgs = JSON.stringify(args);
    if (!cache[stringifiedArgs]) {
      cache[stringifiedArgs] = fn.call(context || this, ...args);  
    } 
    return cache[stringifiedArgs];
  }
}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000000000; i++) { }
  return num1 * num2;
};

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(memoizedClumsyProduct(9467, 6789));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedClumsyProduct(1234, 6789));
console.timeEnd("Second call");
