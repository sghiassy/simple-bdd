var should = require('should');
require('./index.js');

var arr = [];

describe("Array", function() {
  it("should be able to push a value", function() {
    arr.push(5);
    arr.pop().should.equal(4);
  });

  it("should remove the value after the pop", function() {
    (arr.pop() === undefined).should.equal.true;
  });

  it("should work");

  describe("A Nested Describe function", function() {

    it("should work inside a nested describe function", function() {
      var two = 2;
      two.should.equal(2);
    });

  });
});

describe("Outside function", function() {
  it("should reset the prefix");
});
