"use strict"
// 1. Reversing a string
// First I need to create a function that takes in a string. 
// Second I need to figure out how to reverse the string.
// Third I need to return the reversed string.
let string1 = prompt("What word would you like reversed?");
let returnString = [];
function ReverseString (string){
    for (let i=string.length - 1; i>= 0; i--){
        returnString.push(string[i]);
    };
    console.log(returnString);
};
ReverseString(string1);
// 2. Capitalize a letter
// First I need to create a function that takes in a string.
//Second I need to target every letter that comes after a space.
//Third Ill need to change the targeted letters to uppercase.
// Last thing is ill need to return the new string.
let string2 = prompt("I will capitalize all the first letters for you!");
let returnString2 = [];
function Capitalize (string){
    for (let i=0; i<string.length; i++){
        if ( i === 0){
            returnString2.push(string[i].toUpperCase())
        }else if (string[i-1] === " "){  
            returnString2.push(string[i].toUpperCase())
        }else returnString2.push(string[i]);
    };
    console.log(returnString2);
};
Capitalize(string2);
// 3. Compress a string of characters
//First I need to create a function that takes in a string
//Next ill need to figure out how to track if a letter is repeated and also how many times its repeated
//then ill need to add in the number of times its repeated while also taking out the extra letters.
let stringToCompress = prompt("Type a string to compress")
let returnString4 = "";
let counter = 1;
function Compress(string){
    for (let i=0; i<string.length; i++){
        let cur = string[i];
        let next = string[i+1];
        if (cur === next){
            counter ++;  
        }else {
        returnString4 = returnString4 + counter + string[i];
        counter = 1;
    };  
};
console.log(returnString4);
};
Compress(stringToCompress);
// Bonus challenge: Palindrome 
// For this problem Im thinking that Ill be able to use problem one and rework it so that 
// once it runs the function from the first problem ill check to see if it equalls the original string.
let string3 = prompt("What string would you like to check");
let returnString3 = "";
function ReverseString3 (string){
    for (let i=string.length - 1; i>= 0; i--){
        returnString3 = returnString3 + string[i];
    };
   if (returnString3 === string){
    console.log('Palindrome')
   }else console.log('Failed Test')
};
ReverseString3(string3);
