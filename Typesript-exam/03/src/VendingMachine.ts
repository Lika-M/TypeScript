import { Drink } from "./Drink";

export class VendingMachine {

    buttonCapacity: number;
    drinks: Drink[];

    constructor(buttonCapacity: number,) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }

    get getCount():number {
        return this.drinks.length;
    }

    addDrink(drink: Drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }

    removeDrink(name: string): boolean {
        const foundIndexOfDrink = this.drinks.findIndex(x => x.name === name);
        if (foundIndexOfDrink === -1) {
            return false;
        }
        this.drinks.splice(foundIndexOfDrink, 1);
        return true;
    }

    getLongest(): string {
        const foundDrink = this.drinks.slice().sort((a, b) => b.volume - a.volume)[0];
        return foundDrink.toString();
    }

    getCheapest(): string {
        const foundDrink = this.drinks.slice().sort((a, b) => a.price - b.price)[0];
        return foundDrink.toString();
    }

    buyDrink(name: string): string | undefined {
        const foundDrink = this.drinks.find(d => d.name === name);
        if (foundDrink) {
            return foundDrink.toString();
        }
        return undefined;
    }

    report(): string {
        return `Drinks available:\n${this.drinks.slice().map(d => d.toString()).join('\n')}`;
    }
}