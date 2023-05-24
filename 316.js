/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const stack = [];
    const seen = new Set();
    const lastOccurrence = {};
  
    // Record the last occurrence index of each character
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s[i]] = i;
    }
  
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
      
        if (!seen.has(char)) {
            // Remove characters from the stack if:
            // 1. They are greater than the current character
            // 2. They have occurrences remaining
            while (
                stack.length > 0 &&
                char < stack[stack.length - 1] &&
                i < lastOccurrence[stack[stack.length - 1]]
            ) {
                seen.delete(stack.pop());
            }
          
            stack.push(char);
            seen.add(char);
        }
    }
  
    return stack.join('');
};
