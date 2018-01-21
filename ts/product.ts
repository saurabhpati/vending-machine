/// <reference path="product-category.ts" />

interface IProduct {
    name: string;
    price: number;
    category?: ProductCategory
}

class Initial implements IProduct {
    public name = 'Please select a product';
    price = 0;
}

class CocaCola implements IProduct {
    public name = 'Coca-Cola';
    public price = 50;
    public category = new SodaCategory();
}

class Fanta implements IProduct {
    public name = 'Fanta';
    public price = 50;
    public category = new SodaCategory();
}

class Lays implements IProduct {
    public name = 'Lays';
    public price = 30;
    public category = new ChipsCategory();
}

class UncleChips implements IProduct {
    public name = 'Uncle Chips';
    public price = 20;
    public category = new ChipsCategory();
}

class Eclairs implements IProduct {
    public name = 'Eclairs';
    public price = 10;
    public category = new CandyCategory();
}

class Melody implements IProduct {
    public name = 'Melody';
    public price = 20;
    public category = new CandyCategory();
}

class Chloromint implements IProduct {
    public name = 'Chloromint';
    public price = 10;
    public category = new CandyCategory();
}

class DairyMilk implements IProduct {
    public name = 'Dairy Milk';
    public price = 40;
    public category = new CandyBarCategory();
}

class Milkybar implements IProduct {
    public name = 'Milky Bar';
    public price = 60;
    public category = new CandyBarCategory();
}