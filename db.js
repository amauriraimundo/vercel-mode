// db.js

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "consulta_coaf.mysql.dbaas.com.br",
  user: "consulta_coaf",
  password: "Toriba@2023",
  database: "consulta_coaf",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conexão bem-sucedida com o MySQL");
  }
});

module.exports = db;
