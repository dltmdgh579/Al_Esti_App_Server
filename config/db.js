const mysql = require('mysql2');
let pool;

exports.connect = (key,done) => {
    pool = mysql.createPool({
        connectionLimit:20,
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'al_esti'
    });
};

exports.get = () => {
    return pool;
}