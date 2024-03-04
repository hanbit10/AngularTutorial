"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        //private
        _Employee_id.set(this, void 0);
        this.address = address;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    static getEmployeeCount() {
        return 50;
    }
    login() {
        return { name: "Hanbit", id: 1, email: "chanbit@gmail.com" };
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address.street}`;
    }
}
_Employee_id = new WeakMap();
let data = [
    {
        id: 1,
        name: "John",
        address: "Highway 71",
    },
    {
        id: 2,
        name: "Hanbit",
        address: {
            street: "Alexianer 40",
            city: "Aachen",
            state: "Germany",
        }
    }
];
// Employee.getEmployeeCount();
let employees = [];
for (let item of data) {
    employees.push(new Employee(item.id, item.name, item.address));
}
// Use the map method to create Employee instances
let employees_map = data.map(item => new Employee(item.id, item.name, item.address));
// instead of writing down all the values, write it in parameters
// john.id = 1;
// john.name = 'John';
// john.address = 'Highway 71';
let hanbit = employees[1];
let john = employees_map[1];
john.empId = 100;
console.log(john.empId);
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
console.log(hanbit.getNameWithAddress());
//# sourceMappingURL=class.js.map