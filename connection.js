const mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "registrationform"
});

module.exports = connection;