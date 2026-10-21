import { chromium } from "playwright";

async function main() {
    const browser = await chromium.launch({
        headless: false
    });

    // SCENARIO 1: One browser, multiple contexts, multiple pages

    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const page1 = await context1.newPage();
    const page2 = await context1.newPage();

    const page3 = await context2.newPage();
    const page4 = await context2.newPage();

    await page1.goto("https://example.com");
    await page2.goto("https://playwright.dev");

    await page3.goto("https://example.com");
    await page4.goto("https://playwright.dev");

    console.log("Scenario 1: Multiple contexts and pages");

    console.log("Context 1, Page 1:", await page1.title());
    console.log("Context 1, Page 2:", await page2.title());

    console.log("Context 2, Page 1:", await page3.title());
    console.log("Context 2, Page 2:", await page4.title());


    // SCENARIO 2: One browser context, multiple pages

    const context3 = await browser.newContext();

    const page5 = await context3.newPage();
    const page6 = await context3.newPage();

    await page5.goto("https://example.com");
    await page6.goto("https://playwright.dev");

    console.log("Scenario 2: Same context, multiple pages");

    console.log("Page 1:", await page5.title());
    console.log("Page 2:", await page6.title());

    await browser.close();
}

main();