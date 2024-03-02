//Typescript doesnt allow this
let lname: string = "John";
// lname = 10;
lname = "Hanbit";
let newname = lname.toUpperCase();

let age: number = 20;

age = 25.5;

// age = "25";

//convert to number
let dob = "25";
let result = parseInt(dob);

let isValid: boolean = true;

//they mean the same
let empList: string[] = [];

empList = ["hallo", "this", "is"];
let depList: Array<string> = [];

let numList: Array<number>;
numList = [1, 2, 3, 4, 5];

let results = numList.filter((num) => num > 2);
//get the element value when it exists
let res = numList.find((num) => num === 2);
let res_string = empList.find((emp) => emp === "is");
let sum = numList.reduce((acc, num) => acc + num);

const enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue;

let newNum = numList[5];
//tuples
let swapNumbs: number[] =[2];
function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1]
}

swapNumbs = swapNumbers(10,20)
swapNumbs[0];
swapNumbs[1];

let department: any;

department = "IT";
department = 10;

function add(num1: number, num2: number) : any {
  return num1 + num2;
}


console.log(c, "\n");
// console.log(res_string);
