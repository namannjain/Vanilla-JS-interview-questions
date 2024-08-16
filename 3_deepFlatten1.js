//how to flatten a multidimensional array in js
const arr = [[1, 2, undefined], [[[[3, null, 4]]]], [5, [6], [7]]]

//output should be - [1,2,undefined,3,null,4,5,6,7]

function flattenArrayRecursively(input) {
  const flattened = [];
  if (Array.isArray(input)) {
    input.forEach(item => {
      const result = flattenArrayRecursively(item);
      flattened.push(...result);
    })
  } else {
    flattened.push(input);
  }

  return flattened;
}

function flattenArrayIteratively() {
  const flattened = []
  const stack = [...arr]
  while (stack.length) {
    const curr = stack.shift();
    if (Array.isArray(curr)) {
      stack.unshift(...curr); 
    } else {
      flattened.push(curr);
    }
  }

  return flattened;
}

console.log(flattenArrayRecursively(arr));
console.log(flattenArrayIteratively(arr));