"use strict";
function solve(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    const sum = result.reduce((a, num) => a + num, 0);
    console.log(result.join(' '));
    console.log(`Sum: ${sum}`);
}
solve(5, 10);
solve(0, 26);
solve(50, 60);
