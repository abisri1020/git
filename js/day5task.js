// 1.a.
// print the odd numbers in an array
// anonymous function
let odd = function(oda) //function declaration with array as its parameter
    {
        let result = oda.filter(value => value % 2 == 1); //odd condition using filter function
        return result; //returning the result
    }
console.log(odd([1, 2, 3, 4, 5, 6, 7, 8])); // function calling
// iife
(function(odi) //function declaration
    {
        let result = odi.filter(value => value % 2 !== 0); //odd condition using filter function
        console.log(result); //printing output
    })([1, 2, 3, 4, 5, 6, 7, 8]); // function calling
//1.b.
// Convert all the strings to title caps in a string array
// Anonymous function
let title_capsa = function() { //function declaration
    let stra1 = ['guvi', 'geeks', 'chennai', 'zen']; //input array
    let caps = stra1.map(name => name.toUpperCase()); //changing all input into upper case using map
    return caps; //returning the output
}
console.log(title_capsa()); //function calling
// iife
(function() { //function declaration
    let stra2 = ['guvi', 'geeks', 'chennai', 'zen']; //input array
    let caps = stra2.map(name => name.toUpperCase()); //changing all input into upper case using map
    console.log(caps); //printing output
})(); //function calling
// 1.c.
// Sum of numbers in the array
//anonymous
var s = function() { //function declaration
    let arr = [1, 2, 3, 4]; //input array
    let sum = arr.reduce((acc, ele) => acc + ele); //finding the sum of elements in array with reduce function
    return (sum); //returning the output
}
console.log(s()); //function calling
//IIFE
(function() { //function declaration
    let arr = [1, 2, 3, 4];
    let sum = arr.reduce((acc, ele) => acc + ele); //finding the sum of elements in array with reduce function
    console.log(sum); //printing output
})(); //function calling
//1.d.
//return all the prime numbers in the array
//anonymus function
let prime = function(pa) { //function declaration
    let temp1a = []; //temp array to store the output
    for (let i = 0; i < pa.length; i++) { //to iterate through the elements in the array
        let count1a = 0; //intial count is 0
        for (let j = 2; j < pa[i]; j++) { //iterate the number to check prime or not 
            if (pa[i] % j === 0) //check divisibility 
                count1a++; //if true add count by 1
        }
        if ((count1a === 0) && (pa[i] != 1)) //check if nothing is divisible as count is 0 and input not 1
            temp1a.push(pa[i]); // then push in that temp array
    }
    return temp1a; //returning the output
}
console.log(prime([1, 2, 3, 15, 7, 9, 17, 23, 45])); //function calling
//iife
(function(pi) { //function declaration
    let temp1a1 = []; //temp array to store the output
    for (let i = 0; i < pi.length; i++) { //to iterate through the elements in the array
        let count1a1 = 0; //intial count is 0
        for (let j = 2; j < pi[i]; j++) { //iterate the number to check prime or not 
            if (pi[i] % j === 0) //check divisibility 
                count1a1++; //if true add count by 1
        }
        if ((count1a1 === 0) && (pi[i] != 1))
            temp1a1.push(pi[i]);
    }
    console.log(temp1a1) //printing output
})([1, 2, 3, 15, 7, 9, 17, 23, 45]); //function calling
//1.e. 
// return all the palindrome in the array
//anonymous
let palin = function(stra) { //function declaration
    // find the length of a string
    let temp2a = []; //temp array to store the output
    for (let i = 0; i < stra.length; i++) { //to iterate through the elements in the array
        let s = stra[i], //storing each string one by one to s
            l = s.length; // string length
        let mid = Math.floor(l / 2); //to find the middle alphabet
        let count2a = 0; //initial count is 0
        for (let j = 0; j < mid; j++) { //iterating till the middle alphabet of the word
            // check if first and last string are same
            if (s[j] !== s[l - 1 - j])
                count2a++; //if not same add count
        }
        if (count2a === 0) //if count is 0 means its palindrome
            temp2a.push(s) //if true push the result i n temp array
    }
    return temp2a; //returning the output
}
console.log(palin(['eye', 'nose', 'ladder', 'radar'])); //function calling
// iife
(function(stri) { //function declaration
    let temp2a = [];
    for (let i = 0; i < stri.length; i++) {
        let s = stri[i],
            l = s.length;
        let mid = Math.floor(l / 2);
        let count2a = 0;
        for (let j = 0; j < mid; j++) {
            // check if first and last string are same
            if (s[j] !== s[l - 1 - j])
                count2a++;
        }
        if (count2a === 0)
            temp2a.push(s)
    }
    console.log(temp2a); //printing output
})(['eye', 'nose', 'ladder', 'radar']); //function calling
// 1.f.
// Return median of two sorted arrays of same size
// anonymous
let median = function(a, b) { //function declaration
    //Sort the array
    let c = [...a, ...b].sort((a, b) => a - b);
    //Get the floor value
    const mid = Math.floor(c.length / 2);
    return (c[mid] + c[mid - 1]) / 2; //returning the output it is the fromuala for meadian of 2 array
}
console.log(median([1, 2, 3], [2, 4, 5])); //function calling
// iife
(function(a, b) { //function declaration
    //Sort the array
    let c = [...a, ...b].sort((a, b) => a - b);
    //Get the floor value
    const mid = Math.floor(c.length / 2);
    console.log(c[mid] + c[mid - 1]) / 2; //printing output
})([1, 2, 3], [2, 4, 5]); //function calling
// 1.g.
// remove all duplicates from an array
// anonymous
let duplicate = function(chars) { //function declaration
    let result = [...new Set(chars)]; // set keyword removes the duplicates from array 
    return result; //returning the output
}
console.log(duplicate(['a', 'a', 'b', 'b', 's', 'j'])); //function calling
// iife
(function(chars) { //function declaration
    let result = [...new Set(chars)];
    console.log(result); //printing output
})(['a', 'a', 'b', 'b', 's', 'j']); //function calling
// 1.h.
// Rotate an array by k times
// anonymous
let rotateArray = function(nums, k) { //function declaration
    for (let i = 0; i < k; i++) { //loop to rotate k times
        nums.unshift(nums.pop()); //rotating 
    }
    return nums; //returning the output
}
console.log(rotateArray([1, 2, 3, 4, 5, 6], 3)); //function calling
// iife
(function(nums, k) { //function declaration
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    console.log(nums); //printing output
})([1, 2, 3, 4, 5, 6], 3) //function calling
// 2.link questions:
// 1.
// Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.
// Input:
// addFive(5);
// addFive(0);
// addFive(-5);
// Output:
// 10
// 5
// 0
var num = 10;

