function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
      return s.charAt(i);
    }
  }
  return "_";
}
console.log(firstNotRepeatingCharacter("ccoomppveru"));
