require('dotenv').config();

const configDev = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_NAME,
  host: process.env.MYSQL_HOST,
  dialect: process.env.MYSQL_DIALECT,

};

const configTest = {
  username: 'root',
  password: 'AOBA123',
  port: 3306,
  database: 'TESTANDO_CARAIO',
  host: 'localhost',
  dialect: 'mysql',
};

module.exports = configTest;