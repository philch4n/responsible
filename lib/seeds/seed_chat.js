
exports.seed = function(knex, Promise) {
  return knex('chat').truncate()
    .then(function() {
      return knex('chat').insert([
        {
          user: 1, friend: 7, message: "test1"
        },
        {
          user: 1, friend: 8, message: "test2"
        },
        {
          user: 1, friend: 3, message: "test3"
        },
        {
          user: 1, friend: 5, message: "test4"
        },
        {
          user: 1, friend: 9, message: "test5"
        },
        {
          user: 1, friend: 4, message: "test6"
        }
      ])
    })
    .catch(function(error) {
      console.error('Error on Chat Message', error)
    })
};
