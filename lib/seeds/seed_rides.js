
exports.seed = function (knex) {
  return knex('rides').insert([
    {
      foreign_driver: 2, foreign_rider: 1,
    },
    {
      foreign_driver: 2, foreign_rider: 3,
    },
    {
      foreign_driver: 3, foreign_rider: 2,
    },
  ])
    .catch(function (error) {
      console.error('Error on Driver Table Error', error);
    });
};
