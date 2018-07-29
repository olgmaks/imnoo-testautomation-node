const { BeforeAll, After, AfterAll, Status } = require("cucumber");
import { setDefaultTimeout, Before } from "cucumber";
import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/config";

BeforeAll({timeout: 100 * 1000}, async () => {
    setDefaultTimeout(60 * 1000);
});

Before(async () => { 
    await browser.manage().window().maximize();
    await browser.manage().timeouts().implicitlyWait(30000); 
});


After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }

    await browser.manage().deleteAllCookies();
    await browser.executeScript('window.sessionStorage.clear();');
    await browser.executeScript('window.localStorage.clear();');
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});
