var knex = require('./db');

/*
	With a running postgres server process (postgres -D)
		> For development:
			'node lib/schema.js'
		> For testing:
			'NODE_ENV=test node lib/schema.js'
*/

knex.schema.createTableIfNotExists('users', function (table) {
  table.increments('users_id').primary();
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
})
.createTableIfNotExists('friends', function (table) {
  table.increments('friendship_id').primary();
  table.integer('foreign_friend1').references('users_id').inTable('users').notNullable();
  table.integer('foreign_friend2').references('users_id').inTable('users').notNullable();
})
.createTableIfNotExists('rides', function (table) {
  table.increments('ride_id').primary();
  table.integer('foreign_driver').references('id').inTable('users').notNullable();
  table.integer('foreign_rider').references('id').inTable('users').notNullable();
  table.timestamp();
})
.createTableIfNotExists('car', function (table) {
  table.increments('car_id').primary();
  table.string('make').notNullable();
  table.string('model').notNullable();
  table.string('capacity').notNullable();
  table.string('color').notNullable();
})
.createTableIfNotExists('messages', function (table) {
  table.increments('messages_id').primary();
  table.integer('foreign_user1').references('foreign_rider').inTable('ride').notNullable();
  table.integer('foreign_user2').references('foreign_driver').inTable('ride').notNullable();
  table.integer('foreign_message').notNullable;
  table.timestamp();
})
.then(function (result) {
  console.log('Information Updated Successfully');
})
.catch(function (error) {
  console.log('Warning: Database Error', error);
});

// knex --env development seed:run
