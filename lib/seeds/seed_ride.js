
exports.seed = function(knex, Promise) {
  return knex('ride').truncate()
    .then(function() {
      return knex('ride').insert([
        {
          name: 'Denver'
        },
        {
          name: 'San Cristobal'
        },
        {
          name: 'Bed'
        },
      ])
    })
    .catch(function(error) {
      console.error('error seeding trips', error)
    })
};
