//flattening the objects
let input = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
  e: {
    f: {
      g: 4,
      h: null,
      i: undefined
    }
  }
}

/*
  output should be 
  {
    a: 1,
    c: 2,
    d: 3,
    g: 4,
    h: null,
    i: undefined
  }
*/

function flattenObj(input) {
  if (typeof input !== 'object' || input === null)
    return input;

  let flattened = {};

  for (const key in input) {
    const val = input[key];
    const flatVal = flattenObj(val);

    if (typeof flatVal === 'object' && flatVal !== null) {
      flattened = { ...flattened, ...flatVal };
    } else {
      flattened[key] = flatVal;
    }
  }

  return flattened;
}

console.log(flattenObj(input));