"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var fs = require("fs");
var prompt = promptSync();
console.log("");
console.log('SAVINGS INCOME GENERATOR PROGRAM');
console.log("");
var name = prompt('Enter your name: ');
console.log("Hi, ".concat(name));
var income = parseFloat(prompt('ENTER YOUR MONTLY INCOME:'));
function savingsgenerator(income) {
    var necessitiespercentage = 50;
    var wantspercentage = 30;
    var savingspercentage = 20;
    var necessities = (income * necessitiespercentage / 100);
    var wants = (income * wantspercentage / 100);
    var savings = (income * savingspercentage / 100);
    return { necessities: necessities, wants: wants, savings: savings };
}
function displaysavings(savinginfo) {
    console.log("SAVINGS DETAILS");
    console.log("NECSSITIES :RS ." + savinginfo.necessities.toFixed(2));
    console.log("WANTS : RS ." + savinginfo.wants.toFixed(2));
    console.log("SAVINGS : RS ." + savinginfo.savings.toFixed(2));
}
var savinginfo = savingsgenerator(income);
displaysavings(savinginfo);
console.log("");
console.log("A SIP or Systematic Investment Plan is a type of investment that helps you save and grow your money over time. ");
console.log("Instead of investing a large sum of money all at once, with a SIP, you invest small amounts regularly.");
console.log("For example, rather than investing ₹6000 all at once, you invest ₹500 every month over a period of one year.");
console.log("");
console.log("HERE WE HAVE ASSUMED  10 YEARS AND 10%  OF INTEREST RATE IN SIP");
console.log("");
function calculateSIPFutureValue(monthlyInvestment, annualInterestRate, years) {
    var totalMonths = years * 12;
    var monthlyInterestRate = annualInterestRate / 12 / 100;
    var futureValue = 0;
    var totalInvestment = 0;
    for (var month = 1; month <= totalMonths; month++) {
        futureValue = (futureValue + monthlyInvestment) * (1 + monthlyInterestRate);
        totalInvestment += monthlyInvestment;
    }
    return { totalInvestment: totalInvestment, futureValue: futureValue };
}
var monthlyInvestment = savinginfo.savings;
var annualInterestRate = parseFloat(prompt('Enter your Annual Interest Rate like [10%,14%,18%]: '));
var years = parseFloat(prompt('Enter the years you want to Invest : '));
console.log("");
var result = calculateSIPFutureValue(monthlyInvestment, annualInterestRate, years);
//const result = calculateSIPFutureValue(savisavingsnginfo., annualInterestRate, years);
console.log("");
console.log("Total Investment: ".concat(result.totalInvestment.toFixed(2)));
console.log("Future Value: ".concat(result.futureValue.toFixed(2)));
var userData = {
    name: name,
    income: income,
    necessities: savinginfo.necessities,
    wants: savinginfo.wants,
    savings: savinginfo.savings,
    sip: {
        totalInvestment: result.totalInvestment.toFixed(2),
        futureValue: result.futureValue.toFixed(2)
    }
};
var userDataString = JSON.stringify(userData, null, 2);
fs.writeFileSync('user_data.json', userDataString);
