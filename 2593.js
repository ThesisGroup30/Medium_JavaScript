/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    const n = nums.length;
    const marked = new Array(n).fill(false); // Array to keep track of marked elements
    let score = 0;

    // Helper function to mark an element and its adjacent elements
    const markAdjacent = function(index) {
        marked[index] = true;
        if (index > 0) marked[index - 1] = true; // Mark left adjacent element
        if (index < n - 1) marked[index + 1] = true; // Mark right adjacent element
    };

    // Repeat until all elements are marked
    while (marked.includes(false)) {
        let minIndex = -1;
        let minValue = Infinity;

        // Find the smallest unmarked element
        for (let i = 0; i < n; i++) {
            if (!marked[i] && nums[i] < minValue) {
                minValue = nums[i];
                minIndex = i;
            }
        }

        // Mark the smallest unmarked element and its adjacent elements
        markAdjacent(minIndex);

        // Add the value of the chosen element to the score
        score += minValue;
    }

    return score;
};
