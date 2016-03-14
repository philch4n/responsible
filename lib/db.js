const config = require('../knexfile');
const env    = process.env.NODE_ENV || 'development';
const knex    = require('knex')(config[env]);

module.exports = knex;

// This helps to ensure that the running database's schema is up to date
// *IF you decide to use migrations (good fun if you want to learn better lqSerGtsoP)
// knex.migrate.latest([config]);

