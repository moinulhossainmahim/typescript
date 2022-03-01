abstract class Department {
  employees: string[] = [];
  constructor(private name: string, protected readonly id: string) {}

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployees() {
    console.log(this.employees);
    console.log(this.name);
  }

  abstract describe(this: Department): void;
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super("IT", id);
  }
  addAdmins(admin: string) {
    this.admins.push(admin);
  }
  printEmployees() {
    console.log(this.admins);
  }
  describe() {
    console.log(`Department ID: ${this.id}`);
  }
}

const department = new ITDepartment("d1", ["Moinul", "Mahim"]);
console.log(department);
department.printEmployees();
department.describe();

// const departmentCopy = { name: "Test", age: 20, describe: department.describe };
// departmentCopy.describe();

department.addEmployee("Moinul");
department.addEmployee("Mahim");
department.employees[2] = "Anna";
department.printEmployees();
