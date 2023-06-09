// -----------------------------------------------TASK 01 ---------------------------------------------
// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the numbeR.

// var number = +prompt("enter a positive integer:");

// document.write("The round off value of " +number + " : " + Math.round(number)   + "<br>");
// document.write("The floor value of " +number + " : " + Math.floor(number)   + "<br>");
// document.write("The ceil value of " +number + " : " + Math.ceil(number)   + "<br>");

// ----------------------------------------------------------------------------------------------------
// ------------------------------TASK 02-----------------------------------------------------------
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = +prompt("enter a  negative floating point number:");

// document.write("The round off value of " +number + " : " + Math.round(number)   + "<br>");
// document.write("The floor value of " +number + " : " + Math.floor(number)   + "<br>");
// document.write("The ceil value of " +number + " : " + Math.ceil(number)   + "<br>");

// -----------------------------------------------------------------------------------------------------
// ------------------------------TASK 03 --------------------------------------------------------------
// 3. Write a program that displays the absolute value of a number.E.g. absolute value of -4 is 4 & absolute value of 5 is 5//  var userInput = +prompt("Enter a number:");

//  document.write("The absolute value of the number " + userInput + " : " + Math.abs(userInput));

// --------------------------------------------------------------------------------------------------
// ------------------------TASK 04 -------------------------------------------------------------------
// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

// var ranDom = Math.random();
// var diceValue = Math.floor(((ranDom)*6)+1);

// document.write("The random dice value is " + diceValue);

// --------------------------------------------------------------------------------------------
// ----------------------------------TASK 05 --------------------------------------------------
// . Write a program that simulates a coin toss using random()method of JS Math class. Display the value of coin in yourbrowser

// var ranDom = Math.random();
// var coinValue = Math.floor(((ranDom)*2)+1);

// if (coinValue<=2) {
//     document.write( coinValue + "<br>"+ "The coin value is Heads");

// }
// else{
//     document.write( coinValue + "<br>"+ "The coin value is Tails");

// }

// -------------------------------------------------------------------------------------
// ---------------------------TASK 06 ---------------------------------------------------
// Write a program that shows a random number between 1 and 100 in your browser.

// var ranDom = Math.random();
// var floorValue = Math.floor(((ranDom)*100)+1);

// document.write("The random value between 1 and 100 : " + floorValue);

// ------------------------------------------------------------------------------------------
// ----------------------------------TASK 07-------------------------------------------------
// Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var userWeight = prompt("Enter your weight in kgs");
// var numericValue = parseFloat(userWeight.replace(/[^0-9.]/g, ""));

// document.write("The weight of the user is " + numericValue + "kgs");

// -----------------------------------------------------------------------------------------
// ----------------------------------TASK 08 -----------------------------------------------
// Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.


// alert("Guess the secret number");

// var secretNumber = Math.random();
// var value = Math.floor(((secretNumber)*10)+1);
// console.log(value)

// var guessIt = +prompt("Guess the secret number");

// if(guessIt ==value ){
//     alert("Bingo! correct answer.");

// }
// else if(guessIt==value++)
// {
//     alert("Close enough to the correct answer");
// }

// else {
//     alert("Try again");}

// ------------------------------------------------------------------------------------------
