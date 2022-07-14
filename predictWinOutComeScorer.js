const {
  testData2: { freeOutComeGamesResult, tokenOutComeGamesResult, predictions },
} = require("./testData");

const mapResults = (results = [], child = false) => {
  const dataObj = {};
  if (results.length > 0) {
    if (child) {
      results.map((res) => (dataObj[res.home.trim() + res.away.trim()] = res));
    } else {
      results.map((res) => (dataObj[res.id] = res));
    }
  }

  return dataObj;
};
const outComeGamesScorerr = ({
  predictions: games,
  freeOutComeGamesResult,
  tokenOutComeGamesResult,
}) => {
  const winnersObj = {};
  const scoredPredictedGame = [];
  const userFreePointValue = 10;
  const userPremiumPointValue = 1.5;
  const isDuplicate = new Set();

  const freeOutComeResultObj = mapResults({ results: freeOutComeGamesResult });
  const tokenOutComeResultObj = mapResults({
    results: tokenOutComeGamesResult,
  });

  if (games.length > 0) {
    for (let i = 0; i < games.length; i++) {
      const useIdPlusGameId = games[i]?.ID.concat(games[i].user?.userId);

      //CHECK IF A USER PLAYED A PARTICULAR GAME MORE THAN ONCE
      if (!isDuplicate.has(useIdPlusGameId)) {
        isDuplicate.add(useIdPlusGameId);

        if (games[i].free) {
          const res = freeOutComeResultObj[games[i].ID];
          if (!res || games[i].scored) {
            continue;
          } else {
            const g = games[i];
            //SCORE FREE GAMES

            g.scored = true;

            //CHECK IF A USER PREDICTED A PARTICULAR GAME CORRECTLY
            if (
              g.button.name === res.button.name &&
              g.home.trim() === res.home.trim() &&
              g.away.trim() === res.away.trim() &&
              g.button.marked === res.button.marked
            ) {
              g.result = true;
              g["has_awarded_coin"] = true;

              winnersObj[g?.user?.userId?.toString()]["prize"] =
                (winnersObj[g?.user?.userId?.toString()]["prize"] || 0) + 1;

              winnersObj[g?.user?.userId?.toString()]["point"] =
                (winnersObj[g?.user?.userId?.toString()]["point"] || 0) +
                userFreePointValue;

              // if (winnersObj[g.user.userId.toString()]) {
              //   winnersObj[g.user.userId.toString()][points] +=
              //     userFreePointValue;
              // } else {
              //     winnersObj[g.user.userId.toString()][points] =
              //       userFreePointValue;
              // }
              g["points"] = userFreePointValue;
              // scoredPredictedGame.push(g);
            }
            scoredPredictedGame.push(g);
          }
        } else {
          //SCORE PREMIUM GAMES
          const { game } = games[i];
          const res = tokenOutComeResultObj[games[i].ID];

          if (res && !games[i].scored) {
            const childRes = mapResults({
              results: res.game,
              child: "childOutCome",
            });

            for (let j = 0; j < game.length; j++) {
              const res = childRes[game[j].home.trim() + game[j].away.trim()];
              if (!res || game[j].scored) {
                continue;
              } /*(res && !game[j].scored)*/ else {
                game[j].scored = true;
                if (
                  game[j].button.name.trim() === res.button.name.trim() &&
                  game[j].button.marked === res.button.marked
                ) {
                  game[j].result = true;

                  game[j]["points"] = userPremiumPointValue;
                  if (
                    games[i].user &&
                    Object.values(games[i].user).length > 0
                  ) {
                    if (winnersObj[games[i]?.user?.userId?.toString()]) {
                      if (
                        winnersObj[games[i]?.user?.userId?.toString()]["point"]
                      ) {
                        winnersObj[games[i]?.user?.userId?.toString()][
                          "point"
                        ] + userPremiumPointValue;
                      }
                    } else {
                      winnersObj[games[i]?.user?.userId?.toString()] = {
                        point: userPremiumPointValue,
                      };
                    }
                    // console.log(winnersObj);
                    // winnersObj[games[i]?.user?.userId?.toString()]["point"] =
                    //   (winnersObj[games[i]?.user?.userId?.toString()][
                    //     "point"
                    //   ] || 0) + userPremiumPointValue;
                  }

                  games[i]["result_count"] =
                    (games[i]["result_count"] || 0) + 1;
                  // winner.push(game);
                }
                games[i]["score_count"] = (games[i]["score_count"] || 0) + 1;

                if (games[i]["score_count"] === games[i].length) {
                  games[i].scored = true;
                  //AWARD FIRST PRIZE
                  if (games[i]["result_count"] === games[i].length) {
                    //     winnersObj[games[i].user.userId.toString()][prize] =
                    //       (winnersObj[games[i].user.userId.toString()][prize] ||
                    //         0) + Number(games[i].prize);
                    if (winnersObj[games[i]?.user?.userId?.toString()]) {
                      if (
                        winnersObj[games[i]?.user?.userId?.toString()]["prize"]
                      ) {
                        winnersObj[games[i]?.user?.userId?.toString()][
                          "prize"
                        ] + Number(games[i].prize);
                      }
                    } else {
                      winnersObj[games[i]?.user?.userId?.toString()] = {
                        prize: Number(games[i].prize),
                      };
                    }
                  }

                  // //AWARD SECOND PRIZE
                  // if (games[i]["result_count"] === games[i].length - 1) {
                  //   winnersObj[games[i].user.userId.toString()][prize] =
                  //     (winnersObj[games[i].user.userId.toString()][prize] ||
                  //       0) + Number(games[i].prize2);
                  // }
                  // //AWARD FIRST PRIZE
                  // if (games[i]["result_count"] === games[i].length - 2) {
                  //   winnersObj[games[i].user.userId.toString()][prize] =
                  //     (winnersObj[games[i].user.userId.toString()][prize] ||
                  //       0) + Number(games[i].prize3);
                  // }
                }
                //break;
              }
              /////////////////////////////////////////////////////////////////////
            }
            scoredPredictedGame.push(games[i]);
          }
        }
      }
    }
  }

  //console.log(winnersObj);
  return { scoredPredictedGame, winnersObj };
};

