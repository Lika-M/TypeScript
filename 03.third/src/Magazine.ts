import { Cloth } from "./Cloth";

export class Magazine {
    public type: string;
    public capacity: number;
    public clothes: Cloth[] = [];

    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = this.clothes;
    }

    addCloth(cloth: Cloth): void {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth)
        }
    }

    removeCloth(color: string): boolean {
        const index = this.clothes.findIndex(c => c.color === color);
        if (index === -1) {
            return false;
        }
        this.clothes.splice(index, 1);
        return true;
    }

    getSmallestCloth() {
        const smallestCloth = this.clothes.slice().sort((a, b) => a.size - b.size)[0];
        return smallestCloth;
    }

    getCloth(color: string){
        const item = this.clothes.find(c => c.color === color);
        return item;
    }

    getClothCount() {
        return this.clothes.length;
    }

    report(){
        const result = `${this.type} magazine contains: \n${this.clothes.slice().map(x => x.toString()).join('\n')}`
        return result;
    }
}