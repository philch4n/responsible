const users = require('../seeds/seed_users');
const cars = require('../seeds/seed_cars');
const friends = require('../seeds/seed_friends');

const rides = require('../seeds/seed_rides');
const messages = require('../seeds/seed_messages');

/**
 *  The seeder runs all of our seed files synchronously to avoid
 *  foreign key conflicts.
**/
exports.seed = function (knex) {
  return users.seed(knex)
    .then(function () {
      return cars.seed(knex);
    })
    .then(function () {
      return friends.seed(knex);
    })
    .then(function () {
      return rides.seed(knex);
    })
    .then(function () {
      return messages.seed(knex);
    })
    .catch(function (error) {
      console.error('Error seeding all data');
    });
};
