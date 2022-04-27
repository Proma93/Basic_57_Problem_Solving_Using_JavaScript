/* 23. Write a JavaScript program to create a new string from a 
given string taking the last 3 characters and added at both the 
front and back. The string length must be 3 or more.*/

function front_back3(str)
 {
  if (str.length>=3)
   {
   str_len = 3;
 
  back = str.substring(str.length-3);
   return back + str + back;
 }
   else
     return false;
 }
console.log(front_back3("abc"));
console.log(front_back3("ab"));
console.log(front_back3("abcd"));
console.log("-----23th exercise is done-----");

/*24. Write a JavaScript program to check whether a string starts with 
'Java' and false otherwise.*/

function start_java(str)
{
    if (str.length < 4)
    {
        return false;
    }
    front = str.substring(0, 4);
    if (front == 'Java')
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(start_java("JavaScript"));
console.log(start_java("Java"));
console.log(start_java("Javalearning"));
console.log(start_java("Script"));
console.log("-----24th exercise is done-----");

/*25.Write a JavaScript program to check whether two given integer 
values are in the range 50..99 (inclusive). Return true if either 
of them are in the said range.*/

function values(x, y)
{
    if(( x >= 50 && x <= 99 ) || ( y >= 50 && y <= 99 ))
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(values(2,70));
console.log(values(22,40));
console.log(values(52,70));
console.log(values(60,70));
console.log(values(5,7));
console.log("-----25th exercise is done-----");

/*26.Write a JavaScript program to check whether a string "Script" 
presents at 5th (index 4) position in a given string, if "Script" 
presents in the string return the string without "Script" otherwise
 return the original one.*/

 function check_script(str)
{
  if (str.length < 6) {
    return str;
  }
  let result_str = str;
    
  if (str.substring(10, 4) == 'Script') 
    {
    
   result_str = str.substring(0, 4) + str.substring(10,str.length);
      
  }
  return result_str;
}

console.log(check_script("JavaScript"));
console.log(check_script("CoffeeScript"));
console.log("-----26th exercise is done-----");

/*27. Write a JavaScript program to find the largest of three given 
integers.*/

function max_of_three(x, y, z)
{
     max_val = 0;
    if ( x > y)
    {
        max_val = x;
    }
    else
    {
        max_val = y;
    }
    if ( z > max_val)
    {
        max_val = z;
    }
    return max_val;
    
}
console.log(max_of_three(-1, 2, -3));
console.log(max_of_three(1, 2, 3));
console.log(max_of_three(67, 93, 2));
console.log(max_of_three(89, 36, 74));
console.log(max_of_three(60, 90, 50));
console.log(max_of_three(1,0,1));
console.log(max_of_three(0,-10,-20));
console.log(max_of_three(1000,510,440));
console.log("-----27th exercise is done-----");

/* 28. Write a JavaScript program to find a value which is 
nearest to 100 from two different given integer values.*/

function nearest(x, y)
{
    if (x != y)
    {
        x1 = Math.abs(x - 100);
        y1 = Math.abs( y - 100);

        if ( x1 < y1)
        {
            return x;
        }
        if ( y1 < x1)
        {
            return y;
        }
        return 0;
    }
    else
    return false;
}
console.log(nearest(79, 38));
console.log(nearest(9, 38));
console.log(nearest(79, -38));
console.log(nearest(-79, -38));
console.log(nearest(-79, 38));
console.log("-----28th exercise is done-----");

/*29.Write a JavaScript program to check whether two numbers are in 
range 40..60 or in the range 70..100 inclusive.*/

function range(x, y)
{
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100))
     {
         return true;
     }
     else 
     return false;
}

console.log(range(40,70));
console.log(range(60,40));
console.log(range(52,60));
console.log(range(66,70));
console.log(range(55,7));
console.log("-----29th exercise is done-----");

/*30. Write a JavaScript program to find the larger number from the 
two given positive integers, the two numbers are in the range 40..60
 inclusive.*/

function lar_num(x, y)
{
    if((x >= 40 && x <= 60) && (y >= 40 && y <= 60))
    {
        if ( x == y)
        {
            return "Numbers are same";
        }
        else if ( x > y)
        {
            return x;
        }
        else ( y > x)
        {
            return y;
        }
    }
    else 
    {
        return "Numbers don't fit in range";
    }
}
console.log(lar_num(45, 56));
console.log(lar_num(34, 60));
console.log(lar_num(-3, 7));
console.log(lar_num(81, 48));
console.log(lar_num(41, 59));
console.log("-----30th exercise is done-----");

/* 31. Write a program to check whether a specified character exists
 within the 2nd to 4th position in a given string.*/

 function check_char(str2, char)
 {
     count = 0;
     for ( let i = 0; i < str2.length; i++)
     {
         if ((str2.charAt(i) == char) && (i >= 1 && i <= 3))
         {
             count = 1;
             break;
         }
     }
     if ( count == 1 )
     {
         return true;
     }
     else return false;

 }
 console.log(check_char("Proma", "r"));
 console.log(check_char("Proma", "m"));
 console.log(check_char("JavaScript", "a"));
 console.log(check_char("Python", "o"));
 console.log("-----31th exercise is done-----");

/* 32. Write a JavaScript program to check whether the last digit 
of the three given positive integers is same*/

