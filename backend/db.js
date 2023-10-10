const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT
})

connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao MySQL:', err);
      return;
    }
    console.log('Conexão com o MySQL bem-sucedida');
  });

module.exports = connection