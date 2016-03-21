
exports.seed = function (knex) {
  return knex('users').insert([
    {
      username: 'darkz',
      password: 'A',
      name: 'Zack AB',
      address: '15 A street Jamestown, CA',
      zipcode: 90210,
      phone_number: '2032409987',
      email: 'arial@fonts.com',
      emergency_contact: 'test1',
      avatar: 'http://www.adweek.com/socialtimes/files/2012/03/twitter-egg-icon.jpg',
    },
    {
      username: 'upsiderz',
      password: 'A',
      name: 'Bob ronnie',
      address: '51 A street Jamestown, CA',
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
      name: 'barry schnitzel',
      address: '1551 A street Jamestown, CA',
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
      name: 'Zelgar qwezar',
      address: '708 Brazos, 17th floor, CA',
      zipcode: 78702,
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
