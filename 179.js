/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // Convert numbers to strings
    const strNums = nums.map(String);
    // Custom sort the string array
    strNums.sort((a, b) => {
        return (b+a).localeCompare(a+b);
    });
    // Handle leading zero case
    if (strNums[0] === '0') {
        return '0';
    }
    // Concatenate the string array and return the result
    return strNums.join('');
};
