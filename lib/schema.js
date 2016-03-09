var knex = require('./db');

/*
	With a running postgres server process (postgres -D)
		> For development:
			'node lib/schema.js'
		> For testing:
			'NODE_ENV=test node lib/schema.js'
*/

knex.schema.createTableIfNotExists('users', function (table) {
  table.increments('id').primary();
  table.string('username').notNullable().unique();
  table.string('password').notNullable();
  table.string('first_name').notNullable();
  table.string('last_name').notNullable();
  table.string('street_address').notNullable();
  table.string('city').notNullable();
  table.string('state').notNullable();
  table.integer('zipcode').notNullable();
  table.string('phone_number').notNullable();
  table.string('email').notNullable().unique();
  table.string('emergency_contact').notNullable();
  table.string('avatar').notNullable();
  table.timestamps();
})
.createTableIfNotExists('friend', function (table) {
  table.increments('id').primary();
  table.integer('user').references('id').inTable('users').notNullable();
  table.integer('friend').references('id').inTable('users').notNullable();

  // table.integer('user').inTable('users').references('id').notNullable();
  // table.integer('friend').inTable('users').references('id').notNullable();
})
.createTableIfNotExists('ride', function (table) {
  table.increments('id').primary();
  table.integer('user').references('id').inTable('users').notNullable();
  table.integer('friend').references('id').inTable('users').notNullable();
  table.string('location').notNullable();
  table.timestamps();
})
.createTableIfNotExists('car', function (table) {
  table.increments('id').primary();
  table.string('make').notNullable();
  table.string('capacity').notNullable();
  table.string('color').notNullable();
})
.createTableIfNotExists('chats', function (table) {
  table.increments('id').primary();
  table.integer('user').references('id').inTable('users').notNullable();
  table.integer('friend').references('id').inTable('users').notNullable();
  table.timestamps();
})
.then(function (result) {
  console.log('Information Updated Successfully');
})
.catch(function (error) {
  console.log('Warning: Database Error', error);
});
