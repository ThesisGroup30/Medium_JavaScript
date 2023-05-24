/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
    const n = nums.length;
    let mex = 0;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (nums[i] <= mex) {
            mex = Math.max(mex, nums[i] + value);
        } else {
            break;
        }
    }

    return mex;
};