function last_digit(x, y, z)
{
    if ( x > 0 && y > 0 && z > 0)
    {
        return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
    }
    else
    return false;
}
console.log(last_digit(10, 20, 30));
console.log(last_digit(-10, 20, 30));
console.log(last_digit(10, 28, 30));
console.log(last_digit(58, 28, 38));
console.log(last_digit(10, 20, -30));
console.log("-----32th exercise is done-----");

/* 33. Write a JavaScript program to create new string with first 3 
characters are in lower case from a given string. If the string 
length is less than 3 convert all the characters in upper case.*/

function upper_lower(str)
{
    if ( str.length < 3)
    {
        return str.toUpperCase();
    }
     front_Part = str.substring(0, 3).toLowerCase();
     back_Part = str.substring(3, str.length);
     return front_Part + back_Part;
    
}

console.log(upper_lower("JavaScript"));
console.log(upper_lower("Proma"));
console.log(upper_lower("Python"));
console.log(upper_lower("World"));
console.log(upper_lower("Pr"));
console.log("-----33th exercise is done-----");

/* 34. Write a JavaScript program to check the total marks of a 
student in various examinations. The student will get A+ grade if 
the total marks are in the range 89..100 inclusive, if the 
examination is "Final-exam." the student will get A+ grade and 
total marks must be greater than or equal to 90. Return true if 
the student get A+ grade or false otherwise.*/

function marks(total, is_exam)
{
    if (is_exam)
    {
        return ( total >= 90);
    }
    else 
    {
        return ( total >= 89 && toatl <= 100);
    }
}
console.log(marks("87", " "));
console.log(marks("92", " "));
console.log(marks("67", "true"));
console.log(marks("94", "true"));
console.log("-----34th exercise is done-----");

/* 35. Write a JavaScript program to compute the sum of the two 
given integers, If the sum is in the range 50..80 return 65 other 
wise return 80.*/

function sum(x, y)
{
    const z = x + y;
    if ( z >= 50 && z <= 80)
    {
        return 65;
    }
    else{
        return 80;
    }
}
console.log(sum(20, 30));
console.log(sum(7, 79));
console.log(sum(55, 80));
console.log("-----35th exercise is done-----");

/* 36. Write a JavaScript program to check from two given integers 
whether one of them is 8 or their sum or difference is 8.*/

function check_integers(x, y)
{
    if ( x == 8 || y == 8)
    {
        return true;
    }
    if ( x + y == 8 || Math.abs(x - y) == 8)
    {
        return true;
    }
    return false;
}
console.log(check_integers(8, 8));
console.log(check_integers(7, 7));
console.log(check_integers(4, 3));
console.log(check_integers(0, 8));
console.log(check_integers(-8, 8));
console.log("-----36th exercise is done-----");

/* 37. Write a JavaScript program to check three given numbers, 
if the three numbers are same return 30 otherwise return 20 and if 
two numbers are same return 40.*/

function three(x, y, z)
{
    if (x == y && y == z)
    {
        return 30;
    }
    if ( x == y || y == z || x == z)
    {
        return 40;
    }
    return 20;
}

console.log(three(3, 3, 3));
console.log(three(3, 3, 2));
console.log(three(1, 3, 3));
console.log(three(3, 4, 5));
console.log("-----37th exercise is done-----");

/* 38. Write a JavaScript program to check whether three given 
numbers are increasing in strict mode or in soft mode.  
Note: Strict mode -> 10, 15, 31 : 
Soft mode -> 24, 22, 31 or 22, 22, 31*/

function number_order(x, y, z ) {
    if ( y > x && z > y) 
    {
      return "strict mode";    
    }
    else if(z > y) 
     return "Soft mode";
    else
      return "Undefinded";
  }
  
  console.log(number_order(10,15,31));
  console.log(number_order(24,22,31));
  console.log(number_order(50,21,15));
  console.log("-----38th exercise is done-----");
  
  /* 39.Write a JavaScript program to check from three given numbers 
  (non negative integers) that two or all of them have the same 
  rightmost digit.*/

  function same_last_digit(p, q, r) {
    return (p % 10 === q % 10) ||
           (p % 10 === r % 10) ||
           (q % 10 === r % 10);
           
}

console.log(same_last_digit(22,32,42));
console.log(same_last_digit(102,302,2));
console.log(same_last_digit(20,22,45));
console.log("-----39th exercise is done-----");

/* 40. Write a JavaScript program to check from three given integers 
that whether a number is greater than or equal to 20 and less than 
one of the others. */

function lessby20_others(x, y, z) 
{
return (x >= 20 && (x < y || x < z)) ||
(y >= 20 && (y < x || y < z)) ||
(z >= 20 && (z < y || z < x));
}
console.log(lessby20_others(23, 45, 10));
console.log(lessby20_others(23, 23, 10));
console.log(lessby20_others(21, 66, 75));
console.log("-----40th exercise is done-----");

/*41.Write a JavaScript program to check two given integer values 
and return true if one of the number is 15 or if their sum or 
difference is 15. */

function test_number(x, y) {
    return (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15);
}

console.log(test_number(15, 9));
console.log(test_number(25, 15));
console.log(test_number(7, 8));
console.log(test_number(25, 10));
console.log(test_number(5, 9));
console.log(test_number(7, 9));
console.log(test_number(9, 25));
console.log("-----41st exercise is done-----");

/* 42. Write a JavaScript program to check two given non-negative 
integers that whether one of the number (not both) is multiple of 7 
or 11. */

function valCheck (a, b) {
if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
}
else
return false;
}
console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(16, 20));
console.log("-----42nd exercise is done-----");

















