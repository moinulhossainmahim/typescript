"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees);
        console.log(this.name);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super("IT", id);
        this.admins = admins;
    }
    addAdmins(admin) {
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
department.addEmployee("Moinul");
department.addEmployee("Mahim");
department.employees[2] = "Anna";
department.printEmployees();
//# sourceMappingURL=classes.js.map