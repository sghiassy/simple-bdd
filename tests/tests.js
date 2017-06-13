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
    try {
      new Number(2).should_equal(3)
    } catch(e) {
      e.should_equalish(true); // and an error is good here
    }

    try {
      "three".should_equal(4);
    } catch (e) {
      e.should_equalish(true); // and an error is good here
    }

    try {
      true.should_equal(false);
    } catch (e) {
      e.should_equalish(true); // want an error here
    }
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
