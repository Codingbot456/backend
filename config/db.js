const mysql = require('mysql');
require('dotenv').config();

// Create MySQL connection using MYSQL_URL from environment variables
const connection = mysql.createConnection(process.env.MYSQL_URL);

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id', connection.threadId);
});

module.exports = connection;
