// // function compress()
// // let str = "qwwwwwwwwweeeeerrtyyyyyqqqqwEErTTT";
// // let arr = str.toCharArray();
// // let count = 1;
// //  sb = arr.join("");
// // let prev = arr[0];

// // for (let i = 1; i < arr.length; i++) {
// //     let curr = arr[i];
// //     prev = arr[i - 1];
// //     if (curr == prev) {
// //         count++;
// //     } else {
// //         if (count < 2) {
// //             sb.append(prev);
// //         } else {
// //             sb.append(count).append(prev);
// //             count = 1;
// //         }
// //     }
// // }

// // if (count < 2) {
// //     sb.append(prev);
// // } else {
// //     sb.append(count).append(prev);
// // }

// // System.out.println("Compressed : " + sb.toString());
// var cases = ['aabcccddeaaa', 'abababcdeee', 'ababcdabcd'];

// function compress(str,k) {
//   var len, sub, i, n;

//   // if str is shorter than 2, can't be any repeating substrings
//   if(str.length < k)
//     return str;

//   // max meaningful length is str.length/k (truncated to integer)
//   for(len = (str.length / k) | 0; len > 0; len--) {
//     // search for a repeating substring of "len" length starting at index i
//     for(i = 0; i + (len * k) <= str.length; i++) {
//       sub = str.substr(i, len);
//       // if such a substring exists...
//       if(str.indexOf(sub, i + len) == i + len) {
//         // "count" how many occurences (advance index till beyond repeats)
//         for(n = i + len * k; str.indexOf(sub, n) == n; n += len);
//         // return a string composed of the compressed part before the match +
//         // the substring + the compressed part beyond the match
//         return compress(str.substr(0, i)) + sub + compress(str.substr(n));
//       }
//     }
//   }

//   // if nothing found, return original string
//   return str;
// }

// alert(JSON.stringify(cases.map(compress)));
function compress(S,K) {
    var len, sub, i, n;
  
    // if str is shorter than 2, can't be any repeating substrings
    if(S.length < K)
      return S;
  
    // max meaningful length is str.length/k (truncated to integer)
    for(len = (S.length/K) | 0; len > 0; len--) {
      // search for a repeating substring of "len" length starting at index i
      for(i = 0; i + (len * K) <= S.length; i++) {
        sub = S.substr(i, len);
        // if such a substring exists...
        if(S.indexOf(sub, i + len) == i + len) {
          // "count" how many occurences (advance index till beyond repeats)
          for(n = i + len * K; S.indexOf(sub, n) == n; n += len);
          // return a string composed of the compressed part before the match +
          // the substring + the compressed part beyond the match
          return compress(S.substr(0, i)) + sub + compress(S.substr(n)).length;
        }
      }
    }
  
    // if nothing found, return original string
    return S;
  }