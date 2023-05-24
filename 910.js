/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function(nums, k) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const n = nums.length;
    let min_value = nums[0];
    let max_value = nums[n - 1];
    let result = max_value - min_value;

    for (let i = 0; i < n - 1; i++) {
        // Calculate the possible maximum and minimum values after modifying nums[i]
        const possible_max = Math.max(nums[i] + k, max_value - k);
        const possible_min = Math.min(nums[i + 1] - k, min_value + k);
        result = Math.min(result, possible_max - possible_min);
    }

    return result;
};
