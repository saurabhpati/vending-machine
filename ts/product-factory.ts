/// <reference path="product.ts" />

class ProductFactory {
    static getProduct = () : CocaCola => new CocaCola();
}