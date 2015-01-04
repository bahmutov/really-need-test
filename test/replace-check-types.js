require = require('really-need');

var check = require('check-types', {
  debug: false,
  post: function () {
    return require('check-more-types');
  }
});

console.log('loaded check-types, but got check-more-types');
console.log('check.bit(1) =', check.bit(1));
console.assert(typeof check.mixin === 'function', 'has mixin method');


