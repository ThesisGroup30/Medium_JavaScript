/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    const n = nums1.length;
    
    // Sort the arrays in ascending order
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    let i = 0;
    let j = 0;
    
    // Modify the elements in nums1 and nums2 to minimize the sum of squared differences
    while (k1 > 0 || k2 > 0) {
        if (k1 > 0 && nums1[i] < nums2[j]) {
            nums1[i]++; // Increment nums1[i]
            k1--;
        } else if (k2 > 0 && nums1[i] > nums2[j]) {
            nums2[j]++; // Increment nums2[j]
            k2--;
        } else {
            if (k1 > 0) {
                nums1[i]++; // Increment nums1[i]
                k1--;
            } else if (k2 > 0) {
                nums2[j]++; // Increment nums2[j]
                k2--;
            }
        }
        
        // Move to the next elements in the arrays
        i = (i + 1) % n;
        j = (j + 1) % n;
    }
    
    // Calculate the sum of squared differences
    let sum = 0;
    for (let i = 0; i < n; i++) {
        const diff = nums1[i] - nums2[i];
        sum += diff * diff;
    }
    
    return sum;
};
