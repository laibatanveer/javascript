// --------------------------------------------------TASK 01--------------------------------------------------------------
// Write a program that takes a character (number or string) in a variable & checks whether the given input is a  number, uppercase letter or lower case letter

// var character = prompt("Enter a character:");

// if (!isNaN(character)){
//     alert("The character is a number.");
// }
// else if (character>= "A" && character<="Z"){
//     alert("The character is an uppercase letter.");
// }
// else if (character>= "a" && character<="z"){
//     alert("The letter is a lowercase letter.");
// }
// else {
//     alert("ERROR");
// }

// --------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------TASK 02---------------------------------------------------------------
// Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// var integer1 = +prompt("Enter the first integer");
// var integer2 = +prompt("Enter the second integer");

// if(integer1 > integer2){
//     alert("The larger integer is " + integer1);
// }
// else if (integer2>integer1){
//     alert("The larger number is " + integer2);
// }
// else if (integer1 == integer2){
//     alert(integer1 +  " and " + integer2 + " are equal.");
// }

// ----------------------------------------------------------------------------------------------------------
// --------------------------------------TASK 03----------------------------------------------------

// Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var number = +prompt("Enter a number to check whether it is positive, negative or zero ");

// if (number < 0) {
//     alert("the number " + number + " is a negative number");
// }

// else if (number == 0) {
//     alert("the number you entered is zero.");
// }

// else if (number > 0) {
//     alert("the number " + number + " is a positive number");
// }

//-----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------TASK 04 --------------------------------------------------------------------
// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
 
// var character = prompt("Enter any character:");

// if (character == "a"  || character == "e"  || character == "i"  || character == "o"  || character == "u" ){
//     console.log(true);

// }

// else{
//     console.log(false);
// }
    
// ---------------------------------------------------------------------------------------------------------
// -------------------------------------TASK 05 -----------------------------------------------------------
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.

// var password = prompt("Enter your password:");
// var confirmPassword = prompt("Confirm pssword:");

// if (password == confirmPassword) {
//     alert("Correct! The password you entered matches the original password.");
// }
// else {
//     alert("Incorrect password.");
// }

// ----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------TASK 06------------------------------------------------
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;

// if (hour < 18 ){
//     greeting = "Good day.";
// }
// else{
//     greeting = "Good evening."
// }

// --------------------------------------------------------------------------------------------------------
// ---------------------------------------TASK 07 ---------------------------------------------------------
// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statement

// var time = +prompt("Enter the time in 24-hour clock format (e.g., 1900):");

// if (time>= 0000 && time<1200 ){
//     alert("Good morning!");
// }
// else if(time>= 1200 && time<1700){
//     alert("Godd afternoon!");
// }
// else if (time>= 1700 && time<2100 ){
//     alert("Godd evening!");
// }
// else if (time>= 2100 && time<= 2359){
//     alert("Good night!");
// }

// -----------------------------------------------------------------------------------------------------
