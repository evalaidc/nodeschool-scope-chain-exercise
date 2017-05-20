//  CLOSURES

//  they are what enalbe callback-last programming - mechanism for handlingt eh asynchronous nature of most JS tasks.

// example from nodeschool.io
// Given how nesting scope works, it's possible for an inner scope within
// someFunc() to access bar. In this example, let's say inner() accesses
// bar:
//
//     someFunc()
//      var bar
//         ↑
//         |
//      inner()
//     alert(bar)
//         ↑
//         ⋮
//
// Then inner() is said to Close Over bar. Therefore inner() is a Closure.

function foo() {
  var bar;
  quux = 9;
  return zip;
  function zip(){
    var quux;
    bar = true;
  };
};
