exports.seed = function (knex) {
  return knex('riders').insert([
    {
      foreign_rider: 1,
      location: JSON.stringify({ lat: -85.35, lng: 35.44 }),
    },
    {
      foreign_rider: 2,
      location: JSON.stringify({ lat: -65.35, lng: 27.44 }),
    },
    {
      foreign_rider: 4,
      location: JSON.stringify({ lat: -25.35, lng: 36.44 }),
    },
  ])
    .catch(function (error) {
      console.error('error seeding users', error);
    });
};
