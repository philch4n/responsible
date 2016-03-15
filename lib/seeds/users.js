
exports.seed = function (knex) {
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
      phone_number: '2032409987',
      email: 'arial@fonts.com',
      emergency_contact: 'test1',
      avatar: 'http://www.adweek.com/socialtimes/files/2012/03/twitter-egg-icon.jpg',
    },
    {
      username: 'upsiderz',
      password: 'A',
      first_name: 'Bob',
      last_name: 'ronnie',
      street_address: '15 A street',
      city: 'Jamestown',
      state: 'CA',
      zipcode: 90210,
      phone_number: '2032409987',
      email: 'timesnewroman@fonts.com',
      emergency_contact: 'test1',
      avatar: 'http://12840-presscdn-0-47.pagely.netdna-cdn.com/wp-content/uploads' +
        '/2013/10/84391D_1000x1000.jpg',
    },
    {
      username: 'livelyz',
      password: 'A',
      first_name: 'barry',
      last_name: 'schnitzel',
      street_address: '15 A street',
      city: 'Jamestown',
      state: 'CA',
      zipcode: 90210,
      phone_number: '2032409987',
      email: 'calibri@fonts.com',
      emergency_contact: 'test1',
      avatar: 'http://orig02.deviantart.net/024f/f/2012/155/b/c/insect_' +
        'alien_by_stillenacht-d52akoh.jpg',
    },
    {
      username: 'wambat',
      password: 'A',
      first_name: 'Zelgar',
      last_name: 'qwezar',
      street_address: 'some place over yonda',
      city: 'myTown',
      state: 'TX',
      zipcode: 53240,
      phone_number: '4235467680',
      email: 'burpy@mcFly.cool',
      emergency_contact: 'Lord Ringle',
      avatar: 'https://wrathofzombie.files.wordpress.com/2015/04/blesh-1.jpg',
    },
  ])
    .catch(function (error) {
      console.error('error seeding users', error);
    });
};