const outComeGamesScorer = ({
  predictions: games,
  freeOutComeGamesResult,
  tokenOutComeGamesResult,
}) => {
  const winnersObj = {};
  const scoredPredictedGame = [];
  const userFreePointValue = 10;
  const userPremiumPointValue = 1.5;
  const isDuplicate = new Set();

  const freeOutComeResultObj = mapResults(freeOutComeGamesResult);
  const tokenOutComeResultObj = mapResults(tokenOutComeGamesResult);

  if (games.length > 0) {
    for (let i = 0; i < games.length; i++) {
      const useIdPlusGameId = games[i].ID.concat(games[i].user?.userId);

      //CHECK IF A USER PLAYED A PARTICULAR GAME MORE THAN ONCE
      if (!isDuplicate.has(useIdPlusGameId)) {
        isDuplicate.add(useIdPlusGameId);

        if (games[i].free) {
          const res = freeOutComeResultObj[games[i].ID];
          if (!res || games[i].scored) {
            continue;
          } else {
            console.log(!res);
            const g = games[i];
            //SCORE FREE GAMES

            g.scored = true;

            //CHECK IF A USER PREDICTED A PARTICULAR GAME CORRECTLY
            if (
              g.button.name.trim().toLowerCase() ===
                res.button.name.trim().toLowerCase() &&
              g.home.trim().toLowerCase() === res.home.trim().toLowerCase() &&
              g.away.trim().toLowerCase() === res.away.trim().toLowerCase() &&
              g.button.marked === res.button.marked
            ) {
              g.result = true;
              g["has_awarded_coin"] = true;
              if (winnersObj[g.user.userId.toString()]) {
                if (winnersObj[g.user.userId.toString()][prize]) {
                  winnersObj[g.user.userId.toString()][prize] += g.prize;
                } else {
                  winnersObj[g.user.userId.toString()][prize] = g.prize;
                }
                if (winnersObj[g.user.userId.toString()][point]) {
                  winnersObj[g.user.userId.toString()][point] +=
                    userFreePointValue;
                } else {
                  winnersObj[g.user.userId.toString()][point] =
                    userFreePointValue;
                }
                // winnersObj[g.user.userId.toString()][prize] =
                //   (winnersObj[g.user.userId.toString()][prize] || 0) + 1;
              } else {
                winnersObj[g.user.userId.toString()] = {
                  point: userFreePointValue,
                  prize: g.prize,
                };
              }

              g["points"] = userFreePointValue;
              // scoredPredictedGame.push(g);
            }
            g.result = false;
            scoredPredictedGame.push(g);
          }
        } else {
          //SCORE PREMIUM GAMES
          const { game } = games[i];
          const res = tokenOutComeResultObj[games[i].ID];
          if (res && !games[i].scored) {
            const childRes = mapResults({
              results: res.game,
              child: true,
            });

            for (let j = 0; j < game.length; j++) {
              const res = childRes[game[j].home.trim() + game[j].away.trim()];
              if (!res || game[j].scored) {
                continue;
              } /*(res && !game[j].scored)*/ else {
                game[j].scored = true;
                if (
                  game[j].button.name === res.button.name &&
                  game[j].button.marked === res.button.marked
                ) {
                  game[j].result = true;
                  game[j]["points"] = userPremiumPointValue;
                  winnersObj[g.user.userId.toString()][point] =
                    (winnersObj[g.user.userId.toString()][point] || 0) +
                    userPremiumPointValue;
                  games[i]["result_count"] =
                    (games[i]["result_count"] || 0) + 1;
                  // winner.push(game);
                }
                games[i]["score_count"] = (games[i]["score_count"] || 0) + 1;

                if (games[i]["score_count"] === games[i].length) {
                  games[i].scored = true;
                  //AWARD FIRST PRIZE
                  if (games[i]["result_count"] === games[i].length) {
                    winnersObj[games[i].user.userId.toString()][prize] =
                      (winnersObj[games[i].user.userId.toString()][prize] ||
                        0) + Number(games[i].prize);
                  }

                  // //AWARD SECOND PRIZE
                  // if (games[i]["result_count"] === games[i].length - 1) {
                  //   winnersObj[games[i].user.userId.toString()][prize] =
                  //     (winnersObj[games[i].user.userId.toString()][prize] ||
                  //       0) + Number(games[i].prize2);
                  // }
                  // //AWARD FIRST PRIZE
                  // if (games[i]["result_count"] === games[i].length - 2) {
                  //   winnersObj[games[i].user.userId.toString()][prize] =
                  //     (winnersObj[games[i].user.userId.toString()][prize] ||
                  //       0) + Number(games[i].prize3);
                  // }
                }
                //break;
              }
              /////////////////////////////////////////////////////////////////////
            }
            scoredPredictedGame.push(games[i]);
          }
        }
      }
    }
  }
  //console.log(winnersObj);
  return { scoredPredictedGame, winnersObj };
};
console.log(
  outComeGamesScorer({
    freeOutComeGamesResult,
    tokenOutComeGamesResult,
    predictions,
  })
);
// const pre = [
//   {
//     id: "0do8sL0vwFOnA6RDQong",
//     ID: "0do8sL0vwFOnA6RDQong",
//     datePredicted: 1631377220730,
//     home: "Brentford",
//     button: {
//       name: "Away",
//       marked: true,
//     },
//     league_id: "CUNVcki27vbKgua1J2ck",
//     away: "Brighton",
//     prize: "1",
//     dateCreated: {
//       _seconds: 1631273150,
//       _nanoseconds: 480000000,
//     },
//     status: true,
//     date: 1631368800000,
//     entry_fee: "free",
//     user: { userId: "433" },
//   },
// ];
// const game = freeOutComeGamesResult.filter(
//   (game) => game.id === "0do8sL0vwFOnA6RDQong"
// );
// const result = mapResults({ results: freeOutComeGamesResult });
// const res = result[pre[0].ID];
// const game = pre[0];
// if (game.home === res.home && game.away === res.away) {
//   console.log(true);
// }
