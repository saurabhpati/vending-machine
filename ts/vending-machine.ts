/// <reference path="fifty.ts" />

class VendingMachine {
    private paid: KnockoutObservable<number> = ko.observable(0);
    
    acceptMoney = (money: Fifty) => {
        let olderPaid = this.paid();
        this.paid(olderPaid + money.Value);
    }
}