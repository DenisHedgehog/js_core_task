'use strict';

class Person {
    constructor(name, birthDay) {
        // if(birthDay)
        this.name = name;
        this.birthDay = birthDay;
    }

    get accounts() {
        console.log(`kek ${this.account}`)
        return this._accounts;
    }

    set accounts(account) {
        if(this._accounts === undefined) {
            this._accounts = [];
        }
        if(account instanceof Account) {
            this._accounts.push(account);
        }
    }
}