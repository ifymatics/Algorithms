const scorer = (enabledGames = [], userClusters) => {
  let enabledMapped = {};
  let scoredArray = [];
  for (let enGame of enabledGames) {
    enabledMapped[enGame.matchId] = enGame;
    //enGame.localteamFullTimeScore + "-" + enGame.visitorteamFullTimeScore;
  }
  if (userClusters.length > 0) {
    for (let index = 0; index < userClusters.length; index++) {
      if (userClusters[index].gameCluster.length > 0) {
        for (let i = 0; i < userClusters[index].gameCluster.length; i++) {
          if (userClusters[index].gameCluster[i].matchId in enabledMapped) {
            if (!userClusters[index].gameCluster[i].scored) {
              if (
                enabledMapped[userClusters[index].gameCluster[i].matchId]
                  .localteamFullTimeScore !== "" &&
                enabledMapped[userClusters[index].gameCluster[i].matchId]
                  .visitorteamFullTimeScore !== ""
              ) {
                if (
                  enabledMapped[userClusters[index].gameCluster[i].matchId]
                    .localteamFullTimeScore ===
                    userClusters[index].gameCluster[i]
                      .predictedHomeFullTimeScore &&
                  enabledMapped[userClusters[index].gameCluster[i].matchId]
                    .visitorteamFullTimeScore ===
                    userClusters[index].gameCluster[i]
                      .predictedAwayFullTimeScore
                  //cluster.predictedHomeFullTimeScore + "-" + cluster.predictedAwayFullTimeScore
                ) {
                  userClusters[index].number += 1;
                  userClusters[index].gameCluster[i].correct = true;
                } else {
                }
                userClusters[index].gameCluster[i].scored = true;
                userClusters[index].gameCluster[i].localteamFullTimeScore =
                  enabledMapped[
                    userClusters[index].gameCluster[i].matchId
                  ].localteamFullTimeScore;
                userClusters[index].gameCluster[i].visitorteamFullTimeScore =
                  enabledMapped[
                    userClusters[index].gameCluster[i].matchId
                  ].visitorteamFullTimeScore;
              }
            }
          }
        }
      }
    }
  }
  return userClusters;
};

let enabledGames = [
  {
    correct: false,
    enabled: true,
    leagueId: "1204",
    leagueName: "Premier League",
    localteamFullTimeScore: "0",
    localteamImage: "fulham",
    localteamName: "Fulham",
    matchId: "3389236",
    number: 0,
    scheduledDate: "12.09.2020",
    scheduledDateObj: { day: "12", month: "09", year: "2020" },
    scheduledTime: "11:30",
    scored: false,
    season: "2020/2021",
    visitorteamFullTimeScore: "3",
    visitorteamImage: "arsenal",
    visitorteamName: "Arsenal",
    weekNo: "1",

    _id: "3389236",
  },
  {
    correct: false,
    enabled: true,
    leagueId: "1204",
    leagueName: "Premier League",
    localteamFullTimeScore: "1",
    localteamImage: "crystal_palace",
    localteamName: "Crystal Palace",
    matchId: "3389234",
    number: 0,
    scheduledDate: "12.09.2020",
    scheduledDateObj: { day: "12", month: "09", year: "2020" },
    scheduledTime: "14:00",
    scored: false,
    season: "2020/2021",
    visitorteamFullTimeScore: "0",
    visitorteamImage: "southampton",
    visitorteamName: "Southampton",
    weekNo: "1",

    _id: "3389234",
  },
  {
    correct: false,
    enabled: true,
    leagueId: "1204",
    leagueName: "Premier League",
    localteamFullTimeScore: "4",
    localteamImage: "liverpool",
    localteamName: "Liverpool",
    matchId: "3389237",
    number: 0,
    scheduledDate: "12.09.2020",
    scheduledDateObj: { day: "12", month: "09", year: "2020" },
    scheduledTime: "16:30",
    scored: false,
    season: "2020/2021",
    visitorteamFullTimeScore: "3",
    visitorteamImage: "leeds_united",
    visitorteamName: "Leeds United",
    weekNo: "1",

    _id: "3389237",
  },
];

let clusters = [
  {
    number: 0,
    gameCluster: [
      {
        scored: false,
        _id: "3389237",
        leagueName: "Premier League",
        leagueId: "1204",
        season: "2020/2021",
        weekNo: "1",
        enabled: true,

        matchId: "3389237",
        scheduledDate: "12.09.2020",
        scheduledTime: "16:30",
        localteamName: "Liverpool",
        visitorteamName: "Leeds United",
        localteamFullTimeScore: "",
        visitorteamFullTimeScore: "",

        scheduledDateObj: { day: "12", month: "09", year: "2020" },
        localteamImage: "liverpool",
        visitorteamImage: "leeds_united",
        correct: false,
        predictedHomeFullTimeScore: "4",
        predictedAwayFullTimeScore: "3",
      },
      {
        correct: false,
        enabled: true,
        leagueId: "1204",
        leagueName: "Premier League",
        localteamFullTimeScore: "",
        localteamImage: "crystal_palace",
        localteamName: "Crystal Palace",
        matchId: "3389234",

        scheduledDate: "12.09.2020",
        scheduledDateObj: { day: "12", month: "09", year: "2020" },
        scheduledTime: "14:00",
        scored: false,
        season: "2020/2021",
        visitorteamFullTimeScore: "",
        visitorteamImage: "southampton",
        visitorteamName: "Southampton",
        predictedHomeFullTimeScore: "1",
        predictedAwayFullTimeScore: "0",
        weekNo: "1",

        _id: "3389234",
      },
    ],
  },
];
console.log(scorer(enabledGames, clusters));
