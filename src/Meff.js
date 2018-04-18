"use strict";

const R = require('ramda')

exports.pow = function(x) {
  return function(y) {
    return R.multiply(x,y);
  };
};