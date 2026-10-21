export class Employee {
    public name: string = "Sandhya";
    protected salary: number = 50000;
    private password: string = "abc123";

    public showDetails(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Password:", this.password);
    }
}