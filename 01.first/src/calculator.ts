type Pair = {
    [key: string]: () => string
}

function solve(num1: number, operator: string, num2: number): string {

  
    const calculate: Pair = {
        '+': () => (num1 + num2).toFixed(2),
        '-': () => (num1 - num2).toFixed(2),
        '/': () => (num1 / num2).toFixed(2),
        '*': () => (num1 * num2).toFixed(2)
    }

    const result: string = calculate[operator]();
    return result;
}

console.log(solve(5, "+", 10))
console.log(solve(25.5, "-", 3))
console.log(solve(9, "/", 2))
console.log(solve(7, "*", 5))