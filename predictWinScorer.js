const testData = require("./testData");
const { predictions, results } = testData.testData;

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

const scorer = (games, results) => {
  const winnersObj = {};
  const scoredPredictedGame = [];
  const isDuplicate = new Set();

  const freeScoreResultObj = mapResults(results.freeScoreGamesResult);
  const tokenScoreResultObj = mapResults(results.tokenScoreGamesResult);
  if (games.length > 0) {
    for (let i = 0; i < games.length; i++) {
      count++;
      const useIdPlusGameId = games[i].ID.concat(games[i].user?.userId);

      //CHECK IF A USER PLAYED A PARTICULAR GAME MORE THAN ONCE
      if (!isDuplicate.has(useIdPlusGameId)) {
        isDuplicate.add(useIdPlusGameId);

        if (games[i].free) {
          const res = freeScoreResultObj[games[i].ID];
          if (!res || games[i].scored) {
            continue;
          } /*(res && !games[i].scored)*/ else {
            const g = games[i];
            //SCORE FREE GAMES

            g.scored = true;

            //CHECK IF A USER PREDICTED A PARTICULAR GAME CORRECTLY
            if (
              g.homeScore === res.homeScore &&
              g.awayScore === res.awayScore &&
              g.home.trim() === res.home.trim() &&
              g.away.trim() === res.away.trim()
            ) {
              g.result = true;
              g["has_awarded_coin"] = true;
              winnersObj[g.user.userId.toString()] =
                (winnersObj[g.user.userId.toString()] || 0) + Number(g.prize);
              // scoredPredictedGame.push(g);
            }
            scoredPredictedGame.push(g);
          }
        } else {
          //SCORE PREMIUM GAMES
          const { game } = games[i];
          const res = tokenScoreResultObj[games[i].ID];
          if (res && !games[i].scored) {
            const childRes = mapResults(res.game, true);

            for (let j = 0; j < game.length; j++) {
              const res = childRes[game[j].home.trim() + game[j].away.trim()];
              if (!res || game[j].scored) {
                continue;
              } /*(res && !game[j].scored)*/ else {
                game[j].scored = true;
                if (
                  game[j].homeScore === res.homeScore &&
                  game[j].awayScore === res.awayScore
                ) {
                  game[j].result = true;
                  games[i]["result_count"] =
                    (games[i]["result_count"] || 0) + 1;
                  // winner.push(game);
                }
                games[i]["score_count"] = (games[i]["score_count"] || 0) + 1;

                if (games[i]["score_count"] === games[i].length) {
                  games[i].scored = true;
                  //AWARD FIRST PRIZE
                  if (games[i]["result_count"] === games[i].length) {
                    winnersObj[games[i].user.userId.toString()] =
                      (winnersObj[games[i].user.userId.toString()] || 0) +
                      Number(games[i].prize);
                  }

                  //AWARD SECOND PRIZE
                  if (games[i]["result_count"] === games[i].length - 1) {
                    winnersObj[games[i].user.userId.toString()] =
                      (winnersObj[games[i].user.userId.toString()] || 0) +
                      Number(games[i].prize2);
                  }
                  //AWARD FIRST PRIZE
                  if (games[i]["result_count"] === games[i].length - 2) {
                    winnersObj[games[i].user.userId.toString()] =
                      (winnersObj[games[i].user.userId.toString()] || 0) +
                      Number(games[i].prize3);
                  }
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
scorer(predictions, results);
