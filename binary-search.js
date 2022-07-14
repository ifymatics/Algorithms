nums=[0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
let binarySearch = (array, target) => {
    //set the left as the first index and the right as last index
    let left = 0, right = array.length - 1;
    //use while loop to to iterate the array as long as the left is less than the right
    while (left <= right) {
        //find the midd
        let mid = Math.floor((left + right )/ 2);
        if (target === array[mid]) {
            return mid;
        } else if (target < array[mid]) {
            right =  mid - 1;
        } else {
            left=  mid +1;
        }
    }
    return false;
    
}
//console.log(binarySearch(nums, 17));
console.log(binarySearch(nums, 33));