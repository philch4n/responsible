
exports.up = function (knex, Promise) {
  return Promise.all([
knex.schema.createTableIfNotExists('users', function (table) {
  table.increments('user_id').primary();
  table.string('username').notNullable();
  table.string('password').notNullable();
  table.string('first_name').notNullable();
  table.string('last_name').notNullable();
  table.string('street_address').notNullable();
  table.string('city').notNullable();
  table.string('state').notNullable();
  table.integer('zipcode').notNullable();
  table.string('phone_number').notNullable();
  table.string('email').notNullable();
  table.string('emergency_contact').notNullable();
  table.string('avatar').notNullable();
}),

knex.schema.createTableIfNotExists('friends', function (table) {
  table.increments('friendship_id').primary();
  table.integer('foreign_friend1').references('user_id').inTable('users').notNullable();
  table.integer('foreign_friend2').references('user_id').inTable('users').notNullable();
}),

knex.schema.createTableIfNotExists('rides', function (table) {
  table.increments('ride_id').primary();
  table.integer('foreign_driver').references('user_id').inTable('users').notNullable();
  table.integer('foreign_rider').references('user_id').inTable('users').notNullable();
  table.timestamp('created_at');
}),

knex.schema.createTableIfNotExists('cars', function (table) {
  table.increments('car_id').primary();
  table.string('make').notNullable();
  table.string('model').notNullable();
  table.string('capacity').notNullable();
  table.string('color').notNullable();
}),

knex.schema.createTableIfNotExists('messages', function (table) {
  table.increments('messages_id').primary();
  table.integer('foreign_ride').references('ride_id').inTable('rides').notNullable();
  table.string('message').notNullable();
  table.timestamp('created_at');
}),

]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
  knex.schema.dropTable('users'),
  knex.schema.dropTable('friend'),
  knex.schema.dropTable('rides'),
  knex.schema.dropTable('car'),
]);
};

