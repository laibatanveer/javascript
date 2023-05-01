// ---------------------------------------------TASK 01----------------------------------------------

// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx".

// alert("Calculate your Zakat value");
// var zakatPercentage = 0.025;
// var userInput = +prompt("input");
// var result = zakatPercentage * userInput;

// alert("Your Zakat value is " + result);


// // ----------------------------------------------TASK 02 ----------------------------------------------------

// // calculate the fitrah amount, first, ask the user to enter the total number of family
// // members using the prompt and store the value in a variable called
// // "familyMembers". Next, ask the user to choose a fitrah method by providing them
// // options using the prompt, and store the selected method and its price in variables.
// // Then, use an if-else block to check the user's input and calculate the fitrah amount
// // by multiplying the selected method's price with the number of family members.
// // Finally, display the calculated fitrah amount using an alert message.

// alert("Calculate the Fitrah Amount");

// var familyMembers = +prompt("Total number of your family members")

// var wheat = 320;
// var dates = 2800;
// var raisin = 4800;
// var oats = 480;
// var method = prompt("wheat, dates, oats, raisin");
// if
//    (method = wheat) {
//     var result = wheat * familyMembers
//     alert("your fitrah value is " + result)

//    }
// else if(method =dates) 
// {
//     var result = dates * familyMembers
//     alert("your fitrah value is " + result)
// }
// else if (method = oats)
// {
//     var result = oats * familyMembers
//     alert("your fitrah value is " + result)
// }

// else if (method = raisin) {
//     var result = raisin * familyMembers
//     alert("your fitrah value is " + result)
// }
    

// ----------------------------------------------TASK 03----------------------------------------------------------

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

// alert("Guess the secret number");

// var secretNumber = 5;

// var guessIt = +prompt("enter your guess number");

// if(guessIt == 5){
//     alert("Congratulations! You've guessed it correctly");

// }
// else if(guessIt>5)
// {
//     alert("Your guess is too high, try again");
// }
// else if(guessIt<5){
//     alert("Your guess is too low, try again");
// }

// else {
//     alert("Try again")}


// --------------------------------------------------TASK 04------------------------------------------------------------------------

// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

// var nam = prompt("Enter your Name here");

// var capitalizedname = nam[0].toUpperCase() + nam.slice(1).toLowerCase();

// console.log(capitalizedname);

// alert(capitalizedname);

// -------------------------------------------TASK 05--------------------------------------------------------------

// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

// contactNames=[];
// contactNumbers=[];

// for( i=0 ; i<4 ; i++ ) {
//   var personName =prompt("Enter Your Name");
//   contactNames.push(personName);


//   var personNumber =+prompt("Enter Your Contact number");
//   contactNumbers.push(personNumber);

// }

// console.log("contactNames:   contactNumbers");

// for( i=0 ; i<4 ; i++) {

//   console.log(contactNames[i] + " : "  + contactNumbers[i]);
// }

// ------------------------------------------------TASK 06-------------------------------------------------------------------------------

// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

// var outCome = ["pikachu","lugia","mew","snorlax"];

// var userOutCome = +prompt("Put the number of outcome you want to remove= \n 1.pikachu, \n 2.lugia, \n 3.mew, \n 4.snorlax");

// var removedOutCome= outCome.splice(userOutCome - 1,1);

// console.log("The removed outcome is:" +removedOutCome[0]);
// alert("The removed outcome is:" +removedOutCome[0]);


// console.log("The remainder is:");
// for( i=0 ; i<outCome.length ; i++) {
//  console.log (i +" " + outCome[i]);
// }
// console.log("the remainder is" + outCome.length);


// ----------------------------------------------TASK 07---------------------------------------------------

// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

// var Nationality = prompt("Enter Your Nationality");

// var Gender = prompt ("Enter Your Gender");

// var Age = +prompt ("Enter Your Age");

// var maritalstatus = prompt("what is your marital status  \ 1. married \ 2. unmarried");


// if (Nationality == "Pakistani" || "Indian") {

//   alert("You are not eligible to vote");

// } 
// if(( Gender == 'Male' && Age>18)){
// }

// if( Gender== 'female' && Age>18){

//   if(maritalstatus == 'married') {

//    alert("You are eligible to vote")
// }

// else if (maritalstatus == 'unmarried'){

//   alert("You are not eligible to  vote")
// }
// }

// ---------------------------------------------------TASK 08--------------------------------------------------------------

// You have an array that contains the names of Pakistani Team Players selected for
// WorldCup (15 Players) named as WorldCupSquad. Now, tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrow's
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array).

// var WorldSquad = ["Babar Azam", "Asif Ali", "Haider Ali", "Shaheen Shah Afridi", "Haris Rauf", "Shadab Khan", "Khushdil Shah", "Mohammad Hasnain", "Iftikhar Ahmed", "Mohammad Nawaz", "Mohammad Rizwan", "Mohammad Wasim", "Naseem Shah", "Shan Masood", "Usman Qadir"];

// var finalteam = WorldSquad.slice(0, 11);

// console.log("The final team is " + finalteam);

// alert("The final team is" + finalteam);

// --------------------------------------------------------------------------------------------------------------------------------------