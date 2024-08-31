// executor - (res, rej) => {}

//Promise((resolbe, reject) => resolve(1000)).then(() => {})
//Promise((resolbe, reject) => setTimeout(resolve(1000))).then(() => {})

function PromisePolyFill(executor) {
  let state, val;
  let thenCb, catchCb;

  function resolve(val) {
    thenCb();
    return this;
  }

  function reject() {
    catchCb();
    return this;
  }

  try {
    executor(resolve, reject);
  } catch {
    
  }
}

new Promise((res, rej) => {
  resolve(1)}).then(() => {}).catch(() => {}).finally()