// db.js

const mysql = require("mysql");

const db = mysql.createPool({
  host: "consulta_coaf.mysql.dbaas.com.br",
  user: "consulta_coaf",
  password: "Toriba@2023",
  database: "consulta_coaf",
  connectionLimit: 100,
});

module.exports = db;
