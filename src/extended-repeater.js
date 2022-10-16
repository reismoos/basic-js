const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let result ='';
  let strFinish = '';
  const howRepeatAdd = () => {
    if(options.hasOwnProperty('additionRepeatTimes')){
      return options['additionRepeatTimes']
    } else {
      return 0
    }
  }
  const getAddition = () => {
    let result = '';
    let i = 0;
    if(options.hasOwnProperty('addition')){
      do{
        result += `${options['addition']}`;
        if (options.hasOwnProperty('additionRepeatTimes')){
          if(options.hasOwnProperty('additionSeparator')){
            result += `${options['additionSeparator']}`
          }else {
            result += '|'
          }
        } i++
      }while(i < howRepeatAdd())
    } 
    return result
  }
  let aditn = ''
  const delLastSep =()=> {
    if(aditn.endsWith('|')){
      aditn = aditn.substring(0, aditn.length-1)
       delLastSep() 
    } else if(aditn.endsWith(`${options['additionSeparator']}`)){
      aditn = aditn.substring(0, aditn.length-`${options['additionSeparator']}`.length)
      delLastSep()
    }
  }
if (getAddition()){
  aditn = getAddition()
  delLastSep()
}

if(aditn){
  strFinish = str + aditn;
}else {
  strFinish = str;
}

const howRepeatMain = () => {
  if(options['repeatTimes']){
    return options['repeatTimes']
  } else {
    return 0
  }
}

let j = 0;
  do {
    result += strFinish
    if(options['repeatTimes']){
      if(options.hasOwnProperty('separator')){
        result += `${options['separator']}`;
      }else {
        result += '+'
      }
    } j++
  } while(j < howRepeatMain())

  const delLastMain =()=> {
    if(result.endsWith('+')){
      result = result.substring(0, result.length-1)
       delLastMain() 
    } else if(result.endsWith(`${options['separator']}`)){
      result = result.substring(0, result.length - `${options['separator']}`.length)
      delLastSep()
    }
  }
   delLastMain() 
  return result
}

module.exports = {
  repeater
};
