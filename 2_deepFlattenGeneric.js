function deepFlatten(value) {
  if (Array.isArray(value)) {
    return value.reduce((acc, val) => {
      if (Array.isArray(val) || typeof val === 'object' && val !== null) {
        return acc.concat(deepFlatten(val));
      } else {
        return acc.concat(val);
      }
    }, []);
  } else if (typeof value === 'object' && value !== null) {
    return Object.values(value).reduce((acc, val) => {
      if (Array.isArray(val) || typeof val === 'object' && val !== null) {
        return acc.concat(deepFlatten(val));
      } else {
        return acc.concat(val);
      }
    }, []);
  } else {
    return [value];
  }
}

// Examples of usage:
const array = [1, [2, 3, [4, 5]], 6, { a: 7, b: [8, 9] }];
const flattenedArray = deepFlatten(array);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const object = { a: 1, b: { c: 2, d: [3, 4] }, e: 5 };
const flattenedObject = deepFlatten(object);
console.log(flattenedObject); // Output: [1, 2, 3, 4, 5]