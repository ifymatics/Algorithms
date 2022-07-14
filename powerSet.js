function powerSet(arr) {
  // the final power set
  var powers = [];

  // the total number of sets that the power set will contain
  var total = Math.pow(2, arr.length);

  // loop through each value from 0 to 2^n
  for (var i = 0; i < total; i++) {
    // our set that we add to the power set
    var tempSet = [];

    // convert the integer to binary
    var num = i.toString(2);

    // pad the binary number so 1 becomes 001 for example
    while (num.length < arr.length) {
      num = "0" + num;
    }

    // build the set that matches the 1's in the binary number
    for (var b = 0; b < num.length; b++) {
      if (num[b] === "1") {
        tempSet.push(arr[b]);
      }
    }

    // add this set to the final power set
    powers.push(tempSet);
  }

  return powers;
}

console.log(powerSet([1, 2, 3]));
