const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(m) {
  let result = m.slice(0);
  console.log('result2', result)
  let u =[]
  let c = result.map(el => {
    console.log('el1', el)
    let t = []
    el.map(el2 => {
      t.push(0)
      el2 = 0
      console.log(el2)
    })
    u.push(t)
  })
/*   result.forEach(el1 => {
    el1.forEach(el2 => {
      el2 = 0})
  }); */
  console.log('result', u)
  for (let i = 0; i < m.length; i++){
    for (let j = 0; j < m[i].length; j++){
      if (m[i][j] === true){
        u[i][j] = 1
        if(i > 0 && j > 0 && m[i-1][j-1] === false){
          u[i-1][j-1] += 1;
        }
        if(i>0 && m[i-1][j] === false){
          u[i-1][j] += 1;
        }
        if(i>0 && m[i-1][j+1] === false){
          u[i-1][j+1] += 1;
        }
        if(j>0 && m[i][j-1] === false){
          u[i][j-1] += 1;
        }
        if(m[i][j+1] === false){
          u[i][j+1] += 1;
        }
        if(j>0 &&m[i+1][j-1] === false){
          u[i+1][j-1] += 1;
        }
        if(m[i+1][j] === false){
          u[i+1][j] += 1;
        }
        if(m[i+1][j+1] === false){
          u[i+1][j+1] += 1;
        }
      }

    }
  }
  return u
}

module.exports = {
  minesweeper
};
