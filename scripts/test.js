require('./build.js'); // first build the min

var fs = require('fs');
var ejs = require('ejs');
var exec = require('child_process').exec,
    child;

const TESTS_TEMPLATE = __dirname + '/../tests/tests.ejs';
const TESTS_OUTPUT = __dirname + '/../tests/tests.js';
const MINIFIED_BUILD = __dirname + '/../dist/index.min.js';

ejs.renderFile(TESTS_TEMPLATE, {}, function(err, result) {
  if (err) {
      return console.error(err.toString());
  }

  child = exec(`node ${TESTS_OUTPUT}`,
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
  });
});
