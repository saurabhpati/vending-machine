/// <reference path="fifty.ts" />

class VendingMachine {
    private paid: number = 0;
    
    acceptMoney = (money: Fifty) => {
        this.paid += money.Value;
        let element = document.getElementById('total');
        element.innerHTML = this.paid.toString();
    }
}