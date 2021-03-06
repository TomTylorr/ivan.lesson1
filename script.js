let moneyPerMonth = +prompt("Ваш бюджет на месяц?", "");
let timeData = prompt("Введите дату в формате YYYY-MM-DD", '');
let spentMonth1 = prompt("Введите обязательную статью расходов в этом месяце", '');
let howMuch1 = +prompt("Во сколько обойдется?", '');
let spentMonth2 = prompt("Введите обязательную статью расходов в этом месяце", '');
let howMuch2 = +prompt("Во сколько обойдется?", '');

let savings = false;

let appData = new Object ();
let optionalExpenses = {};
let income = [];

appData = {
    moneyPerMonth: moneyPerMonth,
    timeData: timeData,
    expenses: {
        spentMonth1: howMuch2,
        spentMonth2: howMuch2

    }

}

alert("Ваш бюджет на 1 день: " + moneyPerMonth/30 + " рубль!");



// console.log(appData.moneyPerMonth + " - " + appData.timeData + " - " + 
// appData.expenses.spentMonth1 + " - " + appData.expenses.spentMonth2);