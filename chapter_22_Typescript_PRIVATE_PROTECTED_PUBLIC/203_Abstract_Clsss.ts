abstract class BaseTest {
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }

    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
}

class UITest extends BaseTest {
    setup(): void {
        console.log("  Setup: launch browser");
    }
    execute(): void {
        console.log("  Execute: click buttons, fill forms");
    }
    teardown(): void {
        console.log("  Teardown: close browser");
    }
}
// Create object and call methods
let test = new UITest("Login Test");

test.setup();
test.execute();
test.teardown();
export { };