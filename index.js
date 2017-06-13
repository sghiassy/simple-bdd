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
    return true;
  } else {
    throw ({
      expected:this,
      operator:"to equal",
      actual:value
    });
  }
};
