/* 43. Write a JavaScript program to check whether a given number 
is presents in the range 40..10000.
For example 40 presents in 40 and 4000 */

function test_digit(x, y, n) 
  {    
    if (n < 40 || n > 10000)
      return false;
    else
      if (n >= x && n <= y)
        return true;
      else
        return false;
  }
console.log(test_digit(40, 4000, 45));  
console.log(test_digit(80, 320, 79));  
console.log(test_digit(89, 4000, 30));
console.log("-----43rd exercise is done-----");

/* 44. Write a JavaScript program to reverse a given string.*/
function string_reverse(str) 
{
    return str.split("").reverse().join("");
}
console.log(string_reverse("w3resource"));
console.log(string_reverse("Proma"));
console.log(string_reverse("JavaScript"));
console.log("-----44th exercise is done-----");

/* 45. Write a JavaScript program to replace every character in a 
given string with the character following it in the alphabet. */

function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));
console.log("-----45th exercise is done-----");

/* 46.Write a JavaScript program to convert a given number to hours 
and minutes.*/

function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));
console.log("-----46th exercise is done-----");


/* 47. Write a JavaScript program to convert the letters of a 
given string in alphabetical order.*/

function alphabet_Soup(str) { 
    return str.split("").sort().join("");  
}
console.log(alphabet_Soup("Python"));
console.log(alphabet_Soup("Exercises"));
console.log("-----47th exercise is done-----");

/* 48. Write a JavaScript program to check whether the characters a and b 
are separated by exactly 3 places anywhere (at least once) in a given
string.*/

function ab_Check(str)
 {
    return (/a...b/).test(str) || (/b...a/).test(str);
 }

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));
console.log("-----48th exercise is done-----");

/* 49. Write a JavaScript program to count the number of vowels in a 
given string.*/

function vowel_Count(str)
{ 
  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));
console.log("-----49th exercise is done-----");

/* 50. Write a JavaScript program to check whether a given string 
contains equal number of p's and t's.*/

function equal_pt(str)
{ 
  var str_p = str.replace(/[^p]/g, "");

  var str_t = str.replace(/[^t]/g, "");

  var p_num = str_p.length;
  var s_num = str_t.length;

  return p_num === s_num;
         
}
console.log(equal_pt("paatpss"));
console.log(equal_pt("paatps"));
console.log(equal_pt("paatpts"));
console.log("-----50th exercise is done-----");

/* 51.  Write a JavaScript program to create a new string of 
specified copies (positive number) of a given string.*/

function string_copies (str, n) 
{
  if (n < 0)
    return false;
  else
  return str.repeat(n);
}
console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
console.log(string_copies("abc", -2));
console.log("-----51st exercise is done-----");

/* 52. Write a JavaScript program to create a new string of 4 copies 
of the last 3 characters of a given original string. The length of 
the given string must be 3 and above.*/

function newstring(str)
{
  if (str.length >= 3) {
    result_str = str.substring(str.length - 3);
    return result_str + result_str + result_str + result_str;
  }
  else
    return false;
}
console.log(newstring("Python 3.0"));
console.log(newstring("JS"));
console.log(newstring("JavaScript"));
console.log("-----52nd exercise is done-----");

/* 53. Write a JavaScript program to extract the first half of a 
string of even length.*/

function first_half (str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  }
  return str;
}
console.log(first_half("Python"));  
console.log(first_half("JavaScript")); 
console.log(first_half("PHP"));
console.log("-----53rd exercise is done-----");

/* 54. Write a JavaScript program to create a new string without 
the first and last character of a given string.*/
function without_first_end(str) {
  return str.substring(1, str.length - 1);
}
console.log(without_first_end('JavaScript'));
console.log(without_first_end('JS'));
console.log(without_first_end('PHP'));
console.log("-----54th exercise is done-----");

/* 55.Write a JavaScript program to concatenate two strings 
except their first character.*/

function concatenate(str1, str2) {
  str1 = str1.substring(1, str1.length);
  str2 = str2.substring(1, str2.length);
  return str1 + str2;
}

console.log(concatenate("PHP","JS"));
console.log(concatenate("A","B"));
console.log(concatenate("AA","BB"));
console.log("-----55th exercise is done-----");

/* 56. Write a JavaScript program to move last three character to the
start of a given string. The string length must be greater or equal 
to three.*/

function right_three(str) {
     if (str.length >= 3)
       {
         return str.slice(-3) + str.slice(0, -3);
       }
  return str;
}
console.log(right_three("Python"));
console.log(right_three("JavaScript"));
console.log(right_three("Hi"));
console.log("-----56th exercise is done-----");

/* 57.Write a JavaScript program to create a string using the middle 
three characters of a given string of odd length. The string length 
must be greater or equal to three. */
function middle_three(str) {
   if (str.length % 2!= 0) {
   
    mid = (str.length + 1)/2;
    return str.slice(mid - 2, mid + 1);
    }
  return str;
}
console.log(middle_three('abcdefg'));
console.log(middle_three('HTML5'));
console.log(middle_three('Python'));
console.log(middle_three('PHP'));
console.log(middle_three('Exercises'));
console.log("-----57th exercise is done-----");




















































