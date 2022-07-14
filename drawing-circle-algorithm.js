const ep = 0.00001;

function dist(x, y) {
    return Math.sqrt(x * x + y * y)
  }
  
  function isSameDist(x1, y1, x2, y2) {
    return Math.abs(dist(x1, y1) - dist(x2, y2)) < ep
  }
  
  function solution(S, X, Y) {
    let arr = []
    let isIn = new Map()
    let answer = 0
  
    for (let i = 0; i < X.length; i++) {
      arr[i] = i
    }
  
    arr.sort((a, b) => dist(X[a], Y[a]) - dist(X[b], Y[b]))
  
    for (let i = 0; i < arr.length; i++) {
      const ch = S[arr[i]]
      if (isIn.has(ch)) {
        isIn.forEach((idx, key) => {
          if (isSameDist(X[idx], Y[idx], X[arr[i]], Y[arr[i]])) {
            answer--
          }
        })
        break;
      }
      isIn.set(ch, arr[i])
      answer++
    }
  
    return answer
  }