
exports.seed = function (knex) {
  return knex('messages').insert([
    {
      author: 'darkz', foreign_ride: 1, message: 'test1',
    },
    {
      author: 'darkz', foreign_ride: 1, message: 'test2',
    },
    {
      author: 'upsiderz', foreign_ride: 1, message: 'test3',
    },
    {
      author: 'upsiderz', foreign_ride: 1, message: 'test4',
    },
    {
      author: 'upsiderz', foreign_ride: 2, message: 'test5',
    },
    {
      author: 'livelyz', foreign_ride: 2, message: 'test6',
    },
  ])
    .catch(function (error) {
      console.error('Error on Chat Message', error);
    });
};
