"use strict";
//Typescript doesnt allow this
let lname = "John";
// lname = 10;
lname = "Hanbit";
let newname = lname.toUpperCase();
let age = 20;
age = 25.5;
// age = "25";
//convert to number
let dob = "25";
let result = parseInt(dob);
let isValid = true;
//they mean the same
let empList = [];
empList = ["hallo", "this", "is"];
let depList = [];
let numList;
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
//get the element value when it exists
let res = numList.find((num) => num === 2);
let res_string = empList.find((emp) => emp === "is");
let sum = numList.reduce((acc, num) => acc + num);
let c = 2 /* Color.Blue */;
let newNum = numList[5];
//tuples
let swapNumbs = [2];
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
let department;
department = "IT";
department = 10;
console.log(c, "\n");
// console.log(res_string);
