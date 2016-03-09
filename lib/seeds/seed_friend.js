exports.seed = function (knex, Promise) {
  return knex('friend').truncate()
    .then(function () {
      return knex('friend').insert([
        {
          user: 1, friend: 7,
        },
        {
          user: 1, friend: 8,
        },
        {
          user: 1, friend: 3,
        },
        {
          user: 1, friend: 5,
        },
        {
          user: 1, friend: 9,
        },
        {
          user: 1, friend: 4,
        },
      ]);
    })
    .catch(function (error) {
      console.error('Error Friends Table Not Working', error);
    });
};
