# Angular Node Heroku
#### Angular UI + Bootstrap + Node/Express API + MySQL Database on Heroku

## Development Environment
Node 10.15.0
npm 6.4.1
Angular CLI 8.3.18
[Heroku](https://www.heroku.com) to run our server
[JawsDB](https://elements.heroku.com/addons/jawsdb) for MySQL on Heroku

## Heroku Notes
- You will need a (free) [Heroku](https://www.heroku.com) account
- This repo uses (free) [JawsDB](https://elements.heroku.com/addons/jawsdb) to run MySQL on Heroku

## Local Dev Notes
- When running locally, we run the Angular UI on port 4200
- When running locally, we run the Node/Express API on port 8080
- When running on Heroku, the Angular UI and the Node/Express API both run on the same port
- Your UI and API should each auto-restart when code changes are saved
- When running locally, you may setup a local MySQL database (change settings in `/api/connection.js` ) or you can [connect to your JawsDB locally](https://devcenter.heroku.com/articles/jawsdb#local-setup)

## Adding new API Endpoint
1. Create a new file in the `/api/routes/` directory
1. Add the new file as middleware in

## Initial Setup

**Install Node & NPM**
Download the installer from [Node.js Website](https://nodejs.org/en/). This will install both Node and NPM.

To check your versions:
```sh
node -v
npm -v
```

**Install Angular CLI**
```sh
npm install -g @angular/cli
```
[Angular CLI Website](https://cli.angular.io)

**Run NPM Install on the repo**
```sh
cd my/local/directory
npm install
```

## Create a Heroku App
1. Create a [Heroku](https://www.heroku.com) account
1. Create your a new app on Heroku
1. Link your local repo to Heroku by following the instructions that are presented after you create your app on Heroku
1. Once your Heroku app is setup and linked, you can deploy your repo to Heroku using `git push heroku master`

## MySQL Database
**To run your MySQL Database on Heroku**
Use JawsDB
1. Go to the [JawsDB Homepage](https://elements.heroku.com/addons/jawsdb)
1. Click the `Install JawsDB MySQL` button

**To run your MySQL database locally**
Mac:
1. [Install Homebrew](https://brew.sh)
1. Install MySQL `brew install mysql`
1. Install Brew Services `brew tap homebrew/services`
1. Start MySQL `brew services start mysql`
Related Resources:
- [Homebrew](https://brew.sh)
- [Using Brew Services](https://thoughtbot.com/blog/starting-and-stopping-background-services-with-homebrew)
- [How to Reset MySQL Root Password](http://www.ihp.sinica.edu.tw/dashboard/docs/reset-mysql-password.html)

Other Platforms:
- [MySQL Homepage](https://dev.mysql.com)
- [MySQL on Windows](https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html)

If you get errors when calling the Node API that say `ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol...`
```SQL
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'newrootpassword';

FLUSH PRIVILEGES;
```

**Create and Use Your 'heroku' Database**
```SQL
CREATE DATABASE heroku;

USE heroku;
```

**Create Your 'test' Table**
```SQL
CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(45) NULL,
  PRIMARY KEY (`id`)
);
```

**MySQL Sample Data for 'test' Table**
```SQL
INSERT INTO `test` (`id`,`value`) VALUES (1,'dog');
INSERT INTO `test` (`id`,`value`) VALUES (2,'cat');
INSERT INTO `test` (`id`,`value`) VALUES (3,'snake');
INSERT INTO `test` (`id`,`value`) VALUES (4,'goat');
INSERT INTO `test` (`id`,`value`) VALUES (5,'whale');
INSERT INTO `test` (`id`,`value`) VALUES (6,'cow');
INSERT INTO `test` (`id`,`value`) VALUES (7,'pig');
INSERT INTO `test` (`id`,`value`) VALUES (8,'bear');
INSERT INTO `test` (`id`,`value`) VALUES (9,'frog');
INSERT INTO `test` (`id`,`value`) VALUES (10,'bird');
INSERT INTO `test` (`id`,`value`) VALUES (11,'elephant');
```

**Create Your 'user' Table**
```SQL
CREATE TABLE `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `email` VARCHAR(100) NULL,
  `password` VARCHAR(100) NULL,
  `token` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

```

```SQL
INSERT INTO `user`
SET `email` = 'email@something.com',
    `password` = '$2y$10$5Kbn3DtyfYrVUytDQp/WzeMxkHbzVjjbw3jsw7pcnMRI5mEUZ61By';
```

This password value is hashed using bcrypt. You can then use `abc123` as your password, to login with this user.

## Running Servers Locally
This boilerplate uses scripts to start the local Angular UI, Node/Express API ...
1. In your Terminal, use `npm run localng` to start the local Angular UI on port 4200
1. In a separate Terminal, use `npm run localapi` to start the local Node/Express API on port 8080
1. In a separate Terminal, use `brew services start mysql` to start the local MySQL server

- You should be able to view your Angular UI at `http://localhost:4200`
- You should be able to make a GET request to your Node/Express API at `http://localhost:8080/api/list`
- You should be able to connect directly to your MySQL Database using [MySQL Workbench](https://www.mysql.com/products/workbench/) or another database tool

## Running on Heroku
- When you deploy to Heroku
