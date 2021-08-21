const mysql = require("mysql");

const db = mysql.createConnection({
    host: "login-lecture-test-365.cp9urbw9rwzl.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "q532621!",
    database: "login_lecture"
});

db.connect();

module.exports = db;