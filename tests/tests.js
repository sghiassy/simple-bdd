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

  it("should be able to compare a deep copy of objects", function() {

    [1, 2, 3, 4, 5].should_equal([1, 2, 3, 4, 5]);
    [1, 2, 3, 4, [1, 2, 3, 4, 5]].should_equal([1, 2, 3, 4, [1, 2, 3, 4, 5]]);
    const dictionary = {'A':1, 'B':2, 'C':3, 'D':4};
    dictionary.should_equal({'A':1, 'B':2, 'C':3, 'D':4});

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

  it("should be able to process incomplete tests that dont have a callback");

  describe("Nested describe functions", function() {

    describe("Nested describe functions", function() {

      it("should work inside a nested describe function", function() {
        var two = 2;
        two.should_equal(new Number(2));
      });

    });

  });
});

describe("Multiple root functions", function() {
  it('should handle multiple root functions', function() {
    true.should_equal(true);
  });
});
