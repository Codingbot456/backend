const mysql = require('mysql');
require('dotenv').config();

// Create the connection URL using string interpolation
const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT || 3306}/${process.env.MYSQLDATABASE}`;

// Parse the URL to extract connection parameters
const connection = mysql.createConnection(urlDB);

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id', connection.threadId);
});

module.exports = connection;
