const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let arr1 = [];
  let result = [];
  arr.forEach(el => {
    if(el !== -1){
      arr1.push(el)
    }
  })
  arr1.sort(function(a, b) { return b - a; })
  arr.forEach(el => {
    if(el === -1){
      result.push(-1)
    } else {
      result.push(arr1.pop())
    }
  })
  return result
}

module.exports = {
  sortByHeight
};
