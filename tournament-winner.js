function tournamentWinner(competitions, results) {
    // Write your code here.
      
   let scoredResult = {};
    let teamWinner = '';
    let highestScore = 0;
      for(let i = 0; i<competitions.length; i++){
          if(results[i]===0){
              if(scoredResult[competitions[i][1]]){
                  scoredResult[competitions[i][1]] += 3
              }else
              scoredResult[competitions[i][1]] = 3
           }else if(results[i]===1){
                   if(scoredResult[competitions[i][0]]){
                      scoredResult[competitions[i][0]] += 3
                  }else
                  scoredResult[competitions[i][0]] = 3;
              
           }
      }
      
    for (let score in scoredResult) {
        if (scoredResult[score] > highestScore) {
            highestScore = scoredResult[score];
            teamWinner = score
        }
    }
    return teamWinner
}
tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ], [0, 0, 1])
// "competitions": [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python", "HTML"]
//   ],
//   "results": [0, 0, 1]