const balancedBraces = (str) => {
  //if (str.length <= 1) return false;
  const bracesObj = { "[": "]", "{": "}", "(": ")" }; // { key:value}

  //run a loop to check if an item is in the stack
  const stack = [];
  for (const s of str) {
    //check if item is one of the opening brackets;
    if (s in bracesObj) {
      stack.push(s);
    } else if (s !== bracesObj[stack.pop()]) {
      //check if item is NOT a closing of the last pushed item

      return false;
    }
  }

  return stack.length === 0 ? true : false;
};

console.log(balancedBraces("[({})]"));
console.log(balancedBraces("[{(]})"));
console.log(balancedBraces("({[]})"));
console.log(balancedBraces("(("));
console.log(balancedBraces("("));
console.log(balancedBraces("(["));
