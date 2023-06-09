// --------------------------------------------------TASK 01--------------------------------------------------------------------
// Write a function that displays current date & time in your browser.

// function dateAndTime() {

//     var currentDate = new Date();
//     return "DATE AND TIME:<br>" + currentDate;

// }
// document.write(dateAndTime());

// -----------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------TASK 02-------------------------------------------------------------------------
// Write a function that takes first & last name and then it greets the user using his full name.

// function greet() {
//     var firstName= prompt("Enter your first name:");
//     var lastName= prompt("Enter your last name:");
//     return ("Greetings, " +firstName+" "+ lastName + "!");

// }
// alert(greet());


// ---------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------TASK 03-------------------------------------------------------------------------
// Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function addition() {
//     var firstNum = +prompt("Enter the first number:");
//     var secondNum = +prompt("Enter the second number:");
//     var sum = firstNum + secondNum;
//     return "The sum of " +firstNum + " and " + secondNum + " is " + sum;
// }

// alert(addition());

// ---------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------TASK 04-------------------------------------------------------------------------
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calculator() {
//     alert("CALCULATOR");
//     var num1 = +prompt("Enter the first number");
//     var num2 = +prompt("Enter the second number");
//     var operator = prompt("Enter the operation you want to perform");
//     var result;

//     if (operator == "+") {
//         result = num1 + num2;
//     } else if (operator == "-") {
//         result = num1 - num2;
//     } else if (operator == "*") {
//         result = num1 * num2;
//     } else if (operator == "/") {
//         result = num1 / num2;
//     } else if (operator == "%") {
//         result = num1 % num2;
//     }

//     return "Answer: " + result;
// }

// document.write(calculator());

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------TASK 05----------------------------------------------------------------------
// Write a function that squares its argument.

// function squaredNum() {
//     var input = +prompt("Enter a number:");
//     var square = input*input;
//     return square;

// }
// document.write(squaredNum());

// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------TASK 06 ---------------------------------------------------------------
// Write a function that computes factorial of a number.

// var inputNumber = +prompt("Enter a number:");

// function factorial(number) {
//     if (number === 0 || number === 1) {
//       return 1;
//     } else {
//       return number * factorial(number - 1);
//     }
//   }

//   var result = factorial(inputNumber);
//   document.write("Factorial of " + inputNumber + " is: " + result);

// -----------------------------------------------------------------------------------------------------------
// ------------------------------------TASK 07---------------------------------------------------------------
// Write a function that take start and end number as inputs & display counting in your browser.

// var startNum = +prompt("Enter the starting number:");
// var endNum = +prompt("Enter the ending number:");

// function displayCounting(startNum, endNum) {
//   var counting = "<br>";

//   if (startNum <= endNum) {
//     for (var i = startNum; i <= endNum; i++) {
//       counting += i + "<br> ";      
//     }
//   } 
//   document.write("Counting: " + counting);
// }

// displayCounting(startNum, endNum);

// -----------------------------------------------------------------------------------------------------------
// ------------------------------------TASK 08---------------------------------------------------------------
// Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2



// function hypotenuse() {

//     function square (number){
//         return number*number;
//         }


//     var base = +prompt("Enter the value of the base:");
//     var Perpendicular = +prompt("Enter the value of perpendicular:");

//     var squareOfBase = square(base);
//     var squareOfPerpendicular = square(Perpendicular);

//     var hypotenuseSquared = squareOfBase + squareOfPerpendicular;

//     var hypotenuse =Math.sqrt(hypotenuseSquared);

//     var result = Math.round(hypotenuse);

//     return result;

// }

// document.write("Hypotenuse of this right angled triangle: " + hypotenuse());

// -----------------------------------------------------------------------------------------------------------
// ------------------------------------TASK 09---------------------------------------------------------------
// Write a function that calculates the area of a rectangle.  A = width * height, Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function areaWheNArgumentIsAsValue(){
//     var width= +prompt("Enter the width of rectangle:");
//     var height = +prompt("Enter the height of rectangle:");

//     var area = width*height;

//     return "The area of the rectanlge is " + area;

// }
// document.write(areaWheNArgumentIsAsValue());

// function areaWheNArgumentIsAsVariable(width, height){
//     var area = width*height;
//     return "The area of the rectanlge is " + area;
// }
// document.write(areaWheNArgumentIsAsVariable(63,54));

// ---------------------------------------------------------------------------------------------------------
// ------------------------------------TASK 10 -------------------------------------------------------------
// Write a JavaScript function that checks whether a passed string is palindrome or not?A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam

// function isPalindrome(str) {

//     var removeNonAlphanumerics = str.replace(/[^a-zA-Z0-9]/, "").toLowerCase();


//     var reversedString = removeNonAlphanumerics.split("").reverse().join("");

//     return removeNonAlphanumerics === reversedString;
//   }

//   var inputString = prompt("Enter a word to check whether it is a palindrome or not:");
//   var result = isPalindrome(inputString);

//   if (result) {

//     document.write("'" + inputString + "' is a palindrome.");
//   } else {

//     document.write("'" + inputString + "' is not a palindrome.");
//   }

// -------------------------------------------------------------------------------------------------------
// ---------------------------------------TASK 11 ----------------------------------------------------------
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. EXAMPLE STRING : 'the quick brown fox'EXPECTED OUTPUT : 'The Quick Brown Fox'

// function capitalize (input){

//     var firstLetter = input.slice(0,1);
//     var upperCase = firstLetter.toUpperCase();
//     var fullName = upperCase + input.slice(1);
// return fullName;
// }
// var input = prompt("Enter your name:");

// document.write(capitalize(input));

// -------------------------------------------------------------------------------------------------------
// ---------------------------------TASK 12---------------------------------------------------------------
// Write a JavaScript function that accepts var words = str.split(' '); a string as a parameter and find the longest word within the string. EXAMPLE STRING : 'Web Development Tutorial'EXPECTED OUTPUT : 'Development'

// function longestWord(string) {

//     var words = string.split(" ");
//     var sortingInDescendingOrder = words.sort(function (a, b) {
//         return b.length - a.length;
//     })

//     return sortingInDescendingOrder[0];

// }
// var stringInput = prompt("Enter a string:");
// document.write("Input: " + stringInput+ "<br><br>");
// document.write("The longest word in the given sentence: "+ longestWord(stringInput));

// -----------------------------------------------------------------------------------------------------
// --------------------------------TASK 13---------------------------------------------------------------
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'

// function countTheOccurence() {

//     var string = prompt("Enter a sentence");
//     var letter = prompt("Enter the letter whose occurence you wanna count");
//     var count = 0;

//     var lowercaseText = string.toLowerCase();


//     for (var i = 0; i < lowercaseText.length; i++) {
//         if (lowercaseText.charAt(i) === letter) {
//             count++;
//         }
//     }

//     document.write("Text: " + string + "<br>");
//     document.write("Number of occurrences of '" + letter + "': " + count);

// }
// countTheOccurence();

// ----------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------TASK 14------------------------------------------------------------------------------------
// The Geometrizer
// Create 2 functions that calculate properties of a circle, using  the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area // is NN

// var radius = +prompt("Enter the radius of a circle in cms:");

// function calcCircumference (){

//     var circumference = (radius * 3.142) * 2;
//     return circumference;

// }

// function calcArea (){

//     var area = (radius**2) * 3.142 ; 
// return area;
// }

// document.write("THE GEOMETRIZER" + "<br>");
// document.write("Radius: " + radius + "<br>");
// document.write("Circumference of the circle: " + calcCircumference() + "<br>");
// document.write("Area of the circle: " + calcArea());

// --------------------------------------------------------------------------------------------------------------------------------------------