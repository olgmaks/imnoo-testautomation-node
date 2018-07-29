# imnoo-testautomation-node

### Pre-requisites:
 
 - install node (https://nodejs.org/en/)
 - install Google Chrome browser
 - Install dependencies:
    ```
    npm install
    ``` 



### Init env:

 - Update webdriver (command will download last selenium server):
    ```
    npm run-script webdriver-update
    ```
 - Start webdriver (command will start selenium server):
    ```
    npm run-script webdriver-start
    ```

### Run tests:

-  Launch protractor tests:

    ```
    npm test
    ```

- Testing report will be automatically generated in **./report/html/cucumber_reporter.html**    

