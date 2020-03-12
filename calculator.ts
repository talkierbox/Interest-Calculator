// Make a class for calculating simple/compound interest
export class Calculator {
    private range(start: number, end: number): number[] {
        return Array(end - start + 1).fill().map((_, idx) => start + idx); // Still works, ignore the error
    }
    calculateCompoundInterest(baseAmount: number, rate: number, years: number): number{
        let currentAmount = (baseAmount * (Math.pow((1 + rate), years)) -1);
        return Math.floor(currentAmount);
    }
    calculateSimpleInterest(baseAmount: number, rate: number, years: number): number{
        let currentAmount = baseAmount * (1 + (rate * years))
        return Math.floor(currentAmount);
    }
    calculateMassCompoundInterest(startRange: number, endRange: number, baseAmount: number, rate: number): Map<number, number>{
        let rangeOfNums = this.range(startRange, endRange);
        let answerMap = new Map();
        for(let i = 0; i < rangeOfNums.length; i++){
            let interestNum = this.calculateCompoundInterest(baseAmount, rate, rangeOfNums[i]);
            answerMap.set(rangeOfNums[i], interestNum);
            if(rangeOfNums.length - 1 == i|| i >= rangeOfNums.length) return answerMap;
        }
    }
    calculateMassSimpleInterest(startRange: number, endRange: number, baseAmount: number, rate: number): Map<number, number>{
        let rangeOfNums = this.range(startRange, endRange);
        let answerMap = new Map();
        for(let i = 0; i < rangeOfNums.length; i++){
            let interestNum = this.calculateSimpleInterest(baseAmount, rate, rangeOfNums[i]);
            answerMap.set(rangeOfNums[i], interestNum);
            if(rangeOfNums.length - 1 == i|| i >= rangeOfNums.length) return answerMap;
        }
    }
}


/*
// Use the calculator
let interestCalculator: Calculator = new Calculator();

let baseAmount: number = 500; // Base amount in $$$
let rate: number = 0.0325; // 3.25% becomes 0.0325
let yearsToCalculate: number[] = [2, 4, 15, 20, 50, 65];

for(var i = 0; i < yearsToCalculate.length; i++){
    console.log(`Question ${i + 1} (YEAR: ${yearsToCalculate[i]}):\nSIMPLE INTEREST: ${interestCalculator.calculateSimpleInterest(baseAmount, rate, yearsToCalculate[i])}\nCOMPOUND INTEREST: ${interestCalculator.calculateCompoundInterest(baseAmount, rate, yearsToCalculate[i])}\n-------------------------\n`)
}
*/