function PromisePolyfill(executor) {
  let onResolve, onReject, isFulfilled = false, isCalled = false, value;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    
  }
}