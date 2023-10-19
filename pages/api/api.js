// pages/api/api.js

import db from "../../db";

export default (req, res) => {
  db.query("SELECT * FROM pessoas WHERE nome = 'ABADIAS'", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Erro ao buscar dados no MySQL" });
      return;
    }
    res.status(200).json(results);
  });
};
