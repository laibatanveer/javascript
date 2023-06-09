// ------------------------------------------TASK 01 --------------------------------------------------------------------------
// Write a custom function power ( a, b ), to calculate the value of a raised to b.

// var base = +prompt("Enter the base value");
// var exponent = +prompt("Enter the exponent value");

// function power(a, b) {
//     var result = a ** b;
//     return result;
// }

// document.write(base + " raised to " + exponent + " :" + power(base, exponent));

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------TASK 02----------------------------------------------------------------------
// Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

// alert("Check whether the year is a leap year or not!")
// var Year = prompt ("enter the year");

// function leapYear(Year){

//         if(Year % 4 === 0){return"Leap year";}
//         else if (Year % 100 === 0){ return"not a leap year";}
//         else if (Year % 400 === 0){  return"Leap year";}
//         else { 
//             return"not a leap year";
//         }
//     }
  
//     var lpYr = leapYear(Year);
//     document.write("The year " + Year + " is " + lpYr + ".");
    
// --------------------------------------------------------------------------------------------------------------
// ------------------------------------------TASK 03-------------------------------------------------------------
// If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2. Calculate area of triangle using 2 functions

// var a = 53;
// var b = 34;
// var c = 21;

// function calculateS(a, b, c) {
//   var value = (a + b + c) / 2;
//   return value;
// }

// function calculateArea(a, b, c) {
//   var s = calculateS(a, b, c);
//   var area = (s * (s - a) * (s - b) * (s - c));
//   return area;
// }

// var triangleArea = calculateArea(a, b, c);

// document.write("Area of the triangle: " + triangleArea);

// --------------------------------------------------------------------------------------------------------------------
// ----------------------------------TASK 04 --------------------------------------------------------------------------
// Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.

// function calculateAverage(marks1, marks2, marks3) {
//     var average = (marks1 + marks2 + marks3) / 3;
//     return average;
//   }
  
//   function calculatePercentage(marks1, marks2, marks3, totalMarks) {
//     var totalMarksObtained = marks1 + marks2 + marks3;
//     var percentage = (totalMarksObtained / totalMarks) * 100;
//     return percentage;
//   }
  
//   function mainFunction() {
//     var subject1 = prompt("Enter the name of the first subject:");
//     var subject2 = prompt("Enter the name of the second subject:");
//     var subject3 = prompt("Enter the name of the third subject:");
    
//     var totalMarksForEachSubject = 100;
//     var marksObtainedOfSubject1 = +prompt("Enter the marks obtained in the first subject:");
//     var marksObtainedOfSubject2 = +prompt("Enter the marks obtained in the second subject:");
//     var marksObtainedOfSubject3 = +prompt("Enter the marks obtained in the third subject:");
    
//     var totalMarks = 300;
//     var average = calculateAverage(marksObtainedOfSubject1, marksObtainedOfSubject2, marksObtainedOfSubject3);
//     var percentage = calculatePercentage(marksObtainedOfSubject1, marksObtainedOfSubject2, marksObtainedOfSubject3, totalMarks);
    
//     document.write("Subject 1: " + subject1);
//     document.write("Subject 2: " + subject2);
//     document.write("Subject 3: " + subject3);
//     document.write("Average: " + average);
//     document.write("Percentage: " + percentage + "%");
//   }
  
//   mainFunction();

// ------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------TASK 05-------------------------------------------------------------
//  You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.


// var word = prompt("Enter a word");
// var letter = prompt("Enter a letter to find its index:");

// function indexOfUsage(){

// var index = word.indexOf(letter);
// return index;
// }

// document.write("The index of " +letter + " in the " + word +" :" + indexOfUsage());

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------TASK 06 ---------------------------------------------------------------------------------
// Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

// function removeVowels (string){
//     var vowels =/[aeiou]/gi;
//     var lowercaseText = string.toLowerCase();
//     var result = lowercaseText.replace(vowels,"");
//     return result;

// }

