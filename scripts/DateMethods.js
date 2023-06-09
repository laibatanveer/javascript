// --------------------------------------TASK 01-----------------------------------------------------------------------
// Write a program that displays current date and time in your browser.

// var currentDateAndTime = new Date();

// document.write("CURRENT DATE & TIME: "+"<br>"+ currentDateAndTime);

// ---------------------------------------------------------------------------------------------------------------------
//----------------------------------------TASK 02---------------------------------------------------------------------
// Write a program that alerts the current month in words.

// var currentDate = new Date();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = monthNames[currentDate.getMonth()];

// document.write("Current Month: " + currentMonth);

// ---------------------------------------------------------------------------------------------------------------------
//----------------------------------------TASK 03-----------------------------------------------------------------------
// Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var currentDate = new Date();
// var daysName = [ "Sat","Sun", "Mon", "Tues", "Thurs", "Fri"];
// var currentDay = daysName[currentDate.getDay()];

// document.write("Today is "+ currentDay);

// --------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------TASK 04--------------------------------------------------
// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday todaY.

// var currentDate = new Date();
// var daysName = [ "Sat","Sun", "Mon", "Tues", "Thurs", "Fri"];
// var currentDay = daysName[currentDate.getDay()];

// if (currentDay=="Sat" || currentDay=="Sun") {

//     document.write("It's Fun day!");
// }
// else{
//     document.write("Today is "+ currentDay);

// }

// --------------------------------------------------------------------------------------------------------
// ------------------------------------TASK 05 ------------------------------------------------------------
// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

// var currentDate = new Date()
// var date = currentDate.getDate();

// if (date<=16){

//     document.write("First fifteen days of the month.");
    
// }
// else if(date>16){

//     document.write("Last days of the month.");
// }

// ------------------------------------------------------------------------------------------------------
// -------------------------------------TASK 06----------------------------------------------------------
// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var assignedDate = new Date(1970, 0, 1);
// var currentDate = new Date();
// var elapsedMinutes= Math.floor((currentDate-assignedDate)/(1000*60));
// var elapsedMilliSeconds = currentDate-assignedDate;

// document.write("Curent Date: " + currentDate + "<br>");
// document.write("Elapsed milliseconds since january 1, 1970 : " + elapsedMilliSeconds+ "<br>");
// document.write("Elapsed minutes since january 1, 1970 : " + elapsedMinutes);

// -----------------------------------------------------------------------------------------------------
// --------------------------------------TASK 07 ------------------------------------------------------
// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var currentDate = new Date();
// var currentHour = currentDate.getHours();

// if (currentHour < 12) {
//   document.write("It's AM.");
// } 
// else {
//   document.write("It's PM.");
// }

// ----------------------------------------------------------------------------------------------
// --------------------------------------TASK 08------------------------------------------------
// Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// var laterDate = new Date(2020, 11 , 31);

// document.write("Later date: " + laterDate);

// ---------------------------------------------------------------------------------------------
// ------------------------------------------TASK 09--------------------------------------------
// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?

// var startingDateOfRamadan = new Date (2023,2, 22);
// var currentDate = new Date();
// var timeDiff = currentDate.getTime() - startingDateOfRamadan.getTime();
// var daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));

// alert(daysPassed);

// ------------------------------------------------------------------------------------------
// -------------------------------------TASK 10 ---------------------------------------------
// . Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var assignedDate = new Date(2015, 0 , 1);
// var currentDate = new Date();
// var elapsedSeconds = Math.floor((currentDate-assignedDate)/1000);

// document.write("The elapseds econds since the beginning of 2015 are: " + elapsedSeconds);

// -------------------------------------------------------------------------------------
// ----------------------------------TASK 11 ---------------------------------------------
// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser

// var currentDate = new Date ();

// document.write("Current Date: " + currentDate + "<br>");
// var currentHour= currentDate.getHours();

// var anHourAhead = new Date()
// anHourAhead.setHours(currentHour + 1);

// document.write("1 hour ago: " + anHourAhead);

// ----------------------------------------------------------------------------------------------
// ------------------------------------TASK 12 --------------------------------------------------
// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear()- 100);
// alert("THE DATE 100 YEARS BACK FROM TODAY IS :" + currentDate);

// -----------------------------------------------------------------------------------------------
// ------------------------------TASK 13 ---------------------------------------------------------
// Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var age = +prompt("Enter your age in digits:");
// var currentDate = new Date();
// var birthYear = currentDate.getFullYear()-age;

// document.write("AGE: "+ age + "<br>");
// document.write("BIRTH YEAR:" + birthYear);

// ---------------------------------------------------------------------------------------------
// ------------------------------------TASK 14--------------------------------------------------
// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current MontH
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,Net Amount Payable (within Due Date) = Number of units * Charges per unit& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// var customerName = prompt("Enter Customer Name:");
// var currentMonth = prompt("Enter Current Month:");
// var numberOfUnits = +prompt("Enter Number of Units:");
// var chargesPerUnit = +prompt("Enter Charges per Unit:");
// var latePaymentSurcharge = +prompt("Enter Late Payment Surcharge:");


// var netAmountPayableBeforeDueDate = numberOfUnits * chargesPerUnit;
// var grossAmountPayableAfterDueDate = netAmountPayableBeforeDueDate + latePaymentSurcharge;
 
// netAmountPayableBeforeDueDate = netAmountPayableBeforeDueDate.toFixed(2);
// latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
// grossAmountPayableAfterDueDate = grossAmountPayableAfterDueDate.toFixed(2);

// document.write("<h2>K-Electric Bill</h2>");
// document.write("<strong>Customer Name:</strong> " + customerName + "<br>");
// document.write("<strong>Current Month:</strong> " + currentMonth + "<br>");
// document.write("<strong>Number of Units:</strong> " + numberOfUnits + "<br>");
// document.write("<strong>Charges per Unit:</strong> " + chargesPerUnit + "<br>");
// document.write("<strong>Net Amount Payable (within Due Date):</strong> " + netAmountPayableBeforeDueDate + "<br>");
// document.write("<strong>Late Payment Surcharge:</strong> " + latePaymentSurcharge + "<br>");
// document.write("<strong>Gross Amount Payable (after Due Date):</strong> " + grossAmountPayableAfterDueDate + "<br>");

// ---------------------------------------------------------------------------------------------------------------------------------

