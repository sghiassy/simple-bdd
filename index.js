var SBDD = { // items to namespace
  // Constants
  DEFAULT_PREFIX: "",
  PREFIX_INCREMENT: "  ",

  // Counters
  stack_count: 0, // keep track of the describe queue. Print final stats, when we get back down to 0
  tests_passed: 0, // keep track of the number of tests passed
  tests_skipped: 0, // keep track of the number of tests skipped
  tests_failed: 0, // keep track of the number of failed

  // Prefix Logic
  prefix: "", // initial prefix has to be manually hardcoded :(
  resetPrefix: function() {
    SBDD.prefix = SBDD.DEFAULT_PREFIX;
  },
  incrementPrefix: function() {
    SBDD.prefix += SBDD.PREFIX_INCREMENT;
  }
}

console.log('\n' + "STARTING TESTS" + '\n');

function xdescribe(title, text) {
  SBDD.tests_skipped += 1;
  console.log(SBDD.prefix + "SKIPPING: " + title);
}

function xit(title, test) {
  SBDD.tests_skipped += 1;
  console.log(SBDD.prefix + "SKIP: " + title + '\n');
}

// Global Functions
function describe(title, test) {
  if (test === undefined) {
    return xdescribe(title, test); // skip it
  }
  SBDD.stack_count += 1;
  console.log(SBDD.prefix + "DESCRIBE: " + title + '\n');
  SBDD.incrementPrefix();
  test();
  // console.log('');
  SBDD.prefix = SBDD.prefix.slice(0, -2); // decrement the SBDD.prefix by two spaces out
  SBDD.stack_count -= 1;

  if (SBDD.stack_count === 0) {
    console.log('Tests Passed: ' + SBDD.tests_passed);
    console.log('Tests Skipped: ' + SBDD.tests_skipped);
    console.log('Tests Failed: ' + SBDD.tests_failed);
    console.log('\n\n');
    SBDD.resetPrefix();
  }
}

function it(title, test) {
  if (test === undefined) {
    return xit(title, test); // skip it
  }

  try {
    test();
  } catch(e) {
    console.log(SBDD.prefix + "FAIL: " + title);
    title = "";
    console.log(e);
  } finally {
    if (title != "") {
      console.log(SBDD.prefix + "PASS: " + title + '\n');
    }
  }
}

Object.prototype.should_equalish = function(value) {
  return this == value;
}

// Helper Function: https://stackoverflow.com/a/16788517/1179897
function objectEquals(x, y) {
  'use strict';
  if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
  // after this just checking type of one would be enough
  if (x.constructor !== y.constructor) { return false; }
  // if they are functions, they should exactly refer to same one (because of closures)
  if (x instanceof Function) { return x === y; }
  // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
  if (x instanceof RegExp) { return x === y; }
  if (x === y || x.valueOf() === y.valueOf()) { return true; }
  if (Array.isArray(x) && x.length !== y.length) { return false; }

  // if they are dates, they must had equal valueOf
  if (x instanceof Date) { return false; }

  // if they are strictly equal, they both need to be object at least
  if (!(x instanceof Object)) { return false; }
  if (!(y instanceof Object)) { return false; }

  // recursive object equality check
  var p = Object.keys(x);
  return Object.keys(y).every(function (i) { return p.indexOf(i) !== -1; }) &&
      p.every(function (i) { return objectEquals(x[i], y[i]); });
};

Object.prototype.should_equal = function(value) {
  var areEqual = objectEquals(this, value);

  if (areEqual) {
    SBDD.tests_passed += 1;
    return true;
  } else {
    SBDD.tests_failed += 1;
    throw ({
      expected:this,
      operator:"to equal",
      actual:value
    });
  }
};
