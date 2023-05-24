/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0; // Check if x is negative
    let num = Math.abs(x); // Get the absolute value of x
    let reversed = 0;

    while (num > 0) {
        const digit = num % 10; // Get the last digit of num
        reversed = reversed * 10 + digit; // Append the digit to the reversed number
        num = Math.floor(num / 10); // Remove the last digit from num
    }

    // Check if the reversed number is within the signed 32-bit integer range
    if (reversed > 2 ** 31 - 1) {
        return 0;
    }

    // Return the reversed number with the original sign
    return isNegative ? -reversed : reversed;
};
