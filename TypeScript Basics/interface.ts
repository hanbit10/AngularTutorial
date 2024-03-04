//interfaces doesnt exists in JS and when using the express and so, it will disappear so use class
export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

let {name: userName, email: userLogin} : User = {name: "Hanbit", id: 1, email: "chanbit@gmail.com"}

interface Employees extends User {
  salary: number;
}

let emplyee: Employees = {name: "John", id: 1, email: "", salary: 1000}

export interface Login {
  login(): User;
}

let [...users]: User[] = [
  {
    id: 1,
    name: "John",
    email: "",
  },
  {
    id:2,
    name: "Hanbit",
    email:""
  },
  {
    id:3,
    name: "Hansam",
    email:""
  },
  {
    id:4,
    name: "Hansam",
    email:""
  }
]

let result = users.filter(user => user.id > 2)

console.log(result)

// @Component({
// class Component {
//   constructor(public name:string)
// }
// })