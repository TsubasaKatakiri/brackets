module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !== 0) return false;
  const stack = [];
  const openers = bracketsConfig.map(item => item[0]);
  for(let i = 0; i < str.length; i++){
    if(openers.includes(str[i])) {
      const checkElement = bracketsConfig.find(item => item[0] === str[i]);
      if(checkElement[0] === checkElement[1] && stack[stack.length - 1] === str[i]) stack.pop();
      else stack.push(str[i]);
    }
    else if (stack.length === 0 && !openers.includes(str[i])) return false;
    else {
      const checkElement = bracketsConfig.find(item => item[0] === stack[stack.length - 1])[1];
      if(str[i] === checkElement) stack.pop();
      else return false;
    }
  }
  if(stack.length > 0) return false;
  return true;
}
