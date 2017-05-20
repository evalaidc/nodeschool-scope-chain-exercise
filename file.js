//  Scope Chains

// ## Scoped Variable Access
//
// All nested scopes follow the same rule: Each nested inner scope has access to
// outer scope variables, but NOT vice-versa.
//
// For example:
//
//     function someFunc() {
//       var outerVar = 1;
//       function inner() {
//         var innerVar = 2;
//       }
//     }
//
// inner has access to both innerVar & outerVar, but someFunc only has
// access to outerVar

// ## Multiple Nested Scopes
//
// Nesting isn't limited to a single inner scope, there can be multiple nested
// scopes, each of which adhere to the Scoped Variable Access rule above. With
// one addition: sibling scopes are also restricted from accessing each other's
// variables.

function foo() {
  var bar;
  function zip(){
    var quux;
  };
};
