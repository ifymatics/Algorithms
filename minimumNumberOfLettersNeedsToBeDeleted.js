/***
 * We are given a string S of length N consisting only of letters ‘A’ and/or ‘B’. Our goal is to obtain a string in the format “A…AB…B” (all letters A’ occur before all letters ‘B’) by deleting some letters from S. In particular, strings consisting only of letters A’ or only of letters ‘B* fit this format.
Write a function:
int solution(string & s);
that, given a string S, returns the minimum number of letters that need to be deleted from S in order to obtain a string in the above format.
Examples:
1. Given S = “BAAABAB”, the function should return 2. We can obtain “AAABB” by deleting the first occurrence of ‘B’ and the last occurrence of A’.
2. Given S = “BBABAA”, the function should return 3. We can delete all occurrences of A’ or all occurrences of ‘B’.
3. Given S = “AABBBB”, the function should return 0. We do not have to delete any letters, because the given string is already in the expected format.
Write an efficient algorithm.
Solution:
Actually we need to find an equilibrium point on this string where most of ‘A’ letters will be placed on the left from this point and most of ‘B’ letters on the right. The simplest solution for all cases is to remove all ‘B’ or ‘A’ letters. But we can’t accept it because it doesn’t fit to criteria “the minimum number of letters that need to be deleted”. So we need to find a point such that if we remove the minimum number of letters A on the left, and the minimum number of letters B on the right, we get a string in the format “A … AB … B”. For example if we have given string “AABBB” this point is between “AA” and “BBB” and we don’t need to remove any letters. For string AABABBB there are two such points because we may convert the string to right format by removing single ‘A’ or ‘B’. We may find any of these points.
Basic algorithm looks like we need to pass through the whole string and for each item count how many A letters we need to remove on the left and how many B letters we need to remove on the right. Then return sum of the minimums.
This algorithm is simple but it’s complexity is horrible. It is O(N2) because we need to rescan the string for each item. But we may optimize it.
Let’s use Dynamic Programming approach: Assume the minimum deletions to format s[0..i] (index 0 to index i in string s) is computed and we keep numbers of deletions for range s[0..i] in variable int min_dels, then the minimum deletions to format s[0..i+1] is:
if(s[i+1] == ‘A’) {
There are two options: either to include this ‘A’ or exclude.
If ‘A’ included then all B’s before it should be deleted by definition of the task where A must be always before ‘B’.
If ‘A’ excluded then increment min_dels for range s[0..i] to one, that is add the ‘A’ which we going to exclude/delete to the number of deleted items
min_dels[0..i+1] = std::min(num_Bs, min_dels[0..i]+1); // num_Bs is the total number of Bs in s[0..i]
}
else {
Since B is at the end there is no need to exclude this B
min_dels[0..i+1] = min_dels[0..i];
}
Here records like min_dels[0..i+1] mean not arrays but value of int min_dels calculated on range [0..i+1]
 * 
 */
    function solution(S) {
        const character= 'A';
            let numbers = 0,  minimumTobeDeleted = 0;
            for( char of S) {
                if (character== char) {
                    
                    minimumTobeDeleted = Math.min(numbers, minimumTobeDeleted + 1);
                }
                else {
                    numbers++;
                    
                }
            }
            return minimumTobeDeleted ;
    }