function addFive(num) {
    return num + 5
}
var result = addFive(num);
console.log(addFive(5));
console.log(addFive(0));
console.log(addFive(-5));
// 2.
// Fill in your code that takes an number minutes and converts it to seconds.
// Examples
// toSeconds(5) ➞ 300
// toSeconds(3) ➞ 180
// toSeconds(2) ➞ 120
var min = 5;

function toSeconds(min) {
    return min * 60
}
var secs = toSeconds(min);
console.log(toSeconds(5));
console.log(toSeconds(3));
console.log(toSeconds(2));
// 3.
// Create a function that takes a string and returns it as an integer.
// Examples
// toInteger(“6”) ➞ 6
// toInteger(“1000”) ➞ 1000
// toInteger(“12”) ➞ 12
var mystr = "5";

function toInteger(mystr) {
    return parseInt(mystr)
}
var myint = toInteger(mystr);
console.log(toInteger("6"));
console.log(toInteger("1000"));
console.log(toInteger("12"));
// 4.
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// Examples
// nextNumber(0) ➞ 1
// nextNumber(9) ➞ 10
// nextNumber(-3) ➞ -2
var myint = 0;

function nextNumber(myint) {
    return myint + 1;
}
var myNextint = nextNumber(myint);
console.log(nextNumber(0));
console.log(nextNumber(9));
console.log(nextNumber(-3));
// 5.
// Create a function that takes an array and returns the first element.
// Examples
// getFirstElement([1, 2, 3]) ➞ 1
// getFirstElement([80, 5, 100]) ➞ 80
// getFirstElement([-500, 0, 50]) ➞ -500
var arr = [1, 2, 3];

