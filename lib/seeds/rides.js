
exports.seed = function (knex) {
  return knex('rides').insert([
    {
      ride_driver: 1, ride_rider: 2,
    },
    {
      ride_driver: 3, ride_rider: 4,
    },
  ])
    .catch(function (error) {
      console.error('Error on Driver Table Error', error);
    });
};
