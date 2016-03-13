
exports.seed = function (knex) {
  return knex('cars').insert([
    {
      make: 'Jaguar in the Wild', foreign_owner: 1,
      capacity: 0, color: 'Fuschia', model: 'Pink Panther',
    },
    {
      make: 'Tesla Coil', foreign_owner: 2,
      capacity: 1, color: 'violet', model: 'Lightning',
    },
    {
      make: 'To Infiniti and Beyond',  foreign_owner: 2,
      capacity: 13, color: 'silver', model: 'Lightyear',
    },
    {
      make: 'Ford Windstar Gazing',  foreign_owner: 1,
      capacity: 5, color: 'blue', model: 'Deadahead',
    },
    {
      make: 'Honda Civic Duty', foreign_owner: 3,
      capacity: 1, color: 'brown', model: 'F150',
    },
  ])
    .catch(function (error) {
      console.error('error seeding cars', error);
    });
};
