const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : process.env.CONNECTIONSTRING,
      database : 'knextjs'
    }
  });

  module.exports = knex