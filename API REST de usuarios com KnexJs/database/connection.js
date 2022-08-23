require('dotenv').config();

var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : process.env.CONNECTIONSTRING,
      database : 'apiusers'
    }
  });

module.exports = knex