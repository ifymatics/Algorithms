const songChain = (songs) => {
  const chain = [];
  for (let i = 0; i < songs.length; i++) {
    if (
      songs[i + 1] !== undefined &&
      songs[i].split(" ")[0] === songs[i + 1].split(" ")[0]
    ) {
      chain.push(songs[i], songs[i + 1]);
    }
  }
  return chain;
};
const songs = [
  "Hi baby wale",
  "Hi bady womb",
  "Hello come  John",
  "Shinning in  sky",
  "The heaven is  bright",
  "Born in the coven",
  "Born at the gate",
];
console.log(songChain(songs));
