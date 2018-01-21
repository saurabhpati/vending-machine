import * as Product from "./product";

export default function getProduct(): Product.IProduct {
    let random: number = Math.floor(Math.random() * 11);

    switch (random) {
        case 0: return new Product.CocaCola();
        case 1: return new Product.Fanta();
        case 2: return new Product.Lays();
        case 3: return new Product.UncleChips();
        case 4: return new Product.Eclairs();
        case 5: return new Product.Melody();
        case 6: return new Product.Chloromint();
        case 7: return new Product.DairyMilk();
        case 8: return new Product.Milkybar();
        case 9: return new Product.Cashew();
        case 10: return new Product.Peanuts();
        default: throw "Invalid random";
    }
};