require('./index.js');

var arr = [];

describe("Simple-BDD", function() {
  it("should be able to correctly compare values", function() {
    new Number(2).should_equal(2);
    "three".should_equal("three");
    true.should_equal(true);
    false.should_equal(false);

    var und;
    (und === undefined).should_equal(true); // Undefined has to be tested differently

    var obj = {};
    obj.should_equal(obj);

  });

  it("should throw an error when values are different", function() {
    new Number(2).should_equal(3);
    "three".should_equal(4);
    true.should_equal(false);
  });

  it("should be able to process incomplete tests");

  describe("Nested describe functions", function() {

    it("should work inside a nested describe function", function() {
      var two = 2;
      two.should_equal(2);
    });

  });
});

describe("Outside function", function() {
  it("should reset the prefix");
});
