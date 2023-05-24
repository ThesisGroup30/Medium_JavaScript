/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const lastIndex = new Array(26).fill(0);
  
    // Find the last occurrence index of each character
    for (let i = 0; i < s.length; i++) {
        lastIndex[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }
  
    const partitions = [];
    let start = 0;
    let end = 0;
  
    // Iterate over the string to determine the partitions
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex[s.charCodeAt(i) - 'a'.charCodeAt(0)]);
      
        if (i === end) {
            partitions.push(end - start + 1);
            start = i + 1;
        }
    }
  
    return partitions;
};
