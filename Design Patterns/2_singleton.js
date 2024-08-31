function Counter() {
  this.count = 0;

  this.increment = () => {
    this.count += 1;
  }
  
  this.decrement = () => {
    this.count -= 1;
  }
}

let singleton = (function () {
  let instance;
  return {
    getInstance() {
      if (!instance) {
        instance = new Counter();
      }
      return instance;
    }
  }
}());

let counter1 = new Counter();
let counter2 = new Counter();
console.log("Is Singleton ? ", counter1 === counter2);  //false because different references as different instances

let counter3 = singleton.getInstance();
let counter4 = singleton.getInstance();
console.log("Is Singleton ? ", counter3 === counter4);  //true
