var prefix = "  ";

console.log('\n\n' + "STARTING TESTS" + '\n\n');

// Global Functions
function describe(title, test) {
  console.log(prefix + "DESCRIBE: " + title);
  prefix += "  "; // indent the prefix by two space in
  test();
  console.log('');
  prefix = prefix.slice(0, -2); // decrement the prefix by two spaces out
}

function it(title, test) {
  if (!test) {
    console.log(prefix + "SKIP: " + title + '\n');
    return;
  }

  try {
    test();
  } catch(e) {
    console.log(prefix + "FAIL: " + title);
    title = "";
    console.log(prefix + '  - Expected ' + e['expected'] + ' ' + e['operator'] + ' ' + e['actual'] + '\n');
  } finally {
    if (title != "") {
      console.log(prefix + "PASS: " + title + '\n');
    }
  }
}

Object.prototype.should_equal = function(value) {
  if (this == value) {
    return this;
  } else {
    throw ({
      expected:this,
      operator:"to equal",
      actual:value
    })
  }
};
