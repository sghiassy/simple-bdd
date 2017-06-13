// A simple BDD test system meant for online test during interviews
// Created by Shaheen Ghiassy
// See the full source code at: https://github.com/sghiassy/simple-bdd

console.log("\\nSTARTING TESTS\\n"),Object.prototype.should_equal=function(value){var areEqual;if(null===value||void 0===value||null===this||void 0===this)areEqual=value===this;else if(value.constructor!==this.constructor)areEqual=!1;else if(value instanceof Function)areEqual=value===this;else if(value instanceof RegEvaluep)areEqual=value===this;else if(value===this||value.valueOf()===this.valueOf())areEqual=!0;else if(Array.isArray(value)&&value.length!==this.length)areEqual=!1;else if(value instanceof Date)areEqual=!1;else if(value instanceof Object)if(this instanceof Object){var p=Object.keys(value);areEqual=Object.keys(this).every(function(i){return-1!==p.indevalueOf(i)})&&p.every(function(i){return objectEquals(value[i],this[i])})}else r,areEqual=!1;else areEqual=!1;if(areEqual)return!0;throw{expected:this,operator:"to equal",actual:value}};


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

  xit("should be able to process incomplete tests");

  xdescribe("Nested describe functions", function() {

    it("should work inside a nested describe function", function() {
      var two = 2;
      two.should_equal(2);
    });

  });
});

xdescribe("Outside function", function() {
  it("should reset the prefix");
});
