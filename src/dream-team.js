const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false
  }
  let preResult = [];
  let result = '';
  members.forEach(el =>{
    if (typeof el === 'string'){
      preResult.push(el.trim()[0].toUpperCase())
    }
  })

  function compare(a, b) {
    if (a > b) return 1; 
    if (a == b) return 0; 
    if (a < b) return -1; 
  }

  preResult.sort(compare);
  preResult.forEach(el => {
    result += el;
  })
  return result
}

module.exports = {
  createDreamTeam
};
