//use can use ? for optional parameter
function add(num1: number, num2: number, num3?: number) : any {
  return num3? num1 + num2 + num3: num1 + num2;
}

//required parameter
const sub = (num1: number, num2: number, num3 = 10) : number => num1 - num2 - num3;
const mult = function(num1: number, num2: number) : number {
  return num1*num2
} 

//rest parameter
function add2(num1: number, num2: number, ...num3: number[]) : number {
  return num1 + num2 + num3.reduce((a,b) => a+ b)
}

function add3(...num_array: number[]): number {
  return num_array.reduce((a,b) => a+ b)
}

function getItems<T>(items: T[]): T[]{
  return new Array<T>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5])
let concatString = getItems<string>(["a", "b", "c", "d", "e"])

console.log(add2(2,3,...[4,5,6]))
console.log(add3(1,2,3))
console.log(concatString)
