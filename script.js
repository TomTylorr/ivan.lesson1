'use strict';
let moneyPerMonth, timeData;

function start() {
    moneyPerMonth = +prompt("Ваш бюджет на месяц?", "");
    
    while (isNaN(moneyPerMonth) || moneyPerMonth == "" || moneyPerMonth == null) {
        moneyPerMonth = +prompt("Ваш бюджет на месяц?", "");
    }

    timeData = prompt("Введите дату в формате YYYY-MM-DD", '');
}

start();

let appData = {
    moneyPerMonth: moneyPerMonth,
    timeData: timeData,
    expenses: {},
    optionalExpenses: {},
    savings: true,
    income: []
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {

        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),   
            b = prompt("Во сколько обойдется?", ''),
            c = a + i;
        
        if ( (typeof(a)) === 'string' && (typeof(a)) != null
         && (typeof(b)) === 'string' && (typeof(b)) != null
         && a != "" && b != "" && a.length < 50) {
            console.log('done');
            appData.expenses[c] = b;
    
        } else {
            i = i -1;
            alert("Вы должны обязательно что-то ввести!");
        }
            
    };
}

chooseExpenses();

appData.moneyPerDay = (moneyPerMonth/30).toFixed(2); 

alert("Ваш бюджет на 1 день: " + appData.moneyPerDay + " рублей!");

if (appData.moneyPerMonth < 350) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerMonth > 350 && appData.moneyPerMonth < 1000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerMonth > 1000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

// console.log(appData.expenses);
// console.log(1/0);
// console.log(typeof(''));
// console.log(appData.moneyPerMonth + " - " + appData.timeData + " - " + 
// appData.expenses.spentMonth1 + " - " + appData.expenses.spentMonth2);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt("Под какой процент?");

        appData.monthIcome = save/100/12*percent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIcome);
    }
}

checkSavings();







