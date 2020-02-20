# Test Automation for Web-applications with TypeScript

## Protractor
This is the basic configurations for writing tests using Protractor+Jasmine.
It includes the following packages:
* protractor
* jasmine
* typescript
* ts-node
* jasmine-spec-reporter
* protractor-jasmine2-html-reporter

Next scripts run protractor and webdriver-manager as prerun hook:
* ```"pree2e-tests": "node ./node_modules/protractor/bin/webdriver-manager update"```
* ```"e2e-tests": "protractor protractor.conf.js"```

#### Instructions:
1. Install packages: 
```npm ci```
2. Run tests: ```npm run e2e-tests```

## Cypress
This is the basic configurations for writing tests using Cypress + TypeScript.
It includes the following packages:
* cypress
* @cypress/webpack-preprocessor
* typescript
* ts-loader
* webpack

Next scripts are available:
* ```"cy:open": "cypress open"```: to run tests in TestRunner;
* ```"cy:run": "cypress run"```: to run tests in headless mode;
* ```"cy:verify": "cypress verify"```: to verify that Cypress is installed correctly and is executable;
* ```"cy:version": "cypress version"```: to check Cypress version

                     
#### Instructions:
1. Install packages: 
```npm ci```
2. Run tests: ```npm run cy:open```

###### Note: tslint is already included to the project.
