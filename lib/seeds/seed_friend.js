exports.seed = function (knex, Promise) {
  return knex('friend').truncate()
    .then(function () {
      return knex('friend').insert([
        {
          foreign_friend1: 1, foreign_friend2: 2,
        },
        {
          foreign_friend1: 1, foreign_friend2: 2,
        },
        {
          foreign_friend1: 1, foreign_friend2: 2,
        },
        {
          foreign_friend1: 1, foreign_friend2: 2,
        },
        {
          foreign_friend1: 1, foreign_friend2: 3,
        },
        {
          foreign_friend1: 1, foreign_friend2: 3,
        },
      ]);
    })
    .catch(function (error) {
      console.error('Error Friends Table Not Working', error);
    });
};
