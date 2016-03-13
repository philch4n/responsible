exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('user_id').primary();
    table.string('username').notNullable().unique();
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
    table.timestamps();
  })
  .createTableIfNotExists('friends', function (table) {
    table.increments('friendship_id').primary();
    table.integer('foreign_friend1').references('user_id').inTable('users').notNullable();
    table.integer('foreign_friend2').references('user_id').inTable('users').notNullable();
    table.timestamps();
  })
  .createTableIfNotExists('rides', function (table) {
    table.increments('ride_id').primary();
    table.integer('foreign_driver').references('user_id').inTable('users').notNullable();
    table.integer('foreign_rider').references('user_id').inTable('users').notNullable();
    table.timestamps();
  })
  .createTableIfNotExists('car', function (table) {
    table.increments('car_id').primary();
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.string('capacity').notNullable();
    table.string('color').notNullable();
    table.timestamps();
  })
  .createTableIfNotExists('messages', function (table) {
    table.increments('messages_id').primary();
    table.string('message').notNullable();
    table.integer('foreign_ride').references('ride_id').inTable('rides').notNullable();
    table.string('author').references('username').inTable('users').notNullable();
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
    .dropTableIfExists('friends')
    .dropTableIfExists('rides')
    .dropTableIfExists('cars')
    .dropTableIfExists('messages');
};
