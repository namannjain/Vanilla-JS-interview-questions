
function PromisePolyFill(executor) {
  let onResolve,
      onReject,
      fulfilled = false,
      rejected = false,
      called = false,
      value;

  function resolve(v) {
    fulfilled = true;
    value = v;

    //let executor = (resolve, reject) => setTimeout(() => resolve(1000), 1000)
    if (typeof onResolve === "function") { // for async
      console.log("inside resolve")
      onResolve(value);
      called = true;
    }
  }

  function reject(reason) {
    rejected = true;
    value = reason;

    if (typeof onReject === "function") {
      onReject(value);
      called = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    //new PromisePolyFill((resolve) => resolve(1000)).then(val => console.log(val))
    if (fulfilled && !called) { // for sync
      console.log("inside then")
      onResolve(value);
      called = true;
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (rejected && !called) {
      called = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const promise1 = new PromisePolyFill((resolve, reject) => {
  console.log(1)
  setTimeout(() => {
      resolve(2)
    }, 1000);
  console.log(3)
})

promise1.then(res => {
  console.log(res)
});
