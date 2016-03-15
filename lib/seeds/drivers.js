exports.seed = function (knex) {
  return knex('drivers').insert([
    {
      foreign_driver: 1,
      location: JSON.stringify({ lat: -75.35, long: 44.44 }),
    },
    {
      foreign_driver: 2,
      location: JSON.stringify({ lat: -67.35, long: 23.44 }),
    },
    {
      foreign_driver: 3,
      location: JSON.stringify({ lat: -43.35, long: 82.44 }),
    },
  ])
    .catch(function (error) {
      console.error('error seeding users', error);
    });
};
