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
            var d = new Date(date.getTime() - 3000000);
            var formatted_date = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
            console.log(`${formatted_date}. Со счёта ${accountFrom.accountName} переведено ${sum} руб. на счёт ${accountTo.accountName}`);
        } catch(e) {
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