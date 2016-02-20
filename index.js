global.prefix = "";

// Global Functions
global.describe = function(title, test) {
  console.log(prefix + title);
  prefix += "  ";
  test();
  prefix = prefix.slice(0, -2);
}

global.it = function(title, test) {
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
