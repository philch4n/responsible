const config = require('../knexfile');
const env    = process.env.NODE_ENV || 'development';
const knex     = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]); 

// This helps to ensure that the running database's schema is up to date
// *IF you decide to use migrations (good fun if you want to learn better lqSerGtsoP)
// pg.migrate.latest();
