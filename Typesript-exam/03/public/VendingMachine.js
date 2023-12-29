"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    get getCount() {
        return this.drinks.length;
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const foundIndexOfDrink = this.drinks.findIndex(x => x.name === name);
        if (foundIndexOfDrink === -1) {
            return false;
        }
        this.drinks.splice(foundIndexOfDrink, 1);
        return true;
    }
    getLongest() {
        const foundDrink = this.drinks.slice().sort((a, b) => b.volume - a.volume)[0];
        return foundDrink.toString();
    }
    getCheapest() {
        const foundDrink = this.drinks.slice().sort((a, b) => a.price - b.price)[0];
        return foundDrink.toString();
    }
    buyDrink(name) {
        const foundDrink = this.drinks.find(d => d.name === name);
        if (foundDrink) {
            return foundDrink.toString();
        }
        return undefined;
    }
    report() {
        return `Drinks available:\n${this.drinks.slice().map(d => d.toString()).join('\n')}`;
    }
}
exports.VendingMachine = VendingMachine;
