const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// function getworkinghours( parameter)
function GetWorkingHours(empCheck){
switch (empCheck) {
    case IS_ABSENT:  
       return 0; 
        break;
    case IS_PART_TIME:
        return PART_TIME_HOURS; 
        break;
    case IS_FULL_TIME: 
        return FULL_TIME_HOURS; 
        break;
    default:
        return  null; 
}
}

let empHrs = 0;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
// Array() constructor is used to create Array objects
let dailyWageArr = new Array();
//0<=20 && 0<= 160
while (totalEmpHrs <= MAX_WORKING_HOURS && totalWorkingDays <= MAX_WORKING_DAYS) {
    //totalworkng days = +1
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() *3);
    let dailyEmpHrs = GetWorkingHours(empCheck);
    if (totalEmpHrs + dailyEmpHrs <= MAX_WORKING_HOURS) {
        totalEmpHrs += dailyEmpHrs;
        //push() method adds new items to the end of an array.
        //Adding elements to an array
         dailyWageArr.push(dailyEmpHrs);
        } else {
        break;
    }
}

//print array
console.log(dailyWageArr);
//calculate total emp wage
let totalEmpWage = CalculateWage(totalEmpHrs);
console.log("Total Hours: " + totalEmpHrs + "\nTotal Wage: " + totalEmpWage);