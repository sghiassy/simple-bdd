var fs = require('fs');
var UglifyJS = require("uglify-js");

var code = fs.readFileSync('./index.js', 'UTF-8');
var result = UglifyJS.minify(code);

if (result.error) {
  console.error('An error occured during the build process: RJGSTYXH');
  console.error(result.error);
} else {
  fs.writeFileSync('./index.min.js', result.code, 'UTF-8')
}
