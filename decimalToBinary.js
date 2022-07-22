const binaryConverter = (decimal, result = "") => {
  if (decimal === 0) return result;
  const binResult = (decimal % 2) + result;
  const divisionResult = Math.floor(decimal / 2);
  return binaryConverter(divisionResult, binResult);
};
const decimalToBinary = (decimal) => {
  return binaryConverter(decimal);
};

console.log(decimalToBinary(233));
console.log(decimalToBinary(4));
console.log(decimalToBinary(48));
