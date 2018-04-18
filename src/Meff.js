"use strict";

exports.pow = function(x) {
  return function(y) {
    return Math.pow(x,y);
  };
};