const mysql = require('mysql');
require('dotenv').config();

// Create the connection URL using string interpolation
const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT || 3306}/${process.env.MYSQLDATABASE}`;

// Create the MySQL connection
const connection = mysql.createConnection(urlDB);

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to server');
    console.log('Connected to the database as id', connection.threadId);
});

// Export the connection for external usage
module.exports = connection;
