exports.seed = function (knex) {
  return knex('riders').insert([
    {
      foreign_rider: 1,
      location: JSON.stringify({ lat: -85.35, long: 35.44 }),
    },
    {
      foreign_rider: 2,
      location: JSON.stringify({ lat: -65.35, long: 27.44 }),
    },
    {
      foreign_rider: 4,
      location: JSON.stringify({ lat: -25.35, long: 36.44 }),
    },
  ])
    .catch(function (error) {
      console.error('error seeding users', error);
    });
};
