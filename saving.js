"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var fs = require("fs");
var prompt = promptSync();
console.log('SAVINGS INCOME GENERATOR PROGRAM');
console.log("");
function generatesavings() { }
var name = prompt('Enter your name: ');
console.log("Hi, ".concat(name));
var income = parseFloat(prompt('ENTER YOUR MONTHLY INCOME:'));
function savingsgenerator(income) {
    var necessitiesPercentage = 50;
    var wantsPercentage = 30;
    var savingsPercentage = 20;
    var necessities = income * (necessitiesPercentage / 100);
    var wants = income * (wantsPercentage / 100);
    var savings = income * (savingsPercentage / 100);
    return { necessities: necessities, wants: wants, savings: savings };
}
function displaysavings(savinginfo) {
    console.log("SAVINGS DETAILS");
    console.log("NECESSITIES : RS." + savinginfo.necessities.toFixed(2));
    console.log("WANTS : RS." + savinginfo.wants.toFixed(2));
    console.log("SAVINGS : RS." + savinginfo.savings.toFixed(2));
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
var annualInterestRate = parseFloat(prompt('Enter your Annual Interest Rate like [10%, 14%, 18%]: '));
var years = parseFloat(prompt('Enter the number of years you want to Invest : '));
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
var result = calculateSIPFutureValue(monthlyInvestment, annualInterestRate, years);
console.log("Total Investment: ".concat(result.totalInvestment.toFixed(2)));
console.log("Future Value: ".concat(result.futureValue.toFixed(2)));
var userData = "NAME : ".concat(name, "\nINCOME: ").concat(income.toFixed(2), "\nNECESSITIES: ").concat(savinginfo.necessities.toFixed(2), "\nWants: ").concat(savinginfo.wants.toFixed(2), "\nSavings: ").concat(savinginfo.savings.toFixed(2), "\nTotal Investment: ").concat(result.totalInvestment.toFixed(2), "\nFuture Value: ").concat(result.futureValue.toFixed(2), "\n\n");
try {
    fs.appendFileSync('savingsdta.txt', userData);
    console.log("User data has been stored successfully.");
}
catch (err) {
    console.error("Error writing user data to file:", err);
}
