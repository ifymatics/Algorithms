let twoSum = (nums, target)=> {
     ;
    // let sum = new Set();
    // for(let i=0;i<nums.length;i++){
    //     if(sum.has(target-nums[i])){
    //         let index = nums.indexOf(target-nums[i])
          
    //         output.push(index,i)
          
    //     } else {
    //         sum.add(nums[i])
    //     }
    // }
    nums.sort((a, b) => a - b);
        let left = 0;
        let right = nums.length - 1;
        while (right > left) {
            let theSum = nums[left] + nums[right];
            if (theSum === target) {
                return [nums[left], nums[right]];
            } else if (theSum > target) {
                right--
            } else if (theSum < target) {
                left++
            }
        }
    
    return []
};
console.log(twoSum([3,2,4],6));