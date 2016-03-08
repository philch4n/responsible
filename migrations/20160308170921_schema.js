exports.up = function(knex, Promise) {
	return Promise.all([
		
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
}),

knex.schema.createTableIfNotExists('friend', function (table) {
  table.increments('id').primary();
  table.integer('user').references('id').inTable('users').notNullable();
  table.integer('friend').references('id').inTable('users').notNullable();
}),

knex.schema.createTableIfNotExists('ride', function (table) {
  table.increments('id').primary();
  table.integer('id_ride').notNullable();
  table.integer('id_user').notNullable();
  table.string('location').notNullable();
  table.timestamps();
}),

knex.schema.createTableIfNotExists('car', function (table) {
  table.increments('id').primary();
  table.string('make').notNullable();
  table.string('capacity').notNullable();
  table.string('color').notNullable();
}),

knex.schema.createTableIfNotExists('chats', function (table) {
  table.increments('id').primary();
  table.string('make').notNullable();
  table.string('capacity').notNullable();
  table.string('color').notNullable();
})

])
};

exports.down = function(knex, Promise) {
return Promise.all([
  knex.schema.dropTable('users'),
  knex.schema.dropTable('friend'),
  knex.schema.dropTable('ride'),
  knex.schema.dropTable('car')
]) 
};
