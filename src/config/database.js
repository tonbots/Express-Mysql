const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});


//karena bersifat asynchronous pake promise
module.exports = dbPool.promise();