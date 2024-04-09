
import * as  promptSync from 'prompt-sync';
import * as fs from 'fs';
const prompt = promptSync();
console.log("");

console.log('SAVINGS INCOME GENERATOR PROGRAM');
console.log("");
const name = prompt('Enter your name: ');
console.log(`Hi, ${name}`);

const income:number =parseFloat(prompt('ENTER YOUR MONTLY INCOME:'));

function savingsgenerator(income : number) :{necessities : number, wants : number, savings : number}{

const necessitiespercentage = 50;
const  wantspercentage =30;
const savingspercentage =20;

const necessities =(income*necessitiespercentage/100);
const wants =(income*wantspercentage/100);
const savings =(income*savingspercentage/100);

return {necessities,wants,savings};

}


function displaysavings(savinginfo:{necessities : number, wants : number, savings : number}){
console.log("SAVINGS DETAILS");
console.log("NECSSITIES :RS ." + savinginfo.necessities.toFixed(2));
console.log("WANTS : RS ." + savinginfo.wants.toFixed(2));
console.log("SAVINGS : RS ." + savinginfo.savings.toFixed(2));

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
interface SIPResult {
    totalInvestment: number;
    futureValue: number;
}

function calculateSIPFutureValue(monthlyInvestment: number, annualInterestRate: number, years: number): SIPResult {
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

const annualInterestRate = parseFloat(prompt('Enter your Annual Interest Rate like [10%,14%,18%]: '));

const years = parseFloat(prompt('Enter the years you want to Invest : '));

console.log(""); 
const result = calculateSIPFutureValue(monthlyInvestment, annualInterestRate, years);
//const result = calculateSIPFutureValue(savisavingsnginfo., annualInterestRate, years);
console.log(""); 

console.log(`Total Investment: ${result.totalInvestment.toFixed(2)}`);
console.log(`Future Value: ${result.futureValue.toFixed(2)}`);

const userData = {
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
const userDataString = JSON.stringify(userData, null, 2);
fs.writeFileSync('user_data.json', userDataString);
