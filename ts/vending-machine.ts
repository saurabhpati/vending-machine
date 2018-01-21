import { Money, Fifty, Twenty, Ten } from "./money";
import { IProduct, Initial} from "./product";
import getProduct from './product-factory';

export class VendingMachine {
    private paid: KnockoutObservable<number> = ko.observable(0);
    private acceptedMoney: Money[] = [new Fifty(), new Twenty(), new Ten()];
    private selectedCell: KnockoutObservable<Cell> = ko.observable(new Cell(new Initial()));
    private canPay: KnockoutComputed<Boolean> = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);
    public cells: KnockoutObservableArray<Cell> = ko.observableArray([]);
    
    public set Size(givenSize: VendingMachineSize) {
        this.cells([]);

        for (let index = 0; index < givenSize; index++) {
            let product: IProduct = getProduct();
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
    public constructor(public product: IProduct) {

    }

    public stock: KnockoutObservable<number> = ko.observable(3);
    public sold: KnockoutObservable<boolean> = ko.observable(false);
}

export enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}