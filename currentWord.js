function findCurrentWord(charIndex, content) {
  const contentArray = content.split(".");
  let currentSentence = "";
  let currentWord = "";

  for (const sentence of contentArray) {
    if (sentence.startsWith(content[charIndex])) {
      //console.log(contentArray);
      currentSentence = sentence;
      const endWordIndex = currentSentence.indexOf(" ");
      currentWord = currentSentence.slice(charIndex, endWordIndex);
      //console.log(currentWord);
    }

    //let wordIndex = content.indexOf(word);
  }
}
console.log(findCurrentWord(0, "This is a text"));
