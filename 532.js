/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0) {
        return 0; // Invalid k value, return 0
    }

    const numCounts = new Map(); // Map to store the count of each number
    let count = 0;

    // Count the occurrences of each number in the array
    for (const num of nums) {
        numCounts.set(num, (numCounts.get(num) || 0) + 1);
    }

    // Iterate over each number in the array
    for (const [num, freq] of numCounts) {
        // Check for k-diff pairs based on the value of k
        if (k === 0) {
            // For k = 0, count the number of numbers with frequency > 1
            if (freq > 1) {
                count++;
            }
        } else {
            // For k > 0, check if num + k exists in the array
            if (numCounts.has(num + k)) {
                count++;
            }
        }
    }

    return count;
};
