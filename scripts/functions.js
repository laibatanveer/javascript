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

function calculator (){
alert("CALCULATOR");
var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");
var operator = prompt("Enter the operation you want to perform");
var result;

if (operator == "+") {
    result = firstNumber + secondNumber;
    return result;
}

else if (operator == "-") {
    result = firstNumber - secondNumber;
    return(result);
}

else if (operator == "*") {
    result = firstNumber * secondNumber;
    return(result);
}

else if (operator == "/") {
    result = firstNumber / secondNumber;
    return(result);
}

else if (operator == "%") {
    result = firstNumber % secondNumber;
    return("Answer;" + result);
}
}
 document.write(calculator());