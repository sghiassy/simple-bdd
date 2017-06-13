require('./build_project.js'); // first build the min

var fs = require('fs');
var ejs = require('ejs');
var exec = require('child_process').exec,
    child;

const TESTS_TEMPLATE = __dirname + '/../tests/tests.ejs';
const MINIFIED_BUILD = __dirname + '/../dist/index.min.js';
const TMP_DIRECTORY = __dirname + '/../tmp';
const TESTS_OUTPUT = TMP_DIRECTORY + '/tests.tmp.js';

// Create tmp directory if it does not exist
if (!fs.existsSync(TMP_DIRECTORY)){
    fs.mkdirSync(TMP_DIRECTORY);
}

ejs.renderFile(TESTS_TEMPLATE, {}, function(err, result) {
  if (err) {
      return console.error(err.toString());
  }

  fs.writeFileSync(TESTS_OUTPUT, result, 'UTF-8')

  child = exec(`node ${TESTS_OUTPUT}`,
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
  });
});
