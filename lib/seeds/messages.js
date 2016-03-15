
exports.seed = function (knex) {
  return knex('messages').insert([
    {
      author: 1, foreign_ride: 1, message: 'test1',
    },
    {
      author: 1, foreign_ride: 1, message: 'test2',
    },
    {
      author: 2, foreign_ride: 1, message: 'test3',
    },
    {
      author: 2, foreign_ride: 1, message: 'test4',
    },
    {
      author: 3, foreign_ride: 2, message: 'test5',
    },
    {
      author: 3, foreign_ride: 2, message: 'test6',
    },
  ])
    .catch(function (error) {
      console.error('Error on Chat Message', error);
    });
};
