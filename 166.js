/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) {
        return "0";
    }

    let result = "";
    if ((numerator < 0) ^ (denominator < 0)) {
        result += "-";
    }

    let dividend = Math.abs(numerator);
    const divisor = Math.abs(denominator);

    result += Math.floor(dividend / divisor);
    dividend %= divisor;

    if (dividend === 0) {
        return result;
    }

    result += ".";

    const map = new Map();
    map.set(dividend, result.length);

    while (dividend !== 0) {
        dividend *= 10;
        result += Math.floor(dividend / divisor);
        dividend %= divisor;

        if (map.has(dividend)) {
            const index = map.get(dividend);
            result = result.substring(0, index) + "(" + result.substring(index) + ")";
            break;
        } else {
            map.set(dividend, result.length);
        }
    }

    return result;
};
