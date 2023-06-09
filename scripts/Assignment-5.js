// --------------------------------------TASK 01---------------------------------------------------------

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// var num1 = +prompt("Enter your first number");
// var num2 = +prompt("Enter your second number");

// var sum = num1 + num2;

// var message = "The sum of " + num1 + " and " + num2 + " is " + sum;

// alert(message);

// ----------------------------------------------------------------------------------------------------------------------

// --------------------------------------------TASK 02--------------------------------------------------------------

//  Repeat task1 for subtraction, multiplication, division & modulus.

// {FOR SUBTRACTION}

// var num1 = +prompt("Enter your first number");
// var num2 = +prompt("Enter your second number");

// var subtract = num1 - num2;

// var message = "The difference of " + num1 + " and " + num2 + " is " + subtract;

// alert(message);

// {FOR MULTIPLICATION}

// var num1 = +prompt("Enter your first number");
// var num2 = +prompt("Enter your second number");

// var multiply = num1 * num2;

// var message = "The product of " + num1 + " and " + num2 + " is " + multiply;

// alert(message);

// {FOR DIVISION}

// var num1 = +prompt("Enter your first number");
// var num2 = +prompt("Enter your second number");

// var divide = num1 / num2;

// var message = "The quotient of " + num1 + " and " + num2 + " is " + divide;

// alert(message);

// {FOR MODULUS}

// var num1 = +prompt("Enter your first number");
// var num2 = +prompt("Enter your second number");

// var mod = num1 % num2;

// var message = "The modulus of " + num1 + " and " + num2 + " is " +  mod;

// alert(message);


// ----------------------------------------------------------------------------------------------------------------------------

// -----------------------------------TASK 03----------------------------------------------------------------------------------

// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.

// [DECLARE VARIABLE]
//  var myVariable;

//  // [Show the value of the variable in your browser like “Value after variable declaration is: ??”.]
//  document.write("Value after variable declaration is: " + myVariable + "<br>");

//  // [ Initialize the variable with some number.]
//  myVariable = 5; 

//  // [ Show the value of the variable in your browser like “Initial value:5 ”.]
//  document.write("Initial value: " + myVariable + "<br>");

//  // [Increment the variable.]
//  myVariable++;

//  // [Show the value of variable in your browser like “Value after increment is: 6”.]
//  document.write("Value after increment is: " + myVariable + "<br>");

//  // [ Add 7 to the variable.]
//  myVariable += 7;

//  // [Show the value of variable in your browser like “Value after addition is: 13”.]
//  document.write("Value after addition is: " + myVariable + "<br>");

//  // [ Decrement the variable]
//  myVariable--;

//  // [Show the value of variable in your browser like “Value after decrement is: 12”]
//  document.write("Value after decrement is: " + myVariable + "<br>");

//  // [Show the remainder after dividing the variable’s value by 3.]
//  var remainder = myVariable % 3;

//  // [Output : “The remainder is : 0”.]
//  document.write("The remainder is: " + remainder + "<br>");

// --------------------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------TASK 04----------------------------------------------------------------------------------

// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. 

// var cost = 600 ; 
// var multiply = cost * 5 ;
// document.write("Total cost of buying 5 tickets to a movie is "+ multiply);

// -------------------------------------------------------------------------------------------------------------------

// -------------------------------------------TAASK 05---------------------------------------------------------------

// Write a script to display multiplication table of any number in your browser.

// var num = +prompt("enter a number");

// document.write("The Multiplication table of " + num + "<br>");

// for (var i = 1; i <= 15; i++) {
//     var result = num * i;
//     document.write(num + " x " + i + " = " + result + "<br>");
// }

// -----------------------------------------------------------------------------------------------------------------
// ------------------------------------------TASK 06----------------------------------------------------

// The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// [CELSIUS TO FARENHEIT]

// var tempC = +prompt("Enter the temperature in Celsius");
// var convertToF = (tempC * (9/5)) + 32;
// var message1 = tempC + " in celsius is equals to " + convertToF + " in ferenheit."; 
// alert(message1);

// [FARENHEIT TO CELSIUS]

// var tempF = +prompt("Enter the temperature in Celsius");
// var convertToC = (tempF - 32) * (5/9);
// var message2 = tempF + " in FARENHEIT is equals to " + convertToC + " in CELSIUS."; 
// alert(message2);

// ------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------TASK 07 -----------------------------------------------------------------

// Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// var price1 = 639;
// var price2 = 240;
// var quant1 = 3;
// var quant2 = 2;
// var ShippingCharges = 226;

// var totalCost = (price1 * quant1) + (price2 * quant2) + ShippingCharges;

// document.write("RECEIPT" + "<br>");
// document.write("Price of item 1: " + price1 + "<br>");
// document.write("Price of item 2: "+ price2 + "<br>");
// document.write("Ordered quantitiy of item 1: " + quant1 + "<br>");
// document.write("Ordered quantitiy of item 2: " + quant2 + "<br>");
// document.write("Shipping Charges: " +ShippingCharges + "<br>");
// document.write("Total cost: " + totalCost);

// --------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------TASK 08---------------------------------------------------

// Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// var totalMarks = 850;
// var marksObtained = 789;
// var percentage = (marksObtained/totalMarks) * 100 ; 

// document.write("MARKSHEET" +"<br>");
// document.write("Total Marks: " + totalMarks +"<br>");
// document.write("Marks obtained: " + marksObtained +"<br>");
// document.write("Percentage: " + Math.floor(percentage) + "%");

// --------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------TASK 09 -----------------------------------------------------------------------

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.

// var dollars = 10;
// var riyals = 25;
// var totalPkr = (dollars * 104.80) + (riyals * 28);

// document.write("Total currency in PKR: " + totalPkr);

// -----------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------TASK 10 ----------------------------------------------------------------

// Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2 
// Perform all calculations in a single expression

// var myVariable = 89;
// var result = ((myVariable + 5) * 10) / 2;
// console.log(result);

// -------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------TASK 11-------------------------------------------------------------
// The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”

// var currentYear = new Date().getFullYear();
// var birthYear = +prompt("Enter your birth year:")
// var age = currentYear - birthYear;

// document.write("AGE CALCULATOR" + "<br>");
// document.write("Current year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age: " + age);

// -----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------TASK 12 ------------------------------------------------------------

// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142

// var radius = +prompt("Enter the radius of a circle in cms:");
// var circumference = (radius * 3.142) * 2;
// var area = (radius**2) * 3.142 ; 

// document.write("THE GEOMETRIZER" + "<br>");
// document.write("Radius: " + radius + "<br>");
// document.write("Circumference of the circle: " + circumference + "<br>");
// document.write("Area of the circle: " + area);

// ---------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------TASK 13------------------------------------------------------------

// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.

// var favSnack = "CHEETOS";
// var currentAge = 20 ;
// var maxAge = 68 ; 
// var estAmnt = 2;

// var yrsRemaining = maxAge - currentAge;
// var remainingDays = yrsRemaining * 365;
// var totalAmnt = remainingDays * estAmnt;

// document.write("Favourite Snack: " + favSnack + "<br>");
// document.write("Current age: " + currentAge + "<br>");
// document.write("Estimated maximum age: " + maxAge + "<br>");
// document.write("Amount of snacks per day: " + estAmnt + "<br>");
// document.write("You will need " + totalAmnt +" cheetos to last you untill the ripe old age of " + maxAge);

// ------------------------------------------------------------------------------------------------------------
// 
