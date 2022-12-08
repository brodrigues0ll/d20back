require('dotenv').config();

const configDev = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_NAME,
  host: process.env.MYSQL_HOST,
  dialect: process.env.MYSQL_DIALECT,

};

module.exports = configDev;