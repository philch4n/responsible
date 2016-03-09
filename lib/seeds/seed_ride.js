
exports.seed = function(knex, Promise) {
  return knex('ride').truncate()
    .then(function() {
      return knex('ride').insert([
        {
          driver: 2, user: 1, location: "Tampa"
        },
        {
          driver: 2, user: 2, location: "Denver"
        },
        {
          driver: 3, user: 5, location: "Austin"
        },
      ])
    })
    .catch(function(error) {
      console.error('Error on Driver Table Error', error)
    })
};
