import { $, ElementFinder, element, By } from "protractor";

export class DashboardPage {

    constructor(
        public userEmailLink: ElementFinder = element(By.xpath("//*[contains(@class, 'header-navigation-user-toggle')]"))
    ){}
}