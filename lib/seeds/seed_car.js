
exports.seed = function (knex, Promise) {
  return knex('car').truncate()
    .then(function () {
      return knex('car').insert([
        {
          make: 'Jaguar in the Wild', foreign_driver: 1,
          capacity: 0, color: 'Fuschia', model: 'Pink Panther',
        },
        {
          make: 'Tesla Coil', foreign_driver: 2,
          capacity: 1, color: 'violet', model: 'Lightning',
        },
        {
          make: 'To Infiniti and Beyond',  foreign_driver: 2,
          capacity: 13, color: 'silver', model: 'Lightyear',
        },
        {
          make: 'Ford Windstar Gazing',  foreign_driver: 1,
          capacity: 5, color: 'blue', model: 'Deadahead',
        },
        {
          make: 'Honda Civic Duty', foreign_driver: 3,
          capacity: 1, color: 'brown', model: 'F150',
        },
      ]);
    })
    .catch(function (error) {
      console.error('error seeding suggestions', error);
    });
};
