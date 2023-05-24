/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
  
    for (const str of strs) {
        // Count the occurrences of each character in the string
        const count = Array(26).fill(0);
      
        for (const char of str) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            count[index]++;
        }
      
        // Convert the count array to a unique key
        const key = count.join('#');
      
        // Add the string to the corresponding group
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }
  
    // Convert the map values to an array
    return Array.from(map.values());
};
