/**
 * This is the entry point of the application and configures pieces for the app to be bootstrapped.
 */
/// <reference path="vending-machine.ts" />

let machine = new VendingMachine();
ko.applyBindings(machine);