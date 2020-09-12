// Find the maximum consecutive 1's in an array of 0's and 1's.

let findMaxConsecutive = function(nums) {
    let maxCount = 0;
    
    let count = 0;
    for (let i in nums) {
        count = nums[i] === 1 ? count + 1 : 0;
        if (count > maxCount) {
            maxCount = count;
        }
    }

    return maxCount;
};

console.log(findMaxConsecutive([0,0,1,1,0,0,0,1,0,0,1,1,1,0]));
console.log(findMaxConsecutive([1,0,0,0,0,1,0,0,0,1]));
