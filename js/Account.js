'use strict';

class Account {

    constructor(accountName) {
        this.accountName = accountName;
    }

    get person() {
        return this._person;
    }

    set person(person) {
        if (person instanceof Person) {
            this._person = person;
        }
    }

    get lastOperation() {
        return !this._lastOperation ? "Операций не производилось" : this._lastOperations;
    }

    set lastOperation(lastOperation) {
        if (lastOperation instanceof Date) {
            this._lastOperation = lastOperation;
        }
    }

    get balance() {
        return !this._balance ? 0 : this._balance;
    }

    set balance(balance) {
        this._balance = balance;
    }

    get isActivated() {
        return this._person instanceof Person ? this._person : {};
    }

}