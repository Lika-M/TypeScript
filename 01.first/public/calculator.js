"use strict";
function solve(num1, operator, num2) {
    const calculate = {
        '+': () => (num1 + num2).toFixed(2),
        '-': () => (num1 - num2).toFixed(2),
        '/': () => (num1 / num2).toFixed(2),
        '*': () => (num1 * num2).toFixed(2)
    };
    const result = calculate[operator]();
    return result;
}
console.log(solve(5, "+", 10));
console.log(solve(25.5, "-", 3));
console.log(solve(9, "/", 2));
console.log(solve(7, "*", 5));
