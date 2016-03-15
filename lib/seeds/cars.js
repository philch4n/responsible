
exports.seed = function (knex) {
  return knex('cars').insert([
    {
      make: 'Jaguar in the Wild', foreign_user: 1,
      capacity: 0, color: 'Fuschia', model: 'Pink Panther',
    },
    {
      make: 'Tesla Coil', foreign_user: 4,
      capacity: 1, color: 'violet', model: 'Lightning',
    },
    {
      make: 'To Infiniti and Beyond',  foreign_user: 4,
      capacity: 13, color: 'silver', model: 'Lightyear',
    },
    {
      make: 'Ford Windstar Gazing',  foreign_user: 1,
      capacity: 5, color: 'blue', model: 'Deadahead',
    },
    {
      make: 'Honda Civic Duty', foreign_user: 3,
      capacity: 1, color: 'brown', model: 'F150',
    },
  ])
    .catch(function (error) {
      console.error('error seeding cars', error);
    });
};
