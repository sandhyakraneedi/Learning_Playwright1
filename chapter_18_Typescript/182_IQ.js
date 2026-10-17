"use strict";
let statusCode = [200, 201, 404, 500];
let testSuites = ["Smoke", "Regression", "Sanity"];
console.log("Status codes:", statusCode);
console.log("Suites:", testSuites);
let testResult = {
    name: "Login Test",
    status: "PASS",
    duration: 1200
};
console.log(testResult.name + " → " + testResult.status + " (" + testResult.duration + "ms)");
