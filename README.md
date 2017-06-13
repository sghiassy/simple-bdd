# Simple BDD

Simple BDD is a very simple BDD style test runner. It features only the bare essentials necessities for running BDD style tests.

Simple BDD is not designed to be run in production environments. Instead Simple BDD is primarily designed to be used for online
programming interviews, where the online editor has only limited JS support and doesn't provide any built in test library.

### Install

You can simply copy-and-paste `index.min.js` at the top of any code editor and then write your tests below. Simple!


### Usage

It'd be great if online code editors used for interviewing had built in support for BDD/TDD style testing. Until then, there's Simple-BDD.

This intentionally small framework allows you to paste a couple lines of code into a text editor and get BDD style testing support for JavaScript.

### Example

```js

// https://github.com/sghiassy/simple-bdd
function describe(o,e){console.log(prefix+"DESCRIBE: "+o),prefix+="  ",e(),console.log(""),prefix=prefix.slice(0,-2)}function xdescribe(o,e){console.log(prefix+"SKIPPING: "+o)}function it(o,e){e||xit(o,e);try{e()}catch(n){console.log(prefix+"FAIL: "+o),o="",console.log(n)}finally{""!=o&&console.log(prefix+"PASS: "+o+"\n")}}function xit(o,e){console.log(prefix+"SKIP: "+o+"\n")}var prefix="  ";console.log("\n\nSTARTING TESTS\n\n"),Object.prototype.should_equal=function(o){if(this==o)return this;throw{expected:this,operator:"to equal",actual:o}};


function returnNumber(num) {
  return num;
}

describe('returnNumber', function() {

  it('should return the number I give it', () => {

    returnNumber(4).should_equal(4);

  });

});
```

Running this code would ouput

```
STARTING TESTS


  DESCRIBE: sayHello
    PASS: should return Hello World
```

#### Failure Output

If the test fails, you will get an informative error to the console

Assuming the test

```js
it('should return the number I give it', () => {

  returnNumber(6).should_equal(4);

});
```

The output would be

```
STARTING TESTS


  DESCRIBE: returnNumber
    FAIL: should return the number I give it
{ expected: 6, operator: 'to equal', actual: 4 }
```

#### Skipping tests

Sometimes it's useful to skip some tests temporarily. To do this, simply put an `x` in front of the BDD function name.

**NOTE:** You can skip both `describe` functions and `it` functions.

```js
function returnNumber(num) {
  return num;
}

function returnNumberSquared(num) {
  return num * num;
}

xdescribe('returnNumber', function() {

  it('should return the number I give it', () => {

    returnNumber(4).should_equal(4);

  });

});

describe('returnNumberSquared', function() {

  it('should square the number I give it', () => {

    returnNumberSquared(10).should_equal(100);

  });


  // skipping this test, because I'm not yet ready to deal with error protection
  xit('should square the number I give it', () => {

    returnNumberSquared(null).should_equal(undefined);

  });

});
```

OUTPUT

```
STARTING TESTS


  SKIPPING: returnNumber
  DESCRIBE: returnNumberSquared
    PASS: should square the number I give it

    SKIP: should square the number I give it
```

#### Equality Checks

  * **should_equal**: Will perform a deep-copy of equality on primitives and objects
  * **should_equalish** Will do a simple JS double-equal `==` type check to ishness
