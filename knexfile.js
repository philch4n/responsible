/*
  DATABASE CONFIGURATION

A. Creating a New Database
  1. Install/Verify PostGreSql
      Navigate to your root directory.
      in terminal run 'postgres' -> if nothing happens then postgres is not installed.
      run 'brew install postgres' to install postgres

  2. Initialize Database System
      Navigate to your root directory.
      in terminal run 'initdb db/' -> a folder of 'db/' should be in the directory.
      find your .gitignore file and add description (ie ## ignore db files) and add 'db/'

B. Starting The Database
    1. Connecting Postgres and the Database
        in terminal run 'postgres -D db/'

    2. Creating a Table
        in a NEW terminal window run 'createdb development' -> creates a database named development.

C. Creating Migrations
        in terminal run 'knex migrate:make <optional filename>' -> 'migrations/' in the directory

  ************************************

  DATABASE SEEDING for development

    To seed the database with data so that model operations can be tested
    run the ^^above^^ database setup steps with the following additions:
      > 'npm install -g knex' to access knex on the command line
      > Now we need to build the database structure we've defined onto the database.
        We run a schema file that to do so. Once it's done, you can ctrl-C out.
        > 'node lib/schema.js'
      > 'knex --env development seed:run' to seed the development database
        with data monsters!

    To verify that you've been successful we should check the database.
      > 'psql development' to open a command-line database explorer
      > '\d' to look at the tables in our database.
        > if 'no relations exist', you've done something wrong!
      > You can run postgreSQL commands here (don't forget semi-colons!)
        > 'SELECT * FROM message;'

  ***********************************

  DATABASE CONFIGURATION for test

    With a running postgres server process (postgres -D)
      > 'NODE_ENV=test node lib/schema.js'
      Do not seed database for tests

    Before running tests, make sure to enter 'creatdb test'
*/

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'development',
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './lib/seeders',
    },
    debug: false, // set true for verbose database operations
  },
  test: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'test',
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations',
    },
    debug: false, // set true for verbose database operations
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
  },
};
