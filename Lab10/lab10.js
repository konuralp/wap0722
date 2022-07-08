Array.prototype.odd = function(){
    return this.filter(e => !isNaN(e) && e % 2 === 1);
};
Array.prototype.even = function(){
    return this.filter(e => !isNaN(e) && e % 2 === 0);
};

console.log([1, 2, 3, 4, 5, 6, 7, 8].odd());
console.log([1, 2, 3, 4, 5, 6, 7, 8].even());

//      Question 2
//  1.We can use setImmediate instead of setTimeout, if we want it to trigger after IO events in the event loop,
//  or else if we want it to trigger before IO, we can use setTimeout. But that does not mean setTimeout will always
//  in all cases will trigger before setImmediate.
//
//  2.process.nextTick will trigger after current operation completes and before the event loop, setImmediate triggers
//  after IO in the event loop. If we create recursive loop that creates nextTick callbacks,
//  it will block I/O and event loop.
//
//  3.Node.js does not have a window object, instead it has global object which has some of the same methods and different ones
//  implemented such as setTimeout. Node was also designed differently by everything being local by default, but we can set something,
//  globally by using global object (although it is not recommended)