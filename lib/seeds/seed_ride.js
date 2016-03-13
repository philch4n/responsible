
exports.seed = function (knex, Promise) {
  return knex('rides').truncate()
    .then(function () {
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
      ]);
    })
    .catch(function (error) {
      console.error('Error on Driver Table Error', error);
    });
};
