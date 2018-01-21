import * as Category from "./product-category";

export interface IProduct {
    name: string;
    price: number;
    category?: Category.ProductCategory
}

export class Initial implements IProduct {
    public name = 'Please select a product';
    price = 0;
}

export class CocaCola implements IProduct {
    public name = 'Coca-Cola';
    public price = 50;
    public category = new Category.SodaCategory();
}

export class Fanta implements IProduct {
    public name = 'Fanta';
    public price = 50;
    public category = new Category.SodaCategory();
}

export class Lays implements IProduct {
    public name = 'Lays';
    public price = 30;
    public category = new Category.ChipsCategory();
}

export class UncleChips implements IProduct {
    public name = 'Uncle Chips';
    public price = 20;
    public category = new Category.ChipsCategory();
}

export class Eclairs implements IProduct {
    public name = 'Eclairs';
    public price = 10;
    public category = new Category.CandyCategory();
}

export class Melody implements IProduct {
    public name = 'Melody';
    public price = 20;
    public category = new Category.CandyCategory();
}

export class Chloromint implements IProduct {
    public name = 'Chloromint';
    public price = 10;
    public category = new Category.CandyCategory();
}

export class DairyMilk implements IProduct {
    public name = 'Dairy Milk';
    public price = 40;
    public category = new Category.CandyBarCategory();
}

export class Milkybar implements IProduct {
    public name = 'Milky Bar';
    public price = 60;
    public category = new Category.CandyBarCategory();
}

export class Cashew implements IProduct {
    public name = 'Cashew';
    public price = 30;
    public category = new Category.NutsCategory();
}

export class Peanuts implements IProduct {
    public name = 'Peanuts';
    public price = 30;
    public category = new Category.NutsCategory();
}