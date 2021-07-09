//constants
const PART_TIME = 4;
const FULL_TIME = 8;
const WAGE_PER_HR = 20;
const FULL_TIME_WORK = 1;
const HALF_TIME_WORK = 2;
//variables
let empWage , workingHours =0;
let workingDays = 30;

while (workingDays != 0){
    let empCheck = Math.floor(Math.random() * 3 );
    workingHours += GetHours(empCheck);
    workingDays--;
}
empWage = workingHours * WAGE_PER_HR;
console.log("Employee Wage: " + empWage);
//function to get emphours
 function GetHours(empCheck){
    switch(empCheck){
        case FULL_TIME_work:
            //employee is present and full time
            return  FULL_TIME;
        case HALF_TIME_WORK:
            //employee is present and part-time
            return PART_TIME;   
        default:
            //employee is absent
            return 0;
    }
}
