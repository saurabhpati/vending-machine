/// <reference path="fifty.ts" />

class VendingMachine {
    public paid: KnockoutObservable<number> = ko.observable(0);
    public acceptedMoney: Fifty[] = [new Fifty()];

    acceptMoney = (money: Fifty): void => {
        let olderPaid = this.paid();
        this.paid(olderPaid + money.Value);
    }
}

class Cell {
    /**
     * Constructor to initialize the Cell Class.
     * @product: A product to put in a cell.
     */
    constructor(public product: CocaCola) {

    }

    stock: KnockoutObservable<number> = ko.observable(3);
    sold: KnockoutObservable<boolean> = ko.observable(false);
}