# Meanstack247

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.
This project was built with a MEAN Stack (MongoDB Express.js Angular7 and NodeJS)

I managed to create the list with order and pagination which is not required but i thought it's a plus
I managed to add the "Add User" Feature in order to make easy to add users into the mongoDB instead of running a script

If you prefer to run just the script to create the users you can do it using a script like this:

db.names.insertMany([
   { personName: 'Test name1'},
   { personName: 'Test name2'},
])

## Installation
1. Clone project
2. run npm install
3. run npm install --save express body-parser cors mongoose
4. npm install nodemon --save-dev
5. Install MongoDB

## Development server

1. Run the mongoDB
2. Run the nodeJS API using npm run serve 
3. Run the App using ng serve

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Note: The Unit tests are working and i managed to do the majority of them in order to show that i know how to implement them.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
