/// <reference path="money.ts" />
/// <reference path="product.ts" />
/// <reference path="product-factory.ts" />


class VendingMachine {
    private paid: KnockoutObservable<number> = ko.observable(0);
    private acceptedMoney: Money[] = [new Fifty(), new Twenty(), new Ten()];
    private selectedCell: KnockoutObservable<Cell> = ko.observable(new Cell(new CocaCola()));
    private canPay: KnockoutComputed<Boolean> = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);
    public cells: KnockoutObservableArray<Cell> = ko.observableArray([]);
    
    public set Size(givenSize: VendingMachineSize) {
        this.cells([]);

        for (let index = 0; index < givenSize; index++) {
            let product: CocaCola = ProductFactory.getProduct();
            this.cells.push(new Cell(product));
        }
    }

    public acceptMoney = (money: Fifty): void => {
        let olderPaid = this.paid();
        this.paid(olderPaid + money.value);
    }

    public select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    public pay = (): void => {
        let selectedCell: Cell = this.selectedCell();
        
        if (!selectedCell.stock()) {
            alert(`Darn It! We are out of ${selectedCell.product.name}s`);
            return;
        }

        this.paid(this.paid() - selectedCell.product.price);
        selectedCell.stock(selectedCell.stock() - 1);
        selectedCell.sold(true);
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