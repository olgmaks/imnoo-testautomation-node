import { $, ElementFinder, element, By } from "protractor";

export class LoginPage {

    public loginInput: ElementFinder;
    public passwordInput: ElementFinder;
    public submitButton: ElementFinder;

    constructor() {
        this.loginInput = $("[name='email']");
        this.passwordInput = $("[name='password']");
        this.submitButton = element(By.xpath("//*[@class='auth0-lock-submit']"));
    }
}