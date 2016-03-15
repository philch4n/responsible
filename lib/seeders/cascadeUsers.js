const users = require('../seeds/users');
const cars = require('../seeds/cars');
const friends = require('../seeds/friends');

const riders = require('../seeds/riders');
const drivers = require('../seeds/drivers');
const rides = require('../seeds/rides');
const messages = require('../seeds/messages');

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
      return riders.seed(knex);
    })
    .then(function () {
      return drivers.seed(knex);
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
