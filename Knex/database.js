require('dotenv').config();

const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : process.env.CONNECTIONSTRING,
      database : 'knexjs'
    }
  });

  module.exports = knex