/// <reference path="product.ts" />

class ProductFactory {
    static getProduct = () : IProduct => {
        let random: number = Math.floor(Math.random() * 9);

        switch (random) {
            case 0: return new CocaCola();
            case 1: return new Fanta();
            case 2: return new Lays();
            case 3: return new UncleChips();
            case 4: return new Eclairs();
            case 5: return new Melody();
            case 6: return new Chloromint();
            case 7: return new DairyMilk();
            case 8: return new Milkybar();
            default: throw "Invalid random";
        }
    };
}