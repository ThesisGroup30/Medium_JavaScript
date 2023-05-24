/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    // XOR all elements in the array
    let xorAll = 0;
    for (let num of nums) {
        xorAll ^= num;
    }
    
    // Find the rightmost set bit in the XOR result
    let rightmostSetBit = 1;
    while ((rightmostSetBit & xorAll) === 0) {
        rightmostSetBit <<= 1;
    }
    
    // Divide the array into two groups based on the rightmost set bit
    let a = 0, b = 0;
    for (let num of nums) {
        if ((num & rightmostSetBit) === 0) {
            a ^= num;
        } else {
            b ^= num;
        }
    }
    
    return [a, b];
};
