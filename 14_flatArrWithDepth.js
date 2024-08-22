//arr.flat(depth) is a js function
//flattens a nested arr to depth

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [[[[10, 11, 12]]]]
];

//not creating with Array.prototype but you can do that too. easy
function customFlat(arr, depth=1) {
  let result = [];
  arr.forEach((el) => {
    if (Array.isArray(el) && depth > 0) {
      result.push(...customFlat(arr, depth - 1));
    } else {
      result.push(el);
    }
  });

  return result;
}