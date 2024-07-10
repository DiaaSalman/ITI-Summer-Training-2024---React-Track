/*** Varaibles in js */

/**
 * Primitve datatypes
 * ------------------
 * == string
 * == number
 * == boolean
 * == undefined
 * == null
 *--------------------
    == Object
    -----------------------

var 
------------------
 ==== reassign with deferent datatypes
 ==== redeclaration
 */

// var firstName = "ali"; // string

// var num = 10; //number

// var flag = true; // boolean

// var x = 10.25; // number

// console.log(typeof firstName);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof x);

// console.log(flag);

/** camelCase
 * first
 * firstSecond
 * firstSecondThird
 *
 */

// var fname = null;

// console.log(typeof fname);

// console.log(typeof fname);

// var fname = "ali";

// fname = "mona";

// fname = 10;

// fname = true;
// console.log(typeof fname);

// var fname;

// fname = 10;

// console.log(typeof fname);

// var fname = 10;

// var fname = "mmona";

// console.log(fname);
// var fname = null;

// console.log(fname);
// var fname = "mona";
// console.log(fname);
// var fname;

// console.log(fname);

// fname = "mona";

// console.log(fname);

// var fname = 10;

// var fname = String("10");

// console.log(fname);
// console.log(typeof fname);

// var num = Number("mona");

// console.log(typeof num);
/**
 * NaN : Not a number
 *================================== falsy Values

 false
 0
 undefined
 NaN
 ""
 null



 */

// var flag = Boolean([]);

// console.log(flag);
/**
 * Operators
 * --------------------------
 * [+] --> number + number -- > add
 *      --> string + string --> concat
 *
 */

// var num1 = 3;

// var num2 = 4;

// console.log(num1 - num2);

/** coercion => js engine convere automatic from datatypes to anther datatype */

// var x = 10; // number

// var y = "mona"; // string 10
// console.log(x - y);
/** ---------------
 * [==] -->only  values
 *
 * [===] ---> values && datatype
 *
 *
 * - */
// var x = 10; //number
// var y = "20"; // number -- 10

// var x = true; // boolean --> 1 -- number
// var y = "true"; // string  --> NaN --> number
// console.log(x == y);
/**
 * logical Operator
 * and  &&
 * or   ||
 * not  !
 * -------------------------------
 * &&
 * ----------------------------------
 * true && true --> true
 * true && false --> false
 * false && true --> false
 * false && false --> false
 * -------------------------------
 * ||
 * ----------------------------------
 * true || true --> true
 * true || false --> true
 * false || true --> true
 * false || false --> false
 *--------------------------------
 true ! false
 false -->> true
-------------------Short Circuits----------------------
 0 && "ola"

 false &&  --> false
 */

/** -----------------
 *
 *
 *
 *
 * ------------------
 */

// var color = "red";

// var num = 5;

// var flag = false;

// if (!flag) {
// 	console.log("Welcome");
// }

// if (color == "red" || num < 10) {
// 	console.log("%cI Like red Color", "color:red;font-size:20px");
// }
// if (color == "red") {
// 	console.log("%cI Like red Color", "color:red;font-size:20px");
// } else if (color == "green") {
// 	console.log("%cI Like green Color", "color:green;font-size:20px");
// } else {
// 	console.log("I don't like any Colors");
// }

// console.log("Welcome From IIT");
/**------------------- */

// for (var i = 0; i < 5; i++) {
// 	console.log("%cWelcome from ITI", "font-size:20px");
// 	console.log("===========");
// }

// var i = 8;
// while (i < 5) {
// 	console.log("welcome");
// }
// do {
// 	console.log("Welcome");
// 	i++;
// } while (i < 5);
/**============= */

var fname = 'mona'

document.writeln('<h1> Welcome ' + fname + '</h1>')
document.writeln("<h2 '> Welcome " + fname + '</h2>')
document.writeln("<h3'> Welcome " + fname + '</h2>')

// var num1 = Number(prompt("Enter Your Number1", "10"));
// var num2 = Number(prompt("Enter Your Number2", 10));

// document.writeln(num1 + num2);
/**
 * == take Your Name From User
 * == Then Print Your Name in h1 to h6
 * -------------------------------------------
 * 2- check if user number is odd or even
 * -------------------------------------------
 * 3- check if user number positive or negative
 * ---------------------------------------------
 * 4- sum user numbers until the summation > 100
 * or user enter zero
 *
 */
