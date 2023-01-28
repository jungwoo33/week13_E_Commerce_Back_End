# README by Jungwoo Lee
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

## 1. Title: week13_E_Commerce_Back_End

## 2. Table of Contents:
This readme file includes the following contents:
+ [Description](#3-description)
+ [Installation](#4-installation)
+ [Usage](#5-usage)
+ [License](#6-license)
+ [Application results](#7-application-results)
+ [Questions](#8-questions)

## 3. Description: 
Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

This application is the back end for an e-commerce, and this app utilizes the Express.js API to use Sequelize to interact with a MySQL database.

## 4. Installation:
Please make sure to have following programs installed on your computer to use this app:
+ VS Code
+ GitBash
+ Node.js
+ MySQL

To use this program, `git clone` the repo down to your local. Then, run `npm install` in order to install the `npm` package dependencies as specified in the `./package.json` - `Express.js`, `mysql2`, `sequelize`, and `dotenv` will be installed. Now, you are ready to go!

## 5. Usage:
To use this application, follow the instruction below: 
+ First, run `npm install` on your terminal, then it will install the required `npm` packages.
+ Second, let's create the database - `ecommerce_db`:
  + `mysql -u root -p`: login to `MySQL` then type the following commends:
  + `source ./db/schema.sql;`: this will create `ecommerce_db`
  + `show databases;`: Now, you will see `ecommerce_db` in the `Database` list
  + `use ecommerce_db;`: it is empty now.
  + `exit`: exit the mysql terminal
+ Third, let's include tables in the database we just created, `ecommerce_db`:
  + `node ./seeds/index.js`: this will insert the following tables in the `ecommerce_db`:
    + `category`
    + `product`
    + `product_tag`
    + `tag`
+ Now, let's run the program:
  + Set an Environmental Variable in `./.env` file:
    + `touch .env`: this will create `./.env` file
    + Now, add the following three lines in `./.env`
      + DB_NAME="ecommerce_db"
      + DB_USER="root"
      + DB_PASSWORD="your_mysql_password"
  + Then, run the program:
    + `node server.js`
  + Now, follow the instructions provided from the program.    

This project has the following directory structure:
+ ./Assets
  + week12_employee_tracker.png: this application's main page
  + week12_employee_tracker.avi: this app usage workthrough video
+ ./db
  + schema.sql: this will create a database with empty tables.
  + seeds.sql: this will insert information in tables.
+ ./.gitignore: specifies intentionally untracked files that Git should ginore
+ ./LICENSE: MIT License 
+ ./package.json: specifics of npm's package.json handling
+ ./server.js: main node.js program Javascript file


## 6. License:
### The MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

## 7. Application results:
[GitHub:] https://github.com/jungwoo33/week12_employee_tracker<br>
View walk through video here - [Screencastify](https://drive.google.com/file/d/148-KH3bSJJv1v66clEqQU3dNE9kOvg5q/view)<br>
or the original video file is in `./Assets/week12_employee_tracker.avi`<br>
[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./Assets/week12_employee_tracker.png)](https://drive.google.com/file/d/148-KH3bSJJv1v66clEqQU3dNE9kOvg5q/view)

## 8. Questions?:
If you have any questions, feel free to contact me via information below:\
[GitHub:] https://github.com/jungwoo33\
[Email:] jungwoo33@gmail.com

- - -
© 2023 Jungwoo Lee. Confidential and Proprietary. All Rights Reserved.