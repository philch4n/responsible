exports.up = function (knex, Promise) {
  return Promise.all([

knex.schema.createTableIfNotExists('users', function (table) {
  table.increments('id').primary();
<<<<<<< b330a0a8c61e39e01d49600dc81610b03815dc9f
  table.string('username').notNullable().unique();
=======
  table.string('username').notNullable();
>>>>>>> worked foreign keys
  table.string('password').notNullable();
  table.string('first_name').notNullable();
  table.string('last_name').notNullable();
  table.string('street_address').notNullable();
<<<<<<< b330a0a8c61e39e01d49600dc81610b03815dc9f
  table.string('city').notNullable();
  table.string('state').notNullable();
  table.integer('zipcode').notNullable();
  table.string('phone_number').notNullable();
  table.string('email').notNullable().unique();
=======
  table.string('city').notNullable;
  table.string('state').notNullable;
  table.integer('zipcode').notNullable;
  table.string('phone_number').notNullable;
  table.string('email').notNullable();
>>>>>>> worked foreign keys
  table.string('emergency_contact').notNullable();
  table.string('avatar').notNullable();
  table.timestamps();
}),

knex.schema.createTableIfNotExists('friend', function (table) {
  table.increments('id').primary();
  table.integer('user').unsigned().references('users.id').inTable('users');
  table.integer('friend').unsigned().references('users.id').inTable('users');

  // table.integer('contract').unsigned().references('contract.id');
  // add constraint friend_user_foreign foreign key ("user") references "users" ("id")
  // table.integer('user').inTable('users').references('id').notNullable();
  // table.integer('friend').inTable('users').references('id').notNullable();
}),

knex.schema.createTableIfNotExists('ride', function (table) {
  table.increments('id').primary();
  table.integer('user').unsigned().references('id').inTable('users');
  table.integer('friend').unsigned().references('id').inTable('users');
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
<<<<<<< b330a0a8c61e39e01d49600dc81610b03815dc9f
  table.integer('user').references('id').inTable('users').notNullable();
  table.integer('friend').references('id').inTable('users').notNullable();
=======
  table.integer('user').unsigned().references('id').inTable('users');
  table.integer('friend').unsigned().references('id').inTable('users');
>>>>>>> worked foreign keys
  table.timestamps();
}),

]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
  knex.schema.dropTable('users'),
  knex.schema.dropTable('friend'),
  knex.schema.dropTable('ride'),
  knex.schema.dropTable('car'),
]);
};
