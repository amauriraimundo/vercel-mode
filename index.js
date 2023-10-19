const connectToDatabase = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "arjr2021@jr39257548",
    database: "consulta",
  });

  connection.connect((err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Conectado ao banco de dados");
  });

  return connection;
};

const getUsers = async () => {
  const connection = await connectToDatabase();

  const results = await connection.query("SELECT * FROM users");

  connection.end();

  return results.rows;
};

const handler = async (req, res) => {
  const users = await getUsers();

  res.status(200).json(users);
};

export default handler;
