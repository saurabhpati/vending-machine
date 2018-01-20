/// <reference path="fifty.ts" />
/// <reference path="product.ts" />
/// <reference path="product-factory.ts" />


class VendingMachine {
    private paid: KnockoutObservable<number> = ko.observable(0);
    private acceptedMoney: Fifty[] = [new Fifty()];
    public cells: KnockoutObservableArray<Cell> = ko.observableArray([]);
    public selectedCell: KnockoutObservable<Cell> = ko.observable(new Cell(new CocaCola()));

    public set Size(givenSize: VendingMachineSize) {
        this.cells([]);

        for (let index = 0; index < givenSize; index++) {
            let product: CocaCola = ProductFactory.getProduct();
            this.cells.push(new Cell(product));
        }
    }

    public acceptMoney = (money: Fifty): void => {
        let olderPaid = this.paid();
        this.paid(olderPaid + money.Value);
    }

    public select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
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

enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}