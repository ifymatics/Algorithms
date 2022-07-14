/***
 * QUESTION:
 * You are given two arrays A and B consisting of N integers each.

Index K is named fair if the four sums(A[0]+...A[K-1]),(A[K]+...+A[N-1]),(B[0]+...+B[K-1]) and (B[K]+...+B[N-1]) are all equal, In other words, K is the index where the two arrays, A and B, can be split (into two non-empty arrays each) in such a way that the sums of the resulting arrays’ elements are equal.

For example, given arrays A = [4,-1, 0, 3] and B = [-2, 5, 0, 3], index K = 2 is fair. The sums of the subarrays are all equal: 4+(-1) = 3; 0+3 = 3; -2 + 5 = 3 and 0 + 3 = 3.

Now you have to figure out the number of fair indexes
 * 
 * 
 */


function solution(A, B) {
    let n = A.length;
    if (n == 0) return 0;
    
    letguesA = 0,guesB = 0;

    for (let i = 0; i < n; ++i) {
       guesA += A[i];
       guesB += B[i];
    }
    
    if (guesA !=guesB) return 0;
    let halfSum =guesA / 2;
   guesA = 0,guesB = 0;
    let result = 0;
    for (let i = 0; i < n - 1; ++i) {
       guesA += A[i];
       guesB += B[i];
        if (guesA ==guesB &&guesA == halfSum) result++;
    }
    
    return result;
}