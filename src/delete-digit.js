const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let a = n.toString()
  let b = []
  for (let i = 0; i<a.length; i++){
    b.push(+(a.slice(0, i) + a.substring(i + 1)))
  }
  return Math.max.apply(null, b)
}

module.exports = {
  deleteDigit
};
