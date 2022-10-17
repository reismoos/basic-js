const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(velue) {
    this.result.push(`~~( ${velue} )`);
    return this
  },
  removeLink(pos) {
    if((pos < 1) || pos > this.result.length || !Number.isInteger(pos)){
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.result.splice(pos - 1, 1)
    return this
  },
  reverseChain() {
    this.result.reverse();
    return this
  },
  finishChain() {
    let str = this.result.join('');
    let resultStr = str.slice(2, str.length)
    this.result = [];
    return resultStr
  }
};

module.exports = {
  chainMaker
};
