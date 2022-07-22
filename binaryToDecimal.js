//ITERATIVE METHOD
const binaryToDecimal1 = (binary) => {
  //loop through the binary array
  let decimal = 0;
  const binaryArray = binary.toString().split("");
  for (let i = 0; i < binaryArray.length; i++) {
    // multiply eacch item by 2 raised to the power of (binary arrLength-index-1)
    decimal += binaryArray[i] * Math.pow(2, binaryArray.length - i - 1);
  }

  //return the sum of the previous step
  return decimal;
};
//RECURSIVE METHOD
const binaryToDecimalConverter = (binary = "", index) => {
  if (index === 0) return binary[0] * Math.pow(2, index);

  return (
    binary[0] * Math.pow(2, binary.length - 1) +
    binaryToDecimalConverter(bin, bin.length - 1)
  );
};

const binaryToDecimal = (binary) => {
  return binaryToDecimalConverter(binary.toString());
};
console.log(binaryToDecimal(10001));
