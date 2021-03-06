'use strict';

let moneyPerMonth = +prompt("Ваш бюджет на месяц?", ""),
    timeData = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    moneyPerMonth: moneyPerMonth,
    timeData: timeData,
    expenses: {},
    optionalExpenses: {},
    savings: false,
    income: []
}

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
        i = 0;
        alert("Вы должны обязательно что-то ввести!");
    }
        
};

appData.moneyPerDay = moneyPerMonth/30; 

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

console.log(appData.expenses);










// console.log(appData.moneyPerMonth + " - " + appData.timeData + " - " + 
// appData.expenses.spentMonth1 + " - " + appData.expenses.spentMonth2);