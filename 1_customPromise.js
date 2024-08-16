const PROMISE_STATES = {
  PENDING: "Pending",
  FULFILLED: "Fulfilled",
  REJECTED: "Rejected",
}

class myPromise{
  constructor(executor) {
    this.state = PROMISE_STATES.PENDING;
    this.value = null;
    // this.error = null;
    this.fulfilledCallbacks = [];
    this.failedCallbacks = [];

    try {
      executor(
        val => this.resolve(val),
        val => this.reject(val)
      )
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(val) {
    this.val = val;
    this.state = PROMISE_STATES.FULFILLED;
    this.fulfilledCallbacks = [];
  }

  reject(error) {
    this.val = null;
    this.state = PROMISE_STATES.REJECTED;
    this.fulfilledCallbacks = [];
  }
}