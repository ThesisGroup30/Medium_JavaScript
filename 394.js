/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  let curStr = '';
  let curNum = 0;
  
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (c === '[') {
      stack.push(curStr);
      stack.push(curNum);
      curStr = '';
      curNum = 0;
    } else if (c === ']') {
      const num = stack.pop();
      const prevStr = stack.pop();
      curStr = prevStr + curStr.repeat(num);
    } else if (/\d/.test(c)) {
      curNum = curNum * 10 + Number(c);
    } else {
      curStr += c;
    }
  }
  
  return curStr;
};
