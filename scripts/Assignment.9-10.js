// ---------------------------------------------TASK01 -------------------------------------------------------------------

// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var cityName = prompt("Enter your City:");
// if (cityName == "karachi"){
//     alert("Welcome to City of lights.")
// }

// -------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------TASK 02 --------------------------------------------------------------------------
// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Please enter your Gender:");

// if(gender=="male"){
//     alert("Good morning Sir!");
// }
// else (gender== "female")
// {
//     alert("Good morning Ma'am!");
// }

// --------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------TASK 03-------------------------------------------------------------------------
// Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

// var colorOfTrafficSignal = prompt("Enter the color of traffic signal light:");

// if (colorOfTrafficSignal== "red"){
//     alert("Message: MUST STOP");

// }
// else if (colorOfTrafficSignal== "yellow")
// {
//     alert("Message: READY TO MOVE");

// }
// else (colorOfTrafficSignal== "green")
// {
//     alert("Message: MOVE now");
// }


// ------------------------------------------------------------------------------------------------------------
// ------------------------------TASK 04----------------------------------------------------------------------
// Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,  show the message “Please refill the fuel in your car”

// var remainingFuelInCar = +prompt(" Enter remaining fuel in car (in litres):");

// if (remainingFuelInCar < 0.25){
//     alert("Please refill the fuel in your car");
// }

// --------------------------------------------------------------------------------------------------------
// ----------------------------------------------TASK 06 --------------------------------------------------

// Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: Show the total marks, marks obtained, percentage, grade & remarks

// var marksObtained = +prompt("Enter the marks obatined in three subjects:");
// var totalMarks = +prompt("Enter the total marks of the three subjects;");

// var percentage = (marksObtained / totalMarks) * 100;
// var grade;
// var remarks;

// if (percentage >= 80) {
//     grade = "A-ONE";
//     remarks = "Excellent";

// }

// else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";

// }

// else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";

// }

// else if (percentage >= 50) {
//     grade = "Fail";
//     remarks = "Sorry";

// }

// document.write("MARKSHEET" + "<br>")
// document.write("Total Marks:" + totalMarks + "<br>");
// document.write("Marks Obtained:" + marksObtained + "<br>");
// document.write("Percentage:" +Math.floor (percentage) + "%" + "<br>");
// document.write("Grade:" + grade + "<br>");
// document.write("Remarks:" + remarks + "<br>"); 
// ----------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------TASK 07--------------------------------------------------------------------
// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// alert("Guess the secret number");

// var secretNumber = 5;

// var guessIt = +prompt("Guess the secret number");

// if(guessIt == 5){
//     alert("Bingo! correct answer.");

// }
// else if(guessIt++)
// {
//     alert("Close enough to the correct answer");
// }

// else {
//     alert("Try again");}

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------TASK 08----------------------------------------------------------------

// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// alert(" Check whether a number is divisible by 3");
// var number = +prompt("Enter a number:");

// if (number % 3 ==0){
//     alert("The " + number + " is divisible by 3");
// }
// else{
//     alert("The " + number + " is not divisible by 3");
// }

// -----------------------------------------------------------------------------------------------------------
// ----------------------------------TASK 09 ----------------------------------------------------------------

// Write a program that checks whether the given input is an even number or an odd number.

// alert("CHECK WHETHER A NUMBER IS EVEN OR ODD");
// var number = +prompt("Enter a number:");

// if (number%2 == 0){
//     alert("The " + number + " is an even number.");
// }
// else{
//     alert("The " + number + " is an odd number.");
// }

// --------------------------------------------------------------------------------------------------------
// -----------------------------------TASK 10--------------------------------------------------------------

// Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “It is too hot outside.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// alert("WEATHER CHECK");
// var temperature = +prompt("Enter the temperature in digits");

// if (temperature>40){
//     alert("It is too hot outside.");

// }
// else if (temperature>30){
//     alert("It is too hot outside.");

// }

// else if (temperature>20){
//     alert("Today’s Weather is cool.");
// }

// else if (temperature>10){
//     alert("OMG! Today’s weather is so Cool.");

// }

// ---------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------TASK 11---------------------------------------------------------------------------

// . Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// alert("CALCULATOR");
// var firstNumber = +prompt("Enter the first number");
// var secondNumber = +prompt("Enter the second number");
// var operation = prompt("Enter the operation you want to perform");
// var result;

// if (operation == "+") {
//     result = firstNumber + secondNumber;
//     alert(result);
// }

// else if (operation == "-") {
//     result = firstNumber - secondNumber;
//     alert(result);
// }

// else if (operation == "*") {
//     result = firstNumber * secondNumber;
//     alert(result);
// }

// else if (operation == "/") {
//     result = firstNumber / secondNumber;
//     alert(result);
// }

// else if (operation == "%") {
//     result = firstNumber % secondNumber;
//     alert("Answer;" + result);
// }

// ----------------------------------------------------------------------------------------------------------------------------------------


