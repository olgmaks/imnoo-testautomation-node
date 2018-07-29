import { $,$$, ElementFinder, ElementArrayFinder, element, By } from "protractor";

export class AdminCustomerPage {

    constructor(
        public plusButton: ElementFinder = element(By.xpath("//*[@class='admin-page-header']/im-button")), 
        public customerModalPopup: ElementFinder = element(By.xpath("//*[@class='customer-modal']//*[contains(@class,'im-modal-content')]")), 
        public abortCreateNewCustomerButton: ElementFinder = element(By.xpath("//*[@class='customer-modal']//button[contains(@class, 'color-default')]")), 
        public paginationLinks: ElementArrayFinder = element.all(By.xpath("//*[@class='im-pagination']//*[contains(@class, 'page-number')]/..")) 
    ) {}
}