function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr);
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement([80, 5, 100]));
console.log(getFirstElement([-500, 0, 50]));
// 6.
// Write a function that converts hours into seconds.
// Examples
// hourToSeconds(2) ➞ 7200
// hourToSeconds(10) ➞ 36000
// hourToSeconds(24) ➞ 86400
function hourToSeconds(arr1) {
    return arr1 * 3600
}
console.log(hourToSeconds(2));
console.log(hourToSeconds(10));
console.log(hourToSeconds(24));
// 7.
// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.
// Examples
// findPerimeter(6, 7) ➞ 26
// findPerimeter(20, 10) ➞ 60
// findPerimeter(2, 9) ➞ 22
function findPerimeter(num1, num2) {
    return 2 * (num1 + num2);
}
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));
// 8.
// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117
function lessThan100(num1, num2) {
    if (num1 + num2 < 100)
        return true;
    else
        return false;
}
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
// 9.
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// Examples
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0
function remainder(num1, num2) {
    return num1 % num2
}
console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));
// 10.
// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
// Examples
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false
function divisibleByFive(num1) {
    if (num1 % 5 === 0)
        return true;
    else
        return false;
}
console.log(divisibleByFive(5))
console.log(divisibleByFive(-55))
console.log(divisibleByFive(37))

// 3.a.
// print the odd numbers in an array
// arrow function
let odd1 = (od) => { //function declaration with array as its parameter
    let result = od.filter(value => value % 2 == 1); //odd condition using filter function
    return result; //returning the result
}
console.log(odd1([1, 2, 3, 4, 5, 6, 7, 8])); // function calling
//3.b.
// Convert all the strings to title caps in a string array
// arrow function
let title_capsa1 = () => {
    let stra1 = ['guvi', 'geeks', 'chennai', 'zen'];
    let caps = stra1.map(name => name.toUpperCase());
    return caps;
}
console.log(title_capsa1());
// 3.c.
// Sum of numbers in the array
//arrow function
var s = () => {
    let arr = [1, 2, 3, 4];
    let sum = arr.reduce((acc, ele) => acc + ele);
    return (sum);
}
console.log(s());
//3.d.
//return all the prime numbers in the array
//arrow function
let prime1 = (pa) => {
    let temp1a = [];
    for (let i = 0; i < pa.length; i++) {
        let count1a = 0;
        for (let j = 2; j < pa[i]; j++) {
            if (pa[i] % j === 0)
                count1a++;
        }
        if ((count1a === 0) && (pa[i] != 1))
            temp1a.push(pa[i]);
    }
    return temp1a;
}
console.log(prime1([1, 2, 3, 15, 7, 9, 17, 23, 45]));
//3.e. 
// return all the prime numbers in the array
//arrow function
let palin1 = (stra) => {
    // find the length of a string
    let temp2a = [];
    for (let i = 0; i < stra.length; i++) {
        let s = stra[i],
            l = s.length;
        let mid = Math.floor(l / 2);
        let count2a = 0;
        for (let j = 0; j < mid; j++) {
            // check if first and last string are same
            if (s[j] !== s[l - 1 - j])
                count2a++;
        }
        if (count2a === 0)
            temp2a.push(s)
    }
    return temp2a;
}
console.log(palin1(['eye', 'nose', 'ladder', 'radar']));
// 3.f.
// Return median of two sorted arrays of same size
// arrow function
let median1 = (a, b) => {
    //Sort the array
    let c = [...a, ...b].sort((a, b) => a - b);
    //Get the floor value
    const mid = Math.floor(c.length / 2);
    return (c[mid] + c[mid - 1]) / 2;
}
console.log(median1([1, 2, 3], [2, 4, 5]));