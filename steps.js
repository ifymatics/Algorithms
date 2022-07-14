// function steps(n) {
//   let step = "";
//   // for (let i = 1; i <= n; i++){
//   //     for (let j = 1; j <= i; j++) {
//   //         if (j === i) {
//   //              step +='#'
//   //         } else {
//   //             step+=''
//   //          }
//   //      }
//   //}
//   for (let i = 0; i < n; i++) {
//     console.log(step.padEnd(1, "#").repeat(i + 1));
//   }

//   //}
//   //return step;
// }
// steps(10);
function sameFrequency(a, b) {
  const A = "" + a;
  const B = "" + b;
  if (A.length !== B.length) return false;
  // good luck. Add any arguments you deem necessary.
  const hashA = {};
  const hashB = {};

  for (const b of B) {
    // hashB[b] = hashB[b] ? hashB[a] + 1 : 1;
    hashB[b] = (hashB[b] || 0) + 1;
  }

  for (const num of A) {
    if (hashB[num]) {
      hashB[num] = hashB[num] - 1;
    } else {
      return false;
    }
  }
  return true;
}
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(182, 281));
console.log(sameFrequency(182, 281));
