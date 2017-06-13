require('./build.js'); // first build the min

var fs = require('fs');
var ejs = require('ejs');
var exec = require('child_process').exec,
    child;

const TESTS_TEMPLATE = 'tests/tests.ejs';
const TESTS_OUTPUT = 'tests/tests.js';
const MINIFIED_BUILD = 'dist/index.min.js';

var testTemplate = fs.readFileSync(TESTS_TEMPLATE, 'UTF-8');
var minifiedFile = fs.readFileSync(MINIFIED_BUILD, 'UTF-8');

var testFile = ejs.render(testTemplate, {'code':minifiedFile});

fs.writeFileSync(TESTS_OUTPUT, testFile, 'UTF-8');

child = exec(`node ${TESTS_OUTPUT}`,
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
