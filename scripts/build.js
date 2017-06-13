var fs = require('fs');
var UglifyJS = require("uglify-js");
var ejs = require('ejs');

const INDEX_FILE = __dirname + '/../index.js';
const MIN_TEMPLATE_FILE = __dirname + '/../dist/index.min.ejs';
const OUTPUT_FILE = __dirname + '/../dist/index.min.js';

const PREAMPLE = "\
// A simple BDD test system meant for online test during interviews\n\
// Created by Shaheen Ghiassy\n\
// See the full source code at: https://github.com/sghiassy/simple-bdd \n";

const UGLIFY_OPTIONS = {
    compress: {
        passes: 1
    },
    output: {
        beautify: false,
        preamble: PREAMPLE
    },
    mangle: false,
};

const code = fs.readFileSync(INDEX_FILE, 'UTF-8');
const minifiedCode = UglifyJS.minify(code, UGLIFY_OPTIONS);

if (minifiedCode.error) {
  console.error('An error occured during the build process: RJGSTYXH');
  console.error(minifiedCode.error);
} else {
  fs.writeFileSync(OUTPUT_FILE, minifiedCode.code, 'UTF-8');
}
