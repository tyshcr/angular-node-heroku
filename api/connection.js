const mysql = require('mysql');
require('dotenv').config()

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: (process.env.JAWSDB_HOST_4 || 'localhost'),
        user: (process.env.JAWSDB_USER_4 || 'root'),
        password: (process.env.JAWSDB_PASSWORD_4 || 'newrootpassword'),
        database: (process.env.JAWSDB_DATABASE_4 || 'heroku'),
        port: (process.env.JAWSDB_PORT_4 || 3306)
    });
};

module.exports = connection;
