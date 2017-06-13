var fs = require('fs');
var UglifyJS = require("uglify-js");
var ejs = require('ejs');

const INDEX_FILE = 'index.js';
const MIN_TEMPLATE_FILE = './dist/index.min.ejs';
const OUTPUT_FILE = 'dist/index.min.js';

const code = fs.readFileSync(INDEX_FILE, 'UTF-8');
const template = fs.readFileSync(MIN_TEMPLATE_FILE, 'UTF-8');

const minifiedCode = UglifyJS.minify(code);

if (minifiedCode.error) {
  console.error('An error occured during the build process: RJGSTYXH');
  console.error(minifiedCode.error);
} else {
  const renderedOutput = ejs.render(template, {'code':minifiedCode.code});
  fs.writeFileSync(OUTPUT_FILE, renderedOutput, 'UTF-8')
}
