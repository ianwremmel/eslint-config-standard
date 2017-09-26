'use strict';

/* eslint-disable no-unused-vars */

/**
 * Doubles each number passed to it and returns the results as an array
 * @param {Array<number>} args - array of numbers
 * @returns {Array<number>} - array of numbers
 */
function double(...args) {
  return args.map((arg) => arg * 2);
}

double(1, 2);

const a = 5;

switch (a) {
  case 1:
    break;
  case 2:
    break;
  default:
}

Promise
  .resolve();

/**
 * identity function
 * @param {number} x - the number to return
 * @returns {number} - the number passed as first argument
 */
function f(x) {
  return x;
}

const blarg = {
  a,
  b() {
    return true;
  }
};

const y = {
  b() {
    return {
      c() {
        return {
          d() {
            return true;
          }
        };
      }
    };
  }
};

y.b();
y.b()
  .c();
y.b()
  .c()
  .d();

/**
 * This is a comment that's kinda long and isn't allowed to continue past the 80
 * character mark
 */
const z = 1 && 2 && 3 && 4 && 5 && 1 && 2 && 3 && 4 && 5 && 1 && 2 && 3 && 4 && 5 && 1 && 2 && 3 && 4 && 5;

