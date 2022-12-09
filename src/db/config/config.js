require("dotenv").config();

module.exports = {
  development: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "123",
    database: "DB_TEST",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql"
  },
  production: {
    environment: "production"
  }
};

