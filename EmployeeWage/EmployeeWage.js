const RATE = 20;
const Fixed_hrs = 8;
const Part_Time_Fixed_hrs = 4;
let absent = 0;
let present = 0;
let partTime = 0;

/**
 * @purpose -> Repeat UC 7 of Employee Wage Problem to use Objects Helper Function and Arrow Functions 
 *          to perform following operations 
 *          a. Calc total Wage
 *          b. Show the Day along with Daily Wage using Map helper function 
 *          c. Show Days when Full time wage of 160
 *          d. Find the first occurrence when Full Time Wage was earned
 *          e. Check if Every Element of Full Time Wage is truly holding Full time wage
 *          f. Check if there is any Part Time Wage 
 *          g. Find the number of days the Employee Worked
 * 
 * @param {*} Array 
 * @param {*} arr 
 * @param {*} arrNew 
 * @returns 
 */

function calculateTotalWage(Array, arr, arrNew) {

    const prompt = require("prompt-sync")();
    const days = prompt("Enter the number of days");
    for (let i = 1; i <= days; i++) {
        const randomNumber = Math.floor(Math.random() * 10 % 3);
        switch (randomNumber) {
            case 0:
                arr.push(i);
                absent++;
                break;
            case 1:
                if ((randomNumber * Fixed_hrs * RATE) == (1 * Fixed_hrs * RATE)) {
                    Array.push(i);
                    present++;
                }
                break;
            case 2:
                arrNew.push(i);
                partTime++;
                break;
            default:
                break;
        }
    }
    let totalWageForPresentDays = Fixed_hrs * RATE * present;
    let totalWageForPartTimeDays = Fixed_hrs * RATE * partTime;
    let totalWageForAbsentDays = Fixed_hrs * RATE * absent;

    let dailyWage = [];
    let dailywagePartTime = [];
    let dailywagelose = [];

    Array.forEach((element => { if ((element != -Infinity) == true) return dailyWage.push(1 * RATE * Fixed_hrs) }));
    Array.forEach((element => { if ((element != -Infinity) == true) return dailywagePartTime.push(1 * RATE * Part_Time_Fixed_hrs) }));
    Array.forEach((element => { if ((element != -Infinity) == true) return dailywagelose.push(1 * RATE * Fixed_hrs) }));

    console.log("\nPresent days are -> [" + Array + "]\nDaily Wage -> (" + dailyWage + ")\nTotal Wage -> ( ₹ " + totalWageForPresentDays + " )\n\nPartTime day -> [" + arrNew + "]\nPartTime Daily Wage -> (" + dailywagePartTime + ")\nPartTime Total Wage -> ( ₹ " + totalWageForPartTimeDays + " )" + "\n\nAbsent days ->  [" + arr + "] \nDaily Wage lose -> ( " + dailywagelose + " )\nTotal wage lose -> ( ₹ " + totalWageForAbsentDays + " )\n");

    return [
        [Array, dailyWage, totalWageForPresentDays],
        [arrNew, dailywagePartTime, totalWageForPartTimeDays],
        [arr, dailywagelose, totalWageForAbsentDays]
    ];
}

// -----------------------------------------------------main running------------------------------------------------------------------
let arrayOfPresentDay = new Array();
let arrayOfabsentDay = new Array();
let arrayOfPartTime = new Array();
console.log((calculateTotalWage(arrayOfPresentDay, arrayOfabsentDay, arrayOfPartTime)));