// ---------------------TASK 01 -----------------------------------

// Make a function that checks whether the current year is a leap year or not

// function leapYear(Year){

//     if(Year % 4 === 0){return"Leap year";}
//     else if (Year % 100 === 0){ return"not a leap year";}
//     else if (Year % 400 === 0){  return"Leap year";}
//     else { 
//         return"not a leap year";
//     }
// }
// alert("Check whether the year is a leap year or not!")
// var Year = prompt ("enter the year");
// var lpYr = leapYear(Year);
// alert("The year " + Year + " is " + lpYr + ".");
// console.log(lpYr);


// -------------------------------------------------TASK 02-------------------------------------------------------------
// Make a function that returns the leap years of upcoming next 10 years


// function lpYrofUpcoming10Yrs() {
//   var leapYears = []
//   var currentYear = new Date().getFullYear();

//   for (year = currentYear + 1; year <= currentYear + 10; year++) {
//     if (year % 4 == 0 && year % 100 !== 0 || year % 400 === 0) {
//       leapYears.push(year);
//     }
//   }
//   return leapYears;
// }
// console.log(lpYrofUpcoming10Yrs());

// ------------------------------------------------TASK 03----------------------------------------------------------------------
// Make a function to generate OTP

// function generateOtp(){
//   var otp = ""
//   for (i=0 ;i<5;i++){
//     otp += Math.floor(Math.random() * 10);
//   }
//   return Number(otp);
// }
// console.log(generateOtp());

// ------------------------------------------------TASK 04-------------------------------------------------------------------------
// Make a function that converts string into capital case

// function inToCaps() 
// {
//   var name = prompt("Enter your name")

//   return name.toUpperCase();
// }

// var capsName = inToCaps();
// console.log(capsName);
// alert("in caps: " + capsName);

// -------------------------------------------TASK 05 ------------------------------------------------------------
// Make a function that calculate your age

// function calAge(birthYear) {
//   var currentYear = new Date().getFullYear();
//   var age = currentYear - birthYear;
//   return age;
// }
// var birthYear = +prompt("Enter your birthyear");
// var age = calAge(birthYear);
// alert("Your age is " + age);
// console.log(age);

// ------------------------------------------------------------------------------------------------------------



