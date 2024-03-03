class Employee {
  //private
  #id: number;

  //protected
  protected name: string;
  address: string;

  get empId(): number {
    return this.#id;
  }

  set empId(id: number){
    this.#id = id;
  } 

  static getEmployeeCount(): number{
    return 50;
  }

  constructor(id: number, name:string, address:string) {
    this.address = address
    this.#id = id
    this.name = name;
  }

  getNameWithAddress() :string {
    return `${this.name} stays at ${this.address}`
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
    address: "Alexianer 40"
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
  constructor(id: number, name: string, address: string){
    super(id, name, address);
  }
}

let mike = new Manager(2, "Mike", "Cherise Drive");

console.log(mike.getNameWithAddress());