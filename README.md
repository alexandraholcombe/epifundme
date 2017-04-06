# EpiFundMe

#### _CrowdFunding website built with AngularCLI_

#### By _**Alexandra Holcombe & Tammy Dang**_



## Planning
### **1.  Configuration/Dependencies**  
  * angular-cli, used for project generation and commands
  * bower
  * bootstrap
  * typescript

### **2.  Specs**  

  **The user can see a list of all projects.**  

  **The user can click on a project to see the project's details on a new page.**  

  **The user can filter projects based on funded/not-funded.**  

  **The user can click on a button to fill out a form to contribute to the project.**


### **3.  Integration**  

> **Components**  
  * home
  * fundraiser-details
  * funding-info (contains goal/current contributions)
  * fundraiser-info
  * contributions-list
  * single-contribution
  * make-contribution
  * contribution-form
  * organizer-info

> **Views**
  * home
  * fundraiser-details
  * make-contribution

> **Models**  
  * fundraiser
  * contribution  

> **Pipes**
  * fundingStatus

### **4.  UX/UI**  
  * Uses SASS & Bootstrap

### **5.  Polish**  
  * See if refactoring is needed
  * Delete unused code
  * Revisit README
  * Clone project from github to ensure works correctly!!

***

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
