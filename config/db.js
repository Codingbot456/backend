const mysql = require('mysql');
require('dotenv').config();

// Create the connection URL using string interpolation
const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT || 3306}/${process.env.MYSQLDATABASE}`;

// Parse the URL to extract connection parameters
const connection = mysql.createConnection(urlDB);

module.exports = connection;
