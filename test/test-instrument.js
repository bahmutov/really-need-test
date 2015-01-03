'use strict';

var istanbul = require('istanbul');
var instrumenter = new istanbul.Instrumenter();
var instrument = instrumenter.instrumentSync.bind(instrumenter);

require = require('really-need');

var foo = require('./foo', {
  bust: true,
  pre: instrument
});

console.log(foo());
console.log(foo());
console.log(foo());

// how many times did foo run?
var fooFilename = require('path').resolve('./foo.js');
console.log('function in foo.js ran', __coverage__[fooFilename].f[1], 'times');
