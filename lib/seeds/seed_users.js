
exports.seed = function (knex, Promise) {
  return knex('users')
    .then(function () {
      return knex('users').insert([
        {
          username: 'Zack',
          password: 'A',
          first_name: 'Zack',
          last_name: 'AB',
          street_address: '15 A street',
          city: 'Jamestown',
          state: 'CA',
          zipcode: 90210,
          phone_number: 2032409987,
          email: 'sample@sample.com',
          emergency_contact: 'test1',
          avatar: 'http://www.adweek.com/socialtimes/files/2012/03/twitter-egg-icon.jpg',
          created_at: 'test',
          updated_at: 'test',
        },
        {
          username: 'Zack',
          password: 'A',
          first_name: 'Zack',
          last_name: 'AB',
          street_address: '15 A street',
          city: 'Jamestown',
          state: 'CA',
          zipcode: 90210,
          phone_number: 2032409987,
          email: 'sample@sample.com',
          emergency_contact: 'test1',
          avatar: 'http://www.adweek.com/socialtimes/files/2012/03/twitter-egg-icon.jpg',
          created_at: 'test',
          updated_at: 'test',
        },
        {
          username: 'Zack',
          password: 'A',
          first_name: 'Zack',
          last_name: 'AB',
          street_address: '15 A street',
          city: 'Jamestown',
          state: 'CA',
          zipcode: 90210,
          phone_number: 2032409987,
          email: 'sample@sample.com',
          emergency_contact: 'test1',
          avatar: 'http://www.adweek.com/socialtimes/files/2012/03/twitter-egg-icon.jpg',
          created_at: 'test',
          updated_at: 'test',
        },
      ]);
    })
    .catch(function (error) {
      console.error('error seeding users', error);
    });
};
