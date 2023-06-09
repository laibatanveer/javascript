// ------------------------------------------TASK 01---------------------------------------------
// Declare and initialize an empty multidimensional array.(Array of arrays)

// var multidimensionalArray = [];

// multidimensionalArray.push([]);
// multidimensionalArray.push([]);
// multidimensionalArray.push([]);
// multidimensionalArray.push([]);
// multidimensionalArray.push([]);


// ----------------------------------------------------------------------------------------------
// ---------------------------------TASK 02 -----------------------------------------------------
// Declare and initialize a multidimensional array representing the following matrix:

// var multiArray = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];
  
//   document.write(multiArray[0] + "<br>");
//   document.write(multiArray[1] + "<br>");
//   document.write(multiArray[2] + "<br>");
  
// ----------------------------------------------------------------------------------------------
// ---------------------------------TASK 03 -----------------------------------------------------
// Write a program to print numeric counting from 1 to 10.

// var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// document.write(counting[0] + "<br>");
// document.write(counting[1] + "<br>");
// document.write(counting[2] + "<br>");
// document.write(counting[3] + "<br>");
// document.write(counting[4] + "<br>");
// document.write(counting[5] + "<br>");
// document.write(counting[6] + "<br>");
// document.write(counting[7] + "<br>");
// document.write(counting[8] + "<br>");
// document.write(counting[9]);

// ---------------------------------------------------------------------------------------------------
// ----------------------------------TASK 04----------------------------------------------------------
// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// var num = +prompt("Please enter a number");
// var length = +prompt("Please enter the length of table");


// document.write("The Multiplication table of " + num + "<br>");
// for (var i = 1; i <= length; i++) {
//     var result = num * i;
//     document.write(num + " x " + i + " = " + result + "<br>");
// }

// --------------------------------------------------------------------------------------------------
// // --------------------------------TASK 05-----------------------------------------------------------
// Write a program to print items of the following array  using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["Apple", "Mango", "Orange", "Strawberry"];

// for (var i = 0; i < fruits.length; i++){
//     document.write(fruits[i]+ "<br>");
// };

// document.write("<br>");
// document.write("Element at index " + [0] + " is " + fruits[0]+ ". " + "<br>");
// document.write("Element at index " + [1] + " is " + fruits[1]+ ". " + "<br>");
// document.write("Element at index " + [2] + " is " + fruits[2]+ ". " + "<br>");
// document.write("Element at index " + [3] + " is " + fruits[3]+ ". " + "<br>");

// ----------------------------------------------------------------------------------------------
// -----------------------------TASK 06----------------------------------------------------------
// Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// // a.COUNTING
// var counting = [];
// for (var i = 1; i <= 15; i++) {
//   counting.push(i);
// }
// document.write("Counting: " +"<br>" + counting.join(", ") + "<br><br>");

// // b.REVERSE COUNTING
// var reverseCounting = [];
// for (var i = 10; i >= 1; i--) {
//   reverseCounting.push(i);
// }
// document.write("Reverse counting: " +"<br>" + reverseCounting.join(", ") + "<br><br>");

// // c.EVEN NUMBERS
// var even = [];
// for (var i = 0; i <= 20; i += 2) {
//   even.push(i);
// }
// document.write("Even: " +"<br>" + even.join(", ") + "<br><br>");

// //d.ODD NUMBERS
// var odd = [];
// for (var i = 1; i <= 19; i += 2) {
//   odd.push(i);
// }
// document.write("Odd: " +"<br>" + odd.join(", ") + "<br><br>");

// //e.SERIES
// var series = [];
// for (var i = 1; i <= 10; i++) {
//   series.push(i * 2 + "k");
// }
// document.write("Series: " +"<br>" + series.join(", ") + "<br><br>");

// -------------------------------------------------------------------------------------------------
// ----------------------------TASK 07--------------------------------------------------------------
// You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.After searching, prompt the user whether the given item is found in the list or not. Example:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABC Bakery! What do you want to order?");

// if(input == A[0] ){
//     alert(input +" is/are available at index " + A[0] + "in our bakery.");
// }
// if(input == A[1] ){
//     alert(input +" is/are available at index " + A[1] + "in our bakery.");
// }
// if(input == A[2] ){
//     alert(input +" is/are available at index " + A[2] + "in our bakery.");
// }
// if(input == A[3] ){
//     alert(input +" is/are available at index " + A[3] + "in our bakery.");
// }
// if(input == A[4] ){
//     alert(input +" is/are available at index " + A[4] + "in our bakery.");
// }
// else {
//     alert("We are sorry! " + input +" is/are not available "  + "in our bakery.");
// }

// ----------------------------------------------------------------------------------------------------
// ---------------------------------TASK 08 -----------------------------------------------------------
//  Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12]

// var A = [24, 53, 78, 91, 12];
// var largest = A[0];

// for (var i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }

// document.write("Array: " + A + "<br>");
// document.write("The largest number in this array is " + largest);

// ------------------------------------------------------------------------------------------
// ----------------------------------TASK 09-------------------------------------------------
// Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]

// var A = [24, 53, 78, 91, 12];
// var smallest = A[3];

// for (var i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     largest = A[i];
//   }
// }

// document.write("Array: " + A + "<br>");
// document.write("The smallest number in this array is " + largest);

// ---------------------------------------------------------------------------------------
// -----------------------------TASK 10---------------------------------------------------
// Write a program to print multiples of 5 ranging 1 to 100.

// var multiplesOfFive = [];

// for (var i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     multiplesOfFive.push(i);
//   }
// }
// document.write(" The Multiples of 5 ranging from 1 to 100: " +"<br><br>"+ multiplesOfFive.join(", "));

// ----------------------------------------------------------------------------------------------------------


