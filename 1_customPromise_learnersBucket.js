const states = {
  PENDING: 0,
  FULFILLED: 1,
  REJECTED: 2
}

class MyPromise{
  constructor(callback) {
    this.state = states.PENDING;
    this.value = undefined;
    this.handlers = [];

    try {
      callback(this._resolve, this._reject);
    } catch (err) {
      this._reject(err);
    }
  }

  _resolve = (value) => {
    this._handleUpdate(states.FULFILLED, value);
  }
  
  _reject = (value) => {
    this._handleUpdate(states.REJECTED, value);
  }

  _handleUpdate = (state, value) => {
    if (state === states.PENDING) {
      return;
    }

    setTimeout(() => {
      if (value instanceof MyPromise) {
        value.then(this._resolve, this._reject);
      }

      this.state = state;
      this.value = value;

      this._executeHandlers = () => {
        if (state === states.PENDING) {
          return;
        }

        this.handlers.forEach((handler) => {
          
        });

        this.handlers = [];
      }
    }, 0);
  }
}