// To create the observer design pattern, we need to have two types of participants
// 1. Host
// ● It will maintain the list of observers.
// ● Provides options to subscribe and unsubscribe to the observers.
// ● Notifies the observer when state changes.
// 2. Observer
// Has a function that gets called/invoked every time a state changes.
// Keeping these two things in mind, we can create the Observer design pattern in JavaScript.

const Subject = function () {
  this.observers = [];

  this.subscribe = function (callback) {
    this.observers.push(callback);
  }
  
  this.unsubscribe = function (callback) {
    this.observers = this.observers.filter((observer) => observer !== callback);
  }

  //this next function might change based on this context
  //see learners bucket
  this.next = function (value) {
    this.observers.forEach((observer) => {
      observer(value);
    })
  }
}