/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(1); // Initialize an array to store the lengths of increasing subsequences
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1); // Update the length of the subsequence
            }
        }
    }
    
    return Math.max(...dp); // Return the maximum length
};
