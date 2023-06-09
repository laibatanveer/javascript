// -------------------------------------TASK 01 -----------------------------------------------------
// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var firstName = prompt("Please enter your first name(The first letter should be in uppercase):");
// var faherName = prompt("Please enter your father's name(the frist letter should be in uppercase):");
// var fullName = firstName.concat(" ", faherName);
// alert("Greetings, " + fullName + "! Welcome.");

// ------------------------------------------------------------------------------------------------
// --------------------------------------------TASK 02-------------------------------------------
// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

// var input = prompt("Enter your favourite mobile model:");
// var length= input.length;
// document.write("Length of your input is: " + length);

// -----------------------------------------------------------------------------------------
// -----------------------------------------TASK 03 ----------------------------------------
// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// var word = "Pakistani";
// var index = word.indexOf("n");

// document.write("The index of letter 'n' in the word Pakistani:" + index );

// ---------------------------------------------------------------------------------------
// ----------------------------------TASK 04 ---------------------------------------------
// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser

// var word = "Hello World";
// var lastindex = word.lastIndexOf("l");

// document.write("The index of letter 'l' in the word Hello World:" + lastindex );

// ----------------------------------------------------------------------------------------
// -------------------------------TASK 05 -------------------------------------------------
// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// var index3 = word[3];

// document.write("The character at 3rd index in the word “Pakistani:" +"<br>" + index3 );

// ----------------------------------------------------------------------------------------
// -----------------------------TASK 06 ---------------------------------------------------
//                            DONE AS Q1

// ---------------------------------------------------------------------------------------
// ----------------------------TASK 07----------------------------------------------------
// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var word = "Hyderabad";
// var replacedWord = word.replace("Hyder", "Islam");
// document.write("Word: " + word + "<br>");
// document.write("Modified word: " + replacedWord);

// ---------------------------------------------------------------------------------------
// -----------------------------TASK 08---------------------------------------------------
// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var replacement = message.replace("and", "&");

// document.write("Sentence:" + "<br>" + message + "<br><br>");
// document.write("Modified sentence:" + "<br>" + replacement);

// -------------------------------------------------------------------------------------
// -------------------------TASK 09-----------------------------------------------------
// Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var string = "472";
// var number = +(string);

// document.write("Value: " + string + "<br>");
// document.write("Type:String  " + "<br>");
// document.write("Value: " + number + "<br>");
// document.write("Type:Number");

// ------------------------------------------------------------------------------------
// ---------------------------TASK 10 -------------------------------------------------
// Write a program that takes user input. Convert and show the input in capital letters.

// var input = prompt("Enter a word that you want to convert to uppercase:");
// var upperCase = input.toUpperCase();

// document.write("Input:" + input + "<br>");
// document.write("Uppercase:" + upperCase);

// ----------------------------------------------------------------------------------
// ----------------------TASK 11 ---------------------------------------------------
// Write a program that takes user input. Convert and show the input in title case.

// var input = prompt("Enter a word that you want to convert to titlecase:");
// var firstLetter = input.slice(0,1);
// var firstUpper = firstLetter.toUpperCase();
// var remainingLetters = input.slice(1);
// var result = firstUpper + remainingLetters;

// document.write("Input:" + input + "<br>");
// document.write("Ttitlecase:" + result);

// ------------------------------------------------------------------------------------
// ---------------------------TASK 12 -------------------------------------------------
// Write a program that converts the variable num to string.var num = 35.36 ;Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var string = num.toString();
// var result = string.replace(".", "");

// document.write("Number: "+ num + "<br>");
// document.write("Result: " + result );

// ----------------------------------------------------------------------------------
// ---------------------------TASK 13-------------------------------------------------
// Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// var userName = prompt("Enter your name: ");
// if (userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")){
//     alert("Invalid username! Enter a valid name.");
//     var validName = prompt("Enter a valid name: ");
// }
// else{
//     alert("Valid username: " + userName);
// }

// ------------------------------------------------------------------------------------
// --------------------------TASK 14--------------------------------------------------
// You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABC Bakery! What do you want to order?");
// var itemFound = false;

// for (var i = 0; i < A.length; i++) {
//   if (input.toLowerCase() === A[i].toLowerCase()) {
//     itemFound = true;
//     alert(input + " is available at index " + i + " in the list.");
   
//   }
// }

// if (!itemFound) {
//   alert("We are sorry! " + input + " is not available in the list.");
// }

// --------------------------------------------------------------------------------
// -------------------------TASK 15-------------------------------------------------
// Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// var password = prompt("Enter a password: ");

// if(!(/[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /^[a-zA-Z]/.test(password) && password.length >= 6)){
//     alert("Invalid Password!")
//     document.write("Entered Password: " + password +"<br>");
//     document.write("a.Password should contain alphabets and numbers" +"<br>"+ "b. It should not start with a number." +"<br>" + "c. It must at least 6 characters long." +"<br>" );
//     document.write("Please enter a valid password!");

//     var invalidPassword= prompt("Invalid password! enter a valid password:");
// }
// else{
//     alert("Valid password!");
// }

// ---------------------------------------------------------------------------
// ---------------------------TASK 16-----------------------------------------
// Write a program to convert the following string to an array using string split method.var university = “University of Karachi”;Display the elements of array in your browser

// var university = "University of Karachi";
// var display = university.split("");

// for (var i = 0; i < display.length; i++) {
//     document.write(display[i] + "<br>");}

// -------------------------------------------------------------------------------------
// ------------------------------TASK 17 -----------------------------------------------
// Write a program to display the last character of a user input.

// var userInput = prompt("Enter a word:");
// var lastCharacter = userInput.charAt(userInput.length - 1);

// document.write("User Input: " + userInput + "<br>");
// document.write("Last character: " + lastCharacter);

// --------------------------------------------------------------------------------------
// ---------------------------------TASK 18 ---------------------------------------------
// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string

// var text = "The quick brown fox jumps over the lazy dog";
// var wordToCount = "the";
// var count = 0;

// var lowercaseText = text.toLowerCase();

// // Split the sentence into words
// var words = lowercaseText.split(" ");

// // Count the occurrences of the word
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === wordToCount) {
//         count++;
//     }
// }

// document.write("Text: " + text + "<br>");
// document.write("Number of occurrences of '" + wordToCount + "': " + count);

// -----------------------------------------------------------------------------------------------
