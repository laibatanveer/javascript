// ------------------------------------------------TASK O1------------------------------------------------------------------
// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// var a = 10;

//     document.write("RESULT:" + "<br>");
//     document.write("The value of a is " + a + "<br>");
//     document.write("The value of ++a is " + (++a) + "<br>");
//     document.write("Now the value of a is " + a + "<br>");
//     document.write("The value of a++ is " + (a++) + "<br>");
//     document.write("Now the value of a is " + a + "<br>");
//     document.write("The value of --a is " + (--a) + "<br>");
//     document.write("Now the value of a is " + a + "<br>");
//     document.write("The value of a-- is " + (a--) + "<br>"); 
//     document.write("Now the value of a is " + a + "<br>");

// ------------------------------------------------------------------------------------------------------------------
// ----------------------------------------TASK 02-------------------------------------------------------------------

// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--

// var a = 2 , b = 1 ;
// var result = --a - --b + ++b + b--

// document.write("The value of --a is " + (--a) + "<br>");

// document.write("The value of --a - --b is " + (--a - --b) + "<br>");

// document.write("The value of --a - --b + ++b is " + ((--a - --b) + ++b ) + "<br>");

// document.write("The value of --a - --b + ++b + b-- is " + (--a - --b + ++b + b--) + "<br>")

// --------------------------------------------------------------------------------------------------------------
// ------------------------------------------------TASK 03--------------------------------------------------------
// Write a program that takes input a name from user & greet the user

// var userName = prompt("Please enter your name:");
// alert("Hello! " + userName + ", " + "Welcome to Pharmco.");

// ---------------------------------------------------------------------------------------------------------
// -----------------------------------------------------TASK 04---------------------------------------------

// Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default

// var num = +prompt("Please enter a number");

// if (isNaN(num)) {
//     num = 5;
// }

// document.write("The Multiplication table of " + num + "<br>");
// for (var i = 1; i <= 15; i++) {
//     var result = num * i;
//     document.write(num + " x " + i + " = " + result + "<br>");
// }

// --------------------------------------------------------------------------------------------------------------
// ----------------------------------------------TASK 05----------------------------------------------------------
// Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)

// var subject1 = prompt("Enter the name of first subject:");
// var subject2 = prompt("Enter the name of second subject:");
// var subject3 = prompt("Enter the name of third subject:");

// var totalMarksForEachSubject = 100;
// var marksObtainedOfSubject1 = +prompt("Enter the marks obtained in first subject:");
// var marksObtainedOfSubject2 = +prompt("Enter the marks obtained in second subject:");
// var marksObtainedOfSubject3 = +prompt("Enter the marks obtained in third subject:");

// var percentage1 = (marksObtainedOfSubject1/totalMarksForEachSubject) * 100 ; 
// var percentage2 = (marksObtainedOfSubject2/totalMarksForEachSubject) * 100 ; 
// var percentage3 = (marksObtainedOfSubject3/totalMarksForEachSubject) * 100 ; 

// var totalMarks = 300;
// var totalMarksObtained = marksObtainedOfSubject1 + marksObtainedOfSubject2 + marksObtainedOfSubject3 ;
// var percentage = (totalMarksObtained/totalMarks) * 100 ;

// // 
// var table = "<table>";
//         table += "<tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr>";

//         table += "<tr><td>" + subject1 + "</td><td>" + totalMarksForEachSubject + "</td><td>" + marksObtainedOfSubject1 + "</td><td>" + percentage1 + "%</td></tr>";
//         table += "<tr><td>" + subject2 + "</td><td>" + totalMarksForEachSubject + "</td><td>" + marksObtainedOfSubject2 + "</td><td>" + percentage2 + "%</td></tr>";
//         table += "<tr><td>" + subject3 + "</td><td>" + totalMarksForEachSubject + "</td><td>" + marksObtainedOfSubject3 + "</td><td>" + percentage3 + "%</td></tr>";
//         table += "<tr><td>" + "Grand total" + "</td><td>" + totalMarks + "</td><td>" + totalMarksObtained + "</td><td>" + percentage + "%</td></tr>";

//         table += "</table>";
        
//         document.body.innerHTML = table;

// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------TASK 06-----------------------------------------------------------------------

