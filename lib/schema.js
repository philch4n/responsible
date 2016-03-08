var knex = require('./db')

/*
	With a running postgres server process (postgres -D)
		> For development:
			'node lib/schema.js'
		> For testing:
			'NODE_ENV=test node lib/schema.js'
*/

knex.schema.createTableIfNotExists('users', function (table) {
  table.increments('id').primary();
  table.string('username').unique().notNullable();
  table.string('password').notNullable();
  table.string('first_name').notNullable();
  table.string('last_name').notNullable();
  table.string('street_address').unique().notNullable();
  table.string('city').notNullable;
  table.string('state').notNullable;
  table.integer('zipcode').notNullable;
  table.integer('phone_number').unique().notNullable;
  table.string('email').unique().notNullable();
  table.string('emergency_contact').notNullable();
  table.string('avatar').unique().notNullable();
  table.timestamps();
})
.createTableIfNotExists('friend', function (table) {
  table.integer('user').refrences('id').inTable('users').notNullable();
  table.integer('friend').refrences('id').inTable('users').notNullable();
})
.createTableIfNotExists('ride', function (table) {
  table.increments('id').primary();
  table.integer('id_ride').notNullable();
  table.integer('id_user').notNullable();
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
  table.string('make').notNullable();
  table.string('capacity').notNullable();
  table.string('color').notNullable();
})
.then(function(result) {
	console.log('Information Updated Successfully');
})
.catch(function(error) {
	console.log('Warning: Database Error', error)
})
