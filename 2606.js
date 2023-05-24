/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function(s, chars, vals) {
    // Build a map of character-value pairs for easy lookup
    const charMap = new Map();
    for (let i = 0; i < chars.length; i++) {
        charMap.set(chars[i], vals[i]);
    }
    
    let maxCost = 0;
    let currentCost = 0;
    
    // Traverse the string and calculate cost of each substring
    for (let i = 0; i < s.length; i++) {
        // If the current character is not in chars, add its value to current cost
        if (!charMap.has(s[i])) {
            currentCost += s.charCodeAt(i) - 96;
        } else {
            // Otherwise, add its value to current cost
            currentCost += charMap.get(s[i]);
        }
        
        // If current cost becomes negative, reset it to zero
        if (currentCost < 0) {
            currentCost = 0;
        }
        
        // Update max cost if current cost is greater
        maxCost = Math.max(maxCost, currentCost);
    }
    
    return maxCost;
};
