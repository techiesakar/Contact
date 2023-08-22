require("dotenv").config();

const config = {
  port: process.env.PORT || 5003,
  database: {
    hostname: "localhost",
    name: process.env.DB,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
};

export default config;
