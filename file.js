//  GARBAGE COLLECTION

//garbage collection: decision process - determined by runtime when/if to release any allocated memroy
// memory in JS is manauged automatically by runtime.
// most JS use a variation of Mark & Sweep.


// note taken from nodeschool
// While garbage collection occurs, it blocks the
// main thread, which means other Javascript cannot be executed until the event
// completes. Be conscious of how janky your application may become due to
// extensive Garbage Collection events!

function foo() {
  var bar;
  quux = 9;
  return zip;
  function zip(){
    var quux;
    bar = true;
  };
};
