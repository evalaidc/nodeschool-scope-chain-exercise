//  Global Scope & Shadowing

// -- note taken from nodeschool.io - scope-chains-closures module
// The javascript runtime follows these steps to assign a variable:
//
//  1) Search within the current scope.
//  2) If not found, search in the immediately outer scope.
//  3) If found, go to 6.
//  4) If not found, repeat 2. Until the Global Scope is reached.
//  5) If not found in Global Scope, create it (on window / global objects).
//  6) Assign the value.



// quux - example of a variable assumed to be in the outer scope.
// window.quux / global.quux
// thus allowing for the variable to altered - while the intention was to only allow change in the zip function.

function foo() {
  var bar;
  // global quux
  quux = 9;
  function zip(){
    // shadow quux of the globally scoped one.
    var quux = 7;
  };
};


// shadowing - can occur with nested function - variable in the inner function can be the same as outer function but have a different value.
// the inner variable would be the shadow.
