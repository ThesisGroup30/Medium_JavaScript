/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    // Count the frequency of each character
    const frequencyMap = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    
    // Sort the characters based on their frequency in descending order
    const sortedChars = Array.from(frequencyMap.keys()).sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a));
    
    // Build the sorted string by repeating each character based on its frequency
    let result = '';
    for (const char of sortedChars) {
        const frequency = frequencyMap.get(char);
        result += char.repeat(frequency);
    }
    
    return result;
};
