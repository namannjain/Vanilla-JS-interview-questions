//What is module pattern
var Module = (function () {
  function privateMethod() {
    //do something
    console.log("private");
  }

  return {
    publicMethod: function () {
      //call private method here
      console.log("public");
    },
  };
})();

Module.publicMethod();//called and works
Module.privateMethod(); //will give error (TypeError: Module.privateMethod is not a function) beacuse it is not returned from the function

//A similar question using module pattern but not exactly module pattern
//How would you use a closure to create a private counter?
function counter() {
  var _counter = 0;
  function add(n) {
    _counter += n;
  }
  function retrive() {
    return "Counter = " + _counter; 
  }

  return { add, retrive };
}
const c = counter();
c.add(); c.retrive();