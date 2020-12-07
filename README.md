# Eat-Da-Burger!

Demo (https://hidden-tundra-47966.herokuapp.com/)

## Project Description

**Eat-Da-Burger!** is a restaurant application that allows users to input the names of burgers they would like to eat. Whenever a user submits a burger's name, the burger will be saved in a database and displayed on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button next to it. When the user clicks the button, the specific burger will be moved to the right side of the page.

![Screenshot](/public/assets/img/BurgerScreenshot.png)

## Table of Content

- [Project Description](#project-description)
- [Criteria](#criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)

## Criteria

This app is built based on the following **MVC design pattern**:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│  
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

## Installation

This app is created with MySQL, Node, Express, Handlebars and a homemade ORM. This app is designed to work with [Node.js](https://nodejs.org/en/). For the application to run properly, please run `npm install` to install all modules listed as dependencies in `package.json` before invoking the application.

Next, navigate to the config folder, open `connection.js`, and modify the development object's **database**, **username** and **password** values to match your MySQL database on your machine. Include the database port number, if not using the default.

Finally, run the `schema.sql` and `seeds.sql` files into the MySQL server if you do not already have relevant data to work with.

## Usage

This application utilizes MySQL, Express, and Handlebars npm packages: It uses Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

## Questions

Do you have questions or are you interested in my application? Connect with me and we can chat more!

Github: <a href="https://github.com/IreneAsay" target="_blank">IreneAsay</a>

Email Address: irene.hsu.asay@gmail.com

## License

© Irene Asay. All Rights Reserved. Under the [MIT/](./LICENSE) license.
