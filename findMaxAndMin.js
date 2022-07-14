const calculateMinAndMax = async (games) => {
  let maxObj = Math.max(games[0].dayRange, games[1].dayRange);
  let minObj = Math.min(games[0].dayRange, games[1].dayRange);
  console.log(minObj, maxObj);

  for (let i = 2; i < games.length; i++) {
    const dateTimestamp = games[i].dayRange;
    //Date.parse(`${game.scheduledDateObj.year}-${game.scheduledDateObj.month}-${game.scheduledDateObj.day}T${game.scheduledTime}`)

    if (maxObj > dateTimestamp) {
      if (minObj > dateTimestamp) {
        minObj = dateTimestamp;
      }
    } else {
      maxObj = dateTimestamp;
    }
  }
  return { minObj, maxObj };
};
const games = [
  { dayRange: -10 },
  { dayRange: 12 },
  { dayRange: 30 },
  { dayRange: 1.2 },
  { dayRange: 1 },
  { dayRange: 120 },
  { dayRange: 15 },

  { dayRange: 100 },
  { dayRange: 18 },
  { dayRange: -2 },
  { dayRange: 17 },
  { dayRange: 0.2 },
];
console.log(calculateMinAndMax(games));
