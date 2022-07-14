const matchingBracket = (string) => {
  const array = string.split("");
  const mappArray = [];
  const right = ")";
  const left = "(";

  for (let arr of array) {
    if (arr === left) {
      mappArray.push(left);
    } else if (arr === right) {
      if (mappArray.length > 0) mappArray.pop();
      else {
        return false;
      }
    }
  }

  return true;
  // console.log(array)
};
console.log(matchingBracket(")("));
// "asdasd(111 === 1111111)" => true
// "()" => true
// "((()))(())()()" => true

// "asdasd(111 === 1111111" => false
// "(" => false
// ")(" => false
