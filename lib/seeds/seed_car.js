
exports.seed = function(knex, Promise) {
  return knex('car').truncate()
    .then(function() {
      return knex('car').insert([
        {
          make: 'Jaguar in the Wild',
          capacity: 0, color: 'Fuschia'
        },
        {
          make: 'Tesla Coil',
          capacity: 1, color: 'violet'
        },
        {
          make: 'To Infiniti and Beyond',
          capacity: 13, color: 'silver'
        },
        {
          make: 'Ford Windstar Gazing',
          capacity: 5, color: 'blue'
        },
        {
          make: 'Honda Civic Duty',
          capacity: 1, color: 'brown'
        }
      ])
    })
    .catch(function(error) {
      console.error('error seeding suggestions', error)
    })
};
