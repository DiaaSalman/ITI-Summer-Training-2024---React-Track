/**
 * == Communcation With user
 * == Ternary Operator
 * == functions
 *      -- built in functions
 *      -- user Defined functions
 *          -- function statement
 *          -- function expression
 *          -- call back function
 *
 *== string Object
 == Array
 */

// var name = prompt("Enter Your Name");
// console.log(name);
/**--------------------------------------- */

// alert("Item Deleted");
// var result = confirm("Are you sure you want to delete this item");
// if ( result )
//     document.write( "<h1>Item Deleted</h1>" );
// else
//     document.write( "<h2>Operation Cancelled</h2>" );

// (condition) ? // line true : // false case

// Ternary Operator
// result
// 	? document.write("<h1>Item Deleted</h1>")
// 	: document.write("<h2>Operation Cancelled</h2>");
/**--------------------------------------- */

// var num1 = 3;

// var num2 = 4;

// var sum = num1 + num2;

// console.log(num1 + num2);
// /**--------------------------------------- */
// // 20 line
// var num1 = 10;

// var num2 = 5;

// var sum = num1 + num2;

// console.log(num1 + num2);
// /**--------------------------------------- */
// // 20 line
// var num1 = 11;

// var num2 = 20;

// var sum = num1 + num2;

// console.log(num1 + num2);
/**========================= */
// params
// function sum(num1, num2) {
// 	return num1 + num2;
// }

// function multiply(x) {
// 	console.log("x : ", x);
// 	return x * 2;
// }

// var result = multiply(sum(10, 5));
// console.log(result);
// var output = sum(10, 4);

// var result = * 2
// sum(3, 5, 10, 50, 70);
// sum( true, true );

// arguments
// sum("mona", "ali"); // function call
// console.log("=====================");
// sum(5, 6);
// console.log("=====================");
// sum(10, 5);

// display(); //

// var result = Number("10"); //
// console.log(result);

/** functions
 * -----------------
 *  == built in function
 *      -- parseInt() , Number() , String()
 * == user defined function
 *      -- function statement
 *      -- function expression
 *
 *
 */
// function statement
// function sum(num1, num2) {
// 	return num1 + num2;
// }
// function expression
// anonymous function
// var sum = function (x, y) {
// 	return x + y;
// };

// var output = sum(10, 20);
// console.log(output);

// var square = function (x) {
// 	console.log("Eman");
// 	return x * 2;
// };

// var y = square(30);
// console.log( y );

// console.log(square(10));

// sayHello();
// function sayHello() {
// 	console.log("Welcome from iti");
// }

// var result = sayHello();
// console.log(result);
// sayHello();

// sayHello();
// var sayHello = function () {
// 	console.log("Welcome from iti");
// };
/**================================= */
// var getTrackName = function () {
// 	return "Angular";
// };
// var reactTrack = function (x) {
// 	console.log("Welcome " + x + " track");
// };

// function great() {
// 	console.log("Welcome From iti");
// 	var trackName = getTrackName();
// 	reactTrack(trackName);
// }

// great();
/**================================= */

// var frontTrack = function (name) {
// 	console.log(name);
// 	console.log("Welcome front track");
// };
// var dotnetTrack = function (instName) {
// 	console.log(instName);
// 	console.log("Welcome dotnet track");
// };
// var angularTrack = function () {
// 	console.log("Welcome angular track");
// };

// var fname = "mona";

// function great(x, instName) {
// 	console.log("Welcome From iti");
// 	x(instName);
// }

// great(function (name) {
// 	console.log("Welcome front track");
// }, "Ahmed mohamed");
// /**============== */
// console.log("==============");
// great(frontTrack, "mona fathy");

// great("mona");

// console.log("-----------------");
// great(frontTrack);
// console.log("-----------------");
// great(angularTrack);
/**
 * str
 * -------------
 * length -->
 * ----------------------
 * == charAt --> index --> char
 * == indexOf --> char --> index
 * == toUpperCase
 * == toLowerCase
 * == startWith
 * == endsWith
 * == includes
 * == concat
 * ==trim
 * == trimStart
 * == trimEnd
 * == split
 */
// var str = "username=ali";

// var result = str.split("");
// console.log(result);
// var str2 = "Welcome :)";

// // var result = str.concat(str2);
// console.log(str.trimEnd() + str2);
// var result = str.charAt(2)
// var result = str.lastIndexOf("l");
// console.log(result);

// for (var i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }
/***
 * == length
 * --------------
 * == push -->
 * == unshift --> first
 * == pop
 * == shift
 * == reverse
 * == join
 * == concat
 */

// var studentData = ["mona", true, "ahmed"];

// var result = studentData.concat(["welcome", "ITI"]);
// console.log(result);

// var result = studentData.join("..");
// console.log(result);
// studentData.reverse();
// studentData.pop();
// studentData.pop();
// studentData.pop();
// console.log(studentData);
// studentData.unshift("Ahmed");
// studentData.unshift(123);
// studentData.unshift([1, 2, 4]);

// for (var i = 1; i <= 10; i++) {
// 	studentData.push(i);
// }

// console.log(studentData);
// studentData.push("ali");
// studentData.push("ahmed");
// studentData.push(123);

// console.log(studentData);

// console.log(studentData.length);
// for (var i = 0; i < studentData.length; i++) {
// 	console.log(studentData[i]);
// }
/*** ==================================
 * 1-fizzBuzz
 * ====================================
 * 5 --> 5 --> Buzz
 * 3 --> 3 --> fizz
 * 15 --> 3,5 --> fizzBuzz
 * 21 --> 3 -->  fizz
 * 7 --> None
 * ======================================
 * == 2-reverse a string
 * ======================================
 * --- ahmed --> demha
 * -- alaa   --> aala
 * -- hello iti --> iti olleh
 * ======================================
 * 3-take 5 numbers from user
 * ======================================
 * -- sum -- mult -- div
 * [1,2,3,4,5]
 *
 * sum => 15
 * mult -->
 * div -->
 * * ======================================
 * == 4-take a string from user
 * == take a char from user
 * =========================================
 * -- ahmed  --> e --> output --> 1
 * -- eeffaabb --> f --> output --> 2
 * =========================================
 * 5- take string from user ,
 * == take a char from user
 * -----------------------------------------
 * -- hello from iti --> i --> [11,13]
 * -- hello from iti --> f --> [7]
 * -- i love javascript --> v --> []
 */
