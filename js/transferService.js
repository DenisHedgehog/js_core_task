'use strict';

var transferService = (function () {

    function register(person, account, balance) {
        try {
            if (balance < 0) {
                throw Error
            }
            account.balance = balance;
            person.accounts = account;
            account.person = person;
            return account;
        } catch {
            console.log('Невозможно создать счёт с отрицательным балансом');
        }
    }

    function transfer(accountFrom, accountTo, sum) {

        try {
            if (!accountFrom.isActivated) {
                throw { type: 'not_active_account', message: `Счёт ${accountFrom.accountName} не активен` }
            }
            if (!accountTo.isActivated) {
                throw { type: 'not_active_account', message: `Счёт ${accountTo.accountName} не активен` }
            }
            if (accountFrom.balance < sum) {
                throw { type: 'balance_error', message: `Недостаточно средств на счёте ${accountFrom.accountName}` }
            }
            accountFrom.balance -= sum;
            accountTo.balance += sum;
            var date = new Date();
            var formatted_date = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            console.log(`${formatted_date}. Со счёта ${accountFrom.accountName} переведено ${sum} руб. на счёт ${accountTo.accountName}`);
        } catch (e) {
            console.log(e.message)
        }

    }

    function getPersonAccounts(person) {
        return person.accounts;
    }

    return {
        register: register,
        transfer: transfer,
        getPersonAccounts: getPersonAccounts
    }

})();
