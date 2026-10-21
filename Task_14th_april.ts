// TASK 1: Define interfaces for user data

interface User {
    id: number;
    name: string;
    email: string;
}

let user1: User = {
    id: 101,
    name: "Sandhya",
    email: "sandhya@example.com"
};

console.log(user1);


// TASK 2: Create interfaces with optional properties

interface Tester {
    name: string;
    experience?: number;
    automationTool?: string;
}

let tester1: Tester = {
    name: "Ravi",
    experience: 3,
    automationTool: "Playwright"
};

let tester2: Tester = {
    name: "Priya"
};

console.log(tester1);
console.log(tester2);


// TASK 3: Extend interfaces for inheritance

interface Employee {
    id: number;
    name: string;
}

interface QAEngineer extends Employee {
    testingTool: string;
    experience: number;
}

let qa1: QAEngineer = {
    id: 201,
    name: "Arun",
    testingTool: "Postman",
    experience: 4
};

console.log(qa1);


// TASK 4: Implement interfaces in classes

interface TestCase {
    testName: string;
    execute(): string;
}

class LoginTest implements TestCase {
    testName: string = "Login Test";

    execute(): string {
        return "Login test executed successfully";
    }
}

let login = new LoginTest();

console.log(login.testName);
console.log(login.execute());