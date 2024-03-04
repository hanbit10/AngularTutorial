"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = { name: "Hanbit", id: 1, email: "chanbit@gmail.com" };
let emplyee = { name: "John", id: 1, email: "", salary: 1000 };
let [...users] = [
    {
        id: 1,
        name: "John",
        email: "",
    },
    {
        id: 2,
        name: "Hanbit",
        email: ""
    },
    {
        id: 3,
        name: "Hansam",
        email: ""
    },
    {
        id: 4,
        name: "Hansam",
        email: ""
    }
];
let result = users.filter(user => user.id > 2);
console.log(result);
// @Component({
// class Component {
//   constructor(public name:string)
// }
// })
//# sourceMappingURL=interface.js.map