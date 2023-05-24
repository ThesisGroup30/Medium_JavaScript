/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
    const n = nums.length;
    let count = 0;
    
    for (let i = 0; i < n; i += 2) {
        if (nums[i] === nums[i + 1]) {
            // Delete one of the duplicate elements
            count++;
            if (i > 0 && nums[i] === nums[i - 1]) {
                // If the previous element is also a duplicate, delete it as well
                count++;
            }
        }
    }
    
    return count;
};
