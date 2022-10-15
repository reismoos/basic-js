const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(str) {
  if(str.length !== 17) return false
  let digits = [0,1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F'];
  let hasRightDigits = (dig) =>{
    for (let i = 0; i < digits.length; i++){
      if(digits[i] == dig || dig === '-'){
        return true
      }
    }
    return false
  }
  for (i = 2; i < 17; i += 3){
    if(str[i] !== '-'){
      return false
    }
  }
  for (let i = 0; i < str.length; i++){
    if(!hasRightDigits(str[i])){
      return false
    }
  }
  return true
}
module.exports = {
  isMAC48Address
};
