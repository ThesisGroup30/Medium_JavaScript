/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    const n = nums.length;
    const stack = [];
    let third = Number.NEGATIVE_INFINITY;
    
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < third) {
            return true;
        }
        
        while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
            third = stack.pop();
        }
        
        stack.push(nums[i]);
    }
    
    return false;
};
