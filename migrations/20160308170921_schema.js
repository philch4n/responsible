

exports.up = function (knex, Promise) {
  return Promise.all([

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
}),

// knex('users')
//   .insert({
//       username: "Carly",
//       password: "1234",
//       first_name: "Carly",
//       last_name: "Levy",
//       street_address: "3213B West William Cannon",
//       city: "Austin",
//       state: "Texas",
//       zipcode: 78745,
//       phone_number: "5127515404"
//   })
//   .returning('users_id')
//   .catch(function(err){
//     console.log("Somethings wrong", err);
//   })
//   .then(function(userID){
//     console.log("Added new user: ", userID);
//     // var user1ID = userID;
//     return userID;
//   }),

// knex('users')
//   .insert({
//       username: "Carly2222",
//       password: "1234",
//       first_name: "Carly",
//       last_name: "Levy",
//       street_address: "3213C East William Cannon",
//       city: "Austin",
//       state: "Texas",
//       zipcode: 78745,
//       phone_number: "5127515404"
//   })
//   .returning('users_id')
//   .catch(function(err){
//     console.log("Somethings wrong", err);
//   })
//   .then(function(userID){
//     console.log("Added new user: ", userID);
//     // var user2ID = userID;
//     return userID
//   }),

knex.schema.createTableIfNotExists('friends', function (table) {
  table.increments('friendship_id').primary();
  table.integer('foreign_friend1').references('users_id').inTable('users').notNullable();
  table.integer('foreign_friend2').references('users_id').inTable('users').notNullable();
}),

knex.schema.createTableIfNotExists('ride', function (table) {
  table.increments('ride_id').primary();
  table.integer('foreign_driver').references('id', 'username').inTable('users').notNullable();
  table.integer('foreign_rider').references('id', 'username').inTable('users').notNullable();
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
  table.string('foreign_message1').references('foreign_rider').inTable('ride').notNullable();
  table.string('foreign_message2').references('foreign_driver').inTable('ride').notNullable();
  table.integer('foreign_ride').references('id').inTable('ride').notNullable();
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

// knex --env development seed:run
// INSERT INTO friend (foreign_friend1, foreign_friend2) VALUES (1,2);
