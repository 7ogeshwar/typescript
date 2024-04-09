import * as promptSync from 'prompt-sync';
import * as fs from 'fs';

const prompt = promptSync();
console.log('SAVINGS INCOME GENERATOR PROGRAM');
console.log("");
function generatesavings(){}
const name = prompt('Enter your name: ');
console.log(`Hi, ${name}`);

const income: number = parseFloat(prompt('ENTER YOUR MONTHLY INCOME:'));

function savingsgenerator(income: number): { necessities: number, wants: number, savings: number } {
    const necessitiesPercentage = 50;
    const wantsPercentage = 30;
    const savingsPercentage = 20;

    const necessities = income * (necessitiesPercentage / 100);
    const wants = income * (wantsPercentage / 100);
    const savings = income * (savingsPercentage / 100);

    return { necessities, wants, savings };
}

function displaysavings(savinginfo: { necessities: number, wants: number, savings: number }) {
    console.log("SAVINGS DETAILS");
    console.log("NECESSITIES : RS." + savinginfo.necessities.toFixed(2));
    console.log("WANTS : RS." + savinginfo.wants.toFixed(2));
    console.log("SAVINGS : RS." + savinginfo.savings.toFixed(2));
}

const savinginfo = savingsgenerator(income);
displaysavings(savinginfo);

console.log("");

console.log("A SIP or Systematic Investment Plan is a type of investment that helps you save and grow your money over time. ");
console.log("Instead of investing a large sum of money all at once, with a SIP, you invest small amounts regularly.");
console.log("For example, rather than investing ₹6000 all at once, you invest ₹500 every month over a period of one year.");

console.log("");
console.log("HERE WE HAVE ASSUMED  10 YEARS AND 10%  OF INTEREST RATE IN SIP");
console.log("");

const annualInterestRate = parseFloat(prompt('Enter your Annual Interest Rate like [10%, 14%, 18%]: '));
const years = parseFloat(prompt('Enter the number of years you want to Invest : '));

console.log("");

function calculateSIPFutureValue(monthlyInvestment: number, annualInterestRate: number, years: number): { totalInvestment: number, futureValue: number } {
    const totalMonths = years * 12;
    const monthlyInterestRate = annualInterestRate / 12 / 100;

    let futureValue = 0;
    let totalInvestment = 0;

    for (let month = 1; month <= totalMonths; month++) {
        futureValue = (futureValue + monthlyInvestment) * (1 + monthlyInterestRate);
        totalInvestment += monthlyInvestment;
    }

    return { totalInvestment, futureValue };
}

const monthlyInvestment = savinginfo.savings;
const result = calculateSIPFutureValue(monthlyInvestment, annualInterestRate, years);

console.log(`Total Investment: ${result.totalInvestment.toFixed(2)}`);
console.log(`Future Value: ${result.futureValue.toFixed(2)}`);


const userData = `NAME : ${name}\nINCOME: ${income.toFixed(2)}\nNECESSITIES: ${savinginfo.necessities.toFixed(2)}\nWants: ${savinginfo.wants.toFixed(2)}\nSavings: ${savinginfo.savings.toFixed(2)}\nTotal Investment: ${result.totalInvestment.toFixed(2)}\nFuture Value: ${result.futureValue.toFixed(2)}\n\n`;

try {
    
   fs.appendFileSync('savingsdta.txt',userData);
    console.log("User data has been stored successfully.");
} catch (err) {
    console.error("Error writing user data to file:", err);
}
