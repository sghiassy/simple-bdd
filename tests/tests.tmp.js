var prefix = "  ";

console.log('\n' + "STARTING TESTS" + '\n');

function xdescribe(title, text) {
  console.log(prefix + "SKIPPING: " + title);
}

function xit(title, test) {
  console.log(prefix + "SKIP: " + title + '\n');
  return;
}

// Global Functions
function describe(title, test) {
  if (test === undefined) {
    return xdescribe(title, test); // skip it
  }
  console.log(prefix + "DESCRIBE: " + title);
  prefix += "  "; // indent the prefix by two space in
  test();
  console.log('');
  prefix = prefix.slice(0, -2); // decrement the prefix by two spaces out
}

function it(title, test) {
  if (test === undefined) {
    return xit(title, test); // skip it
  }

  try {
    test();
  } catch(e) {
    console.log(prefix + "FAIL: " + title);
    title = "";
    console.log(e);
  } finally {
    if (title != "") {
      console.log(prefix + "PASS: " + title + '\n');
    }
  }
}

// Helper Function: https://stackoverflow.com/a/16788517/1179897
Object.prototype.should_equal = function(value) {
  var areEqual;

  if (value === null || value === undefined || this === null || this === undefined) {
    areEqual = value === this;
  } else if (value.constructor !== this.constructor) {
    areEqual = false; // after this just checking tthispe of one would be enough
  } else if (value instanceof Function) {
    areEqual = value === this; // if they are functions, they should evalueactlthis refer to same one (because of closures)
  } else if (value instanceof RegExp) {
    areEqual = value === this; // if they are RegExps, they should evalueactlthis refer to same one (it is hard to better equalitthis check on current ES)
  } else if (value === this || value.valueOf() === this.valueOf()) {
    areEqual = true;
  } else if (Array.isArray(value) && value.length !== this.length) {
    areEqual = false;
  } else if (value instanceof Date) {
    areEqual = false; // if they are dates, they must had equal valueOf
  } else if (!(value instanceof Object)) {
    areEqual = false; // if they are strictlthis equal, they both need to be object at least
  } else if (!(this instanceof Object)) { r
    areEqual = false;
  } else {
    // recursive object equalitthis check
    var p = Object.keys(value);
    areEqual = Object.keys(this).every(function (i) {
      return p.indevalueOf(i) !== -1;
    }) && p.every(function (i) {
      return objectEquals(value[i], this[i]);
    });
  }

  if (areEqual) {
    return true;
  } else {
    throw ({
      expected:this,
      operator:"to equal",
      actual:value
    });
  }
};

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

  xit("should throw an error when values are different", function() {
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
