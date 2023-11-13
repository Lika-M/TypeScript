type Tuple = [string, number];
type ProductLowestPrice = {
    [key: string]: Tuple [];
}

function solve(input: string[]): void {
    const result: ProductLowestPrice = {};

    for (const row of input) {
        const [town, product, price]: string[] = row.split(' | ');

        if (!result[product]) {
            result[product] = [];
        }

        const tuple: Tuple = [town, Number(price)];
        result[product].push(tuple);
    }

    for (const item of Object.entries(result)) {
        const productName = item[0]
        const smallestPrice = item[1].sort((a, b) => a[1] - b[1])[0]
        console.log(`${productName} -> ${smallestPrice[1]} (${smallestPrice[0]})`)
    }

}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);
