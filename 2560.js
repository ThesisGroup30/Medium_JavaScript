/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {
    const n = nums.length;
    const dp = new Array(n).fill(0); // Initialize an array to store the minimum capabilities
    
    dp[0] = nums[0]; // The minimum capability for the first house is its money
    
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], i - k >= 0 ? dp[i - k] + nums[i] : nums[i]);
        // The minimum capability for the current house is the maximum of:
        // 1. The capability of the previous house
        // 2. The capability of the house k steps before (if it exists) plus the money of the current house
    }
    
    return dp[n - 1]; // Return the minimum capability for the last house
};
