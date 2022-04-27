/*1. Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10: 30 : 38 PM */
const day = new Date().toLocaleDateString("en",{ weekday: "long"});
console.log(`Today is: ${day}`);

const time = new Date().toLocaleTimeString("en");
console.log(`Current time is: ${time}`);

console.log("-----1st exercise is done-----")

/*2. Write a JavaScript program to print the contents of the current window.*/
function print_current_page()
{
window.print();
}

/*3. 3. Write a JavaScript program to get the current date. 
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/


var date = new Date();
var month = date.getMonth()+1;
var currentDay = date.getDate();
var year = date.getFullYear();
console.log("The date is: " + month + "-" + currentDay + "-" + year);
console.log("The date is: " + month + "/" + currentDay + "/" + year);
console.log("The date is: " + currentDay + "-" + month + "-" + year);
console.log("The date is: " + currentDay + "/" + month + "/" + year);
console.log("-----3rd exercise is done-----")

/*4. 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.*/

var side1 = 5;
var side2 = 6;
var side3 = 7;

var perimeter = (side1 + side2 + side3)/2;
var area = Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);
console.log("-----4th exercise is done-----")

/*5. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.*/
function leapyear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  }
  console.log(leapyear(2016));
  console.log(leapyear(2000));
  console.log(leapyear(1700));
  console.log(leapyear(1800));
  console.log(leapyear(100));
  console.log("-----5th exercise is done-----")

/*6.Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.*/
console.log('------------------');
for (var year = 2014; year <= 2050; year++){
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
    console.log("1st January is being a Sunday: " + year);
}
console.log('------------------');
console.log("-----6th exercise is done-----")

/*8.Write a JavaScript program to calculate days left until next Christmas.*/

today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25)
{
  cmas.setFullYear(today.getFullYear()+1);
}
var one_day = 1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day)) + " days left until Chrismas!");
console.log("-----8th exercise is done-----")

/*9.Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C*/


function cToF(celsius)
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + '\xB0F. ';
  console.log(message);
}

function fToC(fahrenheit)
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+ '\xB0F is ' + fToCel + '\xB0C. ';
  console.log(message);
}

cToF(60);
fToC(45);
console.log("-----9th exercise is done-----")

/*10Write a JavaScript program to get the website URL (loading page).*/
console.log(document.URL);
console.log("-----10th exercise is done-----");

/*11. Write a JavaScript exercise to create a variable using a user-defined name*/

var var_name = 'abcdef';
var n = 120;
this[var_name] = n;
console.log(this[var_name]);
console.log("-----11th exercise is done-----");

/*12.Write a JavaScript exercise to get the extension of a filename.*/

filename = 'abcd.js';
console.log(filename.split('.').pop());
filename = 'abcd.php';
console.log(filename.split('.').pop());
filename = 'abcd.java';
console.log(filename.split('.').pop());
console.log("-----12th exercise is done-----");

/*13. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.*/

function difference(n)
{
  if (n <= 13)
  return 13 - n;
  else 
  return (n - 13) * 2;
}

console.log(difference(45));
console.log(difference(12));
console.log("-----13th exercise is done-----");

/*14.Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.*/

function sumTripple(x, y){
  if (x == y)
  return 3 * (x + y);
  else 
  return x + y;
}

console.log(sumTripple(12, 13));
console.log(sumTripple(5, 5));
console.log("-----14th exercise is done-----");

/*15. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19*/

function diff_number(n){
  if ( n <= 19){
  return 19 - n; 
}
  else {
  return (n - 19) * 3;
}

}
console.log(diff_number(12));
console.log(diff_number(20));
console.log(diff_number(22));
console.log("-----15th exercise is done-----");

/* 16. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.*/

function check(x, y)
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(check(10, 20));
console.log(check(10, 30));
console.log(check(30, 20));
console.log(check(50, 20));
console.log("-----16th exercise is done-----");

/* 17. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.*/

function test(x){
  return ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
}
console.log(test(10));
console.log(test(20));
console.log(test(80));
console.log(test(99));
console.log(test(101));
console.log("-----17th exercise is done-----");

/* 18. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.*/

function positive_negative(x, y)
{
  if ((x < 0 && y > 0) || (x > 0 && y < 0))
  {
    return true;
  }
  else 
  {
    return false;
  }
}
console.log(positive_negative(2, -3));
console.log(positive_negative(-2, 3));
console.log(positive_negative(4, 3));
console.log(positive_negative(-2, -3));
console.log("-----18th exercise is done-----");

/*19. Write a JavaScript program to create a new string adding "Py" 
in front of a given string. If the given string begins with "Py" 
then return the original string.*/

function string_check(str1)
{
  if ( str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py')
  {
    return str1;
  }
  else
  {
    return "Py"+str1;
  }
}

console.log(string_check('Python'));
console.log(string_check('thon'));
console.log("-----19th exercise is done-----");

/*20. Write a JavaScript program to remove a character at the 
specified position of a given string and return the new string.*/

function remove_character(str, char_pos)
{
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
}
console.log(remove_character('Proma', 0));
console.log(remove_character('Proma', 1));
console.log(remove_character('Proma', 2));
console.log(remove_character('Proma', 3));
console.log(remove_character('Proma', 4));
console.log("-----20th exercise is done-----");

/* 21. Write a JavaScript program to create a new string from a 
given string with the first character of the given string added at 
the front and back.*/

function front_back(str)
{
  first = str.substring(0, 1);
  return first + str + first;
}
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));
console.log("-----21th exercise is done-----");

/* 22. Write a JavaScript program to check whether a given 
positive number is a multiple of 3 or a multiple of 7.*/

function number(x)
{
  if ( x % 3 == 0 || x % 7 == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
console.log(number(3));
console.log(number(5));
console.log(number(9));
console.log(number(10));
console.log(number(12));
console.log("-----22th exercise is done-----");










