import { Employee } from "./employee";

class QAEngineer extends Employee {

    public showQAInfo(): void {
        console.log("QA Engineer:", this.name);
        console.log("Salary:", this.salary);

        // console.log(this.password); // Error: private
    }
}

let emp = new Employee();

console.log(emp.name); // Allowed

// console.log(emp.salary);   // Error: protected
// console.log(emp.password); // Error: private

emp.showDetails();

let qa = new QAEngineer();

qa.showQAInfo();

// console.log(qa.salary); // Error: protected