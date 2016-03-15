exports.seed = function (knex, Promise) {
  return knex('friend').del()
    .then(function () {
      return knex('friend').insert([
        {
          foreign_friend1: 1, foreign_friend2: 1,
        },
        {
          foreign_friend1: 1, foreign_friend2: 2,
        },
      ]);
    })
    .catch(function (error) {
      console.error('Error Friends Table Not Working', error);
    });
};
