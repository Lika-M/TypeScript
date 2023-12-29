"use strict";
function cityTaxes(name, population, treasury) {
    const city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
            return this.treasury;
        },
        applyGrowth(percentage) {
            this.population += this.population * (percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= this.treasury * (percentage / 100);
            this.treasury = Math.floor(this.treasury);
        }
    };
    return city;
}
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
const city1 = cityTaxes('Tortuga', 7000, 15000);
city1.collectTaxes();
console.log(city1.treasury);
city1.applyGrowth(5);
console.log(city1.population);
