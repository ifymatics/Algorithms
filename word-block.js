function canMakeWord(word) {
  // const blocks = [
  //   ["B", " O"],
  //   ["X", "K"],
  //   ["D", "Q"],
  //   ["C", "P"],
  //   ["N", "A"],
  //   ["G", "T"],
  //   ["R", "E"],
  //   ["T", "G"],
  //   ["Q", "D"],
  //   ["F", "S"],
  //   ["J", " W"],
  //   ["H", "U"],
  //   ["V", "I"],
  //   ["A", "N"],
  //   ["O", "B"],
  //   ["E", "R"],
  //   ["F", " S"],
  //   ["L", "Y"],
  //   ["P", "C"],
  //   ["Z", "M"],
  // ];
  const blocks = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  //("ABCCED");
  // (B O)
  // (X K)
  // (D Q)
  // (C P)
  // (N A)
  // (G T)
  // (R E)
  // (T G)
  // (Q D)
  // (F S)
  // (J W)
  // (H U)
  // (V I)
  // (A N)
  // (O B)
  // (E R)
  // (F S)
  // (L Y)
  // (P C)
  // (Z M)
  let foundWord = "";
  const letters = word.toUpperCase().split("");
  for (const letter of letters) {
    for (const [index, block] of blocks.entries()) {
      if (block.includes(letter)) {
        foundWord += letter;
        blocks.splice(index, 1);
        break;
      }
    }
  }
  //console.log(foundWord);
  return foundWord === word.toUpperCase();
}
console.log(canMakeWord("ABCCED"));
