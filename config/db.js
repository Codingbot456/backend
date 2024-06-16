const mysql = require('mysql');
require('dotenv').config();

// Create the connection URL using string interpolation
const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT || 3306}/${process.env.MYSQLDATABASE}`;

// Parse the URL to extract connection parameters using URL module
const { hostname: host, port, username: user, password, pathname } = new URL(urlDB);
const database = pathname.split('/')[1];

const pool = mysql.createPool({
    host,
    user,
    password,
    database,
    port: port || 3306, // Default MySQL port is 3306
    connectionLimit: 10 // Adjust based on your needs
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
    connection.release();
});

module.exports = pool;
