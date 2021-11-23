# E-commerce BackEnd ![GitHub license](https://img.shields.io/badge/license-MIT%20License-blue.svg)
# Live Site
https://github.com/mibrahim234/E-Commerce-Back-End
## Description 
This is a backend for an e-commerce website that uses the latest technologies. 
The database is built with sequelize and mysql. 
The app uses CRUD methods, models, seeds, and routes. 
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install this application go to https://github.com/mibrahim234/E-Commerce-Back-End. Clone the repo by pressing the green button. User can clone using an SSH key or HTTPS key. User will also be able to download the zip file. User should open the integrated terminal from the index.js file and download the dependencies by typing npm i. npm i will install the dependencies and devdependencies from this application. 
The dependencies are express, sequelize, mysql2, dotenv.
## Usage 
Add your database name, MySQL username, and MySQL password to the environment variable file to be able to connect to the database using Sequilize. <br>
Enter Schema and Seed commands so the development database is created and seeded with test data. <br>
Start the app with npm start. <br>



## Config 
DB_NAME=ecommerce_db
DB_USER=root
DB_PW=password

## Seed
npm run seed <br>
After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

## Start Server
npm start or node server.js 

## Mock-Up

The following animations show examples of the application's API routes being tested in Insomnia Core.

The first animation shows GET routes to return all categories, all products, and all tags being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The second animation shows GET routes to return a single category, a single product, and a single tag being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The final animation shows the POST, PUT, and DELETE routes for categories being tested in Insomnia Core:

![In Insomnia Core, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

Here are the links of me testing the product: 
Get A single Product Route: https://drive.google.com/file/d/1qCGqAEsT1Iat3CG1ZvP0onmRcr_28a84/view

Post-Put-Delete: https://drive.google.com/file/d/1nEZXGOp92uxqGgTX-Oq36uYeloozeT7z/view?usp=sharing

Get All Product Route: https://drive.google.com/file/d/1gaqRmr8G5uMr0cBh_fRRYeKfn4KenSFt/view


## License
Copyright (c) [2021]
The license is MIT License. 
Read more about it at https://opensource.org/licenses/MIT.
## Credits
Made with ❤️ by Mohammad Ibrahim
## Tests
Test out routes in Insomnia Core for categories, products, or tags. The data for each of these routes is displayed in a formatted JSON. <br>
Test out API POST, PUT, and DELETE routes in Insomnia Core
and you will be able to successfully create, update, and delete data in my database.
## Questions
If you have any additional questions please contact me at mohamm1417@gmail.com.
GitHub: https://github.com/mibrahim234
