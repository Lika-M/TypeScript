type CityTax = {
    name: string,
    population: number,
    treasury: number,
    taxRate: number,
    collectTaxes: () => number,
    applyGrowth: (percentage: number) => void,
    applyRecession: (percentage: number) => void
}

function cityTaxes(name: string, population: number, treasury: number): CityTax {
    const city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,

        collectTaxes(): number {
            this.treasury += this.population * this.taxRate;
            return this.treasury;
        },

        applyGrowth(percentage: number): void {
            this.population += this.population * (percentage / 100);
        },

       applyRecession(percentage: number) {
            this.treasury -= this.treasury * (percentage / 100);
            this.treasury = Math.floor(this.treasury); 
        }
    };
    return city;
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city);

const city1 =
  cityTaxes('Tortuga',
  7000,
  15000);
city1.collectTaxes();
console.log(city1.treasury);
city1.applyGrowth(5);
console.log(city1.population);

