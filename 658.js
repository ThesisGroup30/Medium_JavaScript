/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - k;
  
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
      
        // Check if the element at mid is closer to x or its right neighbor
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
  
    // Return the subarray from left to left + k
    return arr.slice(left, left + k);
};
