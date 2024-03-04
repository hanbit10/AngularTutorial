import { Login, User } from "./interface";
// import * as UserLogin from './interface'

interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}
class Employee implements Login {
  //private
  #id: number;

  //protected
  protected name: string;
  // address: {
  //   street: string;
  //   city: string;
  //   state: string;
  //   pin: string;
  // };
  address: Address;

  get empId(): number {
    return this.#id;
  }

  set empId(id: number){
    this.#id = id;
  } 

  static getEmployeeCount(): number{
    return 50;
  }

  constructor(id: number, name:string, address:Address) {
    this.address = address
    this.#id = id
    this.name = name;
  }

  login(): User {
    return{name: "Hanbit", id: 1, email: "chanbit@gmail.com"}
  }

  getNameWithAddress() :string {
    return `${this.name} stays at ${this.address.street}`
  }
}

let data: any[] = [
  {
    id: 1,
    name: "John",
    address: "Highway 71",
  
  },
  {
    id:2,
    name: "Hanbit",
    address: {
      street:"Alexianer 40", 
      city: "Aachen", 
      state:"Germany",
    }
  }
] 

// Employee.getEmployeeCount();

let employees: Employee[] = []

for(let item of data) {
  employees.push(new Employee(item.id, item.name, item.address));
}

// Use the map method to create Employee instances
let employees_map: Employee[] = data.map(item => new Employee(item.id, item.name, item.address));

// instead of writing down all the values, write it in parameters
// john.id = 1;
// john.name = 'John';
// john.address = 'Highway 71';

let hanbit = employees[1]
let john = employees_map[1]

john.empId = 100

console.log(john.empId)

class Manager extends Employee {
  constructor(id: number, name: string, address: Address){
    super(id, name, address);
  }
}

console.log(hanbit.getNameWithAddress());