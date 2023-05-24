/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let num = 0;
    // Remove leading whitespace
    while (s[i] === ' ') {
        i++;
    }
    // Check for sign
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '+' ? 1 : -1;
        i++;
    }
    // Parse digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + (s[i] - '0');
        i++;
    }
    // Apply sign
    num *= sign;
    // Clamp to range of 32-bit signed integer
    if (num < -2147483648) {
        return -2147483648;
    }
    if (num > 2147483647) {
        return 2147483647;
    }
    return num;
};
