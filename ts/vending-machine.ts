/// <reference path="fifty.ts" />

class VendingMachine {
    public paid: KnockoutObservable<number> = ko.observable(0);
    public acceptedMoney: Fifty[] = [new Fifty()];

    acceptMoney = (money: Fifty): void => {
        let olderPaid = this.paid();
        this.paid(olderPaid + money.Value);
    }
}