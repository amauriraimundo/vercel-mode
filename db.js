// db.js

const mysql = require("mysql");

const db = mysql.createPool({
  host: "consulta_coaf.mysql.dbaas.com.br",
  user: "consulta_coaf",
  password: "Toriba@2023",
  database: "consulta_coaf",
  connectionLimit: 100,
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conexão bem-sucedida com o MySQL");
  }
});

module.exports = db;
