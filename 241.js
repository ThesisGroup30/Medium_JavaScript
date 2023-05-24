/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const cache = {};

    return compute(expression);

    function compute(expression) {
        if (cache[expression]) {
            return cache[expression];
        }

        const result = [];

        for (let i = 0; i < expression.length; i++) {
            const char = expression[i];
            if (char === '+' || char === '-' || char === '*') {
                const leftPart = compute(expression.slice(0, i));
                const rightPart = compute(expression.slice(i + 1));

                for (const left of leftPart) {
                    for (const right of rightPart) {
                        result.push(calculate(left, right, char));
                    }
                }
            }
        }

        if (result.length === 0) {
            result.push(parseInt(expression));
        }

        cache[expression] = result;
        return result;
    }

    function calculate(left, right, operator) {
        switch (operator) {
            case '+':
                return left + right;
            case '-':
                return left - right;
            case '*':
                return left * right;
        }
    }
};
