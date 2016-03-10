
exports.seed = function (knex, Promise) {
  return knex('users')
    .then(function () {
      return knex('users').insert([
        {
          username: 'darkz',
          password: 'A',
          first_name: 'Zack',
          last_name: 'AB',
          street_address: '15 A street',
          city: 'Jamestown',
          state: 'CA',
          zipcode: 90210,
          phone_number: 2032409987,
          email: 'arial@fonts.com',
          emergency_contact: 'test1',
          avatar: 'http://www.adweek.com/socialtimes/files/2012/03/twitter-egg-icon.jpg',
        },
        {
          username: 'upsiderz',
          password: 'A',
          first_name: 'Zack',
          last_name: 'AB',
          street_address: '15 A street',
          city: 'Jamestown',
          state: 'CA',
          zipcode: 90210,
          phone_number: 2032409987,
          email: 'timesnewroman@fonts.com',
          emergency_contact: 'test1',
          avatar: 'http://www.adweek.com/socialtimes/files/2012/03/twitter-egg-icon.jpg',
        },
        {
          username: 'livelyz',
          password: 'A',
          first_name: 'Zack',
          last_name: 'AB',
          street_address: '15 A street',
          city: 'Jamestown',
          state: 'CA',
          zipcode: 90210,
          phone_number: 2032409987,
          email: 'calibri@fonts.com',
          emergency_contact: 'test1',
          avatar: 'http://www.adweek.com/socialtimes/files/2012/03/twitter-egg-icon.jpg',
        },
      ]);
    })
    .catch(function (error) {
      console.error('error seeding users', error);
    });
};