// var string = prompt("Enter a sentence:");

// document.write("Sentence: " + string + "<br>");
// document.write("Modified sentence: "+ removeVowels(string));
  
// --------------------------------------------------------------------------------------------------------
// -------------------------------------------------TASK 07------------------------------------------------
// Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence “Please read this application and give me gratuity” Such occurrences are ea, ea, ui

// function countSuccessiveVowels(text) {
//     var count = 0;
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
    
//     for (let i = 0; i < text.length - 1; i++) {
//       var currentChar = text[i].toLowerCase();
//       var nextChar = text[i + 1].toLowerCase();
      
//       switch (currentChar) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           if (vowels.includes(nextChar)) {
//             count++;
//           }
//           break;
//         default:
//           break;
//       }
//     }
    
//     return count;
//   }
  
  
//   var text = "Please read this application and give me gratuity";
//   var occurrence = countSuccessiveVowels(text);
//   console.log("Number of occurrences:", occurrence);
  
// --------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------TASK 08-------------------------------------------------------------------------
// The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.

// function convertToMeters(distanceInKm) {
//     return distanceInKm * 1000;
//   }
  
//   function convertToFeet(distanceInKm) {
//     return distanceInKm * 3280.84;
//   }
  
//   function convertToInches(distanceInKm) {
//     return distanceInKm * 39370.1;
//   }
  
//   function convertToCentimeters(distanceInKm) {
//     return distanceInKm * 100000;
//   }
  
//   function convertAndPrintDistances() {
//     var distanceInKm = +prompt("Enter the distance in kms:");
    
//     var distanceInMeters = convertToMeters(distanceInKm);
//     var distanceInFeet = convertToFeet(distanceInKm);
//     var distanceInInches = convertToInches(distanceInKm);
//     var distanceInCentimeters = convertToCentimeters(distanceInKm);
    
//     document.write("Distance in meters:", Math.round(distanceInMeters) + "<br><br>");
//     document.write("Distance in feet:", Math.round(distanceInFeet) + "<br><br>");
//     document.write("Distance in inches:", Math.round(distanceInInches) + "<br><br>");
//     document.write("Distance in centimeters:", Math.round(distanceInCentimeters));
//   }
  
//   convertAndPrintDistances();

// --------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------TASK 09 --------------------------------------------------------------------------------
// Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.

// function calculateOvertimePay(hoursWorked) {
//     var regularHours = 40;
//     var overtimeRate = 12;
//     var overtimeHours = 0;
//     var overtimePay = 0;
  
//     if (hoursWorked > regularHours) {
//       overtimeHours = hoursWorked - regularHours;
//       overtimePay = overtimeHours * overtimeRate;
//     }
  
//     return overtimePay;
//   }
  
//   var hoursWorked = 48;
//   var overtimePay = calculateOvertimePay(hoursWorked);
//   document.write("Overtime Pay: Rs.", overtimePay);

// -----------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------TASK 10 ------------------------------------------------------------------------
// A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

// function calculateCurrencyNotes(amountInHundreds) {
//     var totalAmount = amountInHundreds * 100;
//     var notesOf100 = Math.floor(totalAmount / 100);

//     var remainderAfter100 = totalAmount % 100;
//     var notesOf50 = Math.floor(remainderAfter100 / 50);

//     var remainderAfter50 = remainderAfter100 % 50;
//     var notesOf10 = Math.floor(remainderAfter50 / 10);
  
//     return {
//       notesOf100: notesOf100,
//       notesOf50: notesOf50,
//       notesOf10: notesOf10
//     };
//   }

//   var amountInHundreds = +prompt("Enter the amount to be withdrawn in hundreds:");
//   var result = calculateCurrencyNotes(amountInHundreds);
  
//   document.write("Number of 100 notes:", result.notesOf100 + "<br>");
//   document.write("Number of 50 notes:", result.notesOf50 + "<br>");
//   document.write("Number of 10 notes:", result.notesOf10 );

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------


  
  