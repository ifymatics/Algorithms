
/***
 * 2 frogs can start on any index in the given input_array. The function should return the maximum possible distance these frogs can create between them (difference between the index values of both) by having them jump farther away from each other.

Frogs can only jump on higher value elements or some of the same height and they can not skip any elements.

Input: [1, 5, 5, 2, 6]

Output: 3. Largest distance of 3 is created by having spawn location 3 (0-indexed) and left frog jump until index 1 and right frog jumps until index 4.

len(input_array) is between 2 and 200 000. Values in array are integers between 1 and 1 000 000 000.
 */
function solution(blocks) {
    let maxSum = null;
    let start;
    let maxDistance = 0;
    let i;
    if (blocks.length < 2) {
        return blocks.length;
    }
    i = 0;
    while (i < blocks.length - 1) {
        while ((i - 1 >= 0) && (i < blocks.length) && (blocks[i - 1] == blocks[i]))
            i--;
        start = i;
        let downSum = blocks[i];
        while ((i + 1 < blocks.length) && (blocks[i + 1] <= blocks[i])) {
            downSum += blocks[++i];
        }
        let upSum = 0;
        while ((i + 1 < blocks.length) && (blocks[i + 1] >= blocks[i])) {
            upSum += blocks[++i];
        }
        let sum = upSum + downSum;
        if ((maxSum == null) || (sum > maxSum)) {
            maxSum = sum;
            maxDistance = i - start + 1;
        }
    } 
    return maxDistance;
}