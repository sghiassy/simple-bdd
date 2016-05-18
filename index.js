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

function xdescribe(title, text) {
  console.log(prefix + "SKIPPING: " + title);
}

function it(title, test) {
  if (!test) {
    xit(title, test); // skip it
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

function xit(title, test) {
  console.log(prefix + "SKIP: " + title + '\n');
  return;
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
