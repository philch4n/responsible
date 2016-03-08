
exports.seed = function(knex, Promise) {
  return knex('users').truncate()
    .then(function() {
      return knex('users').insert([
        {
          username: 'Zack', 
          password: 'moo',
          first_name: 'Zack',
          last_name: 'moo',
          address: 'bistrocity',
          email: 'sample@sample.com',
          emergency_contact : 'test1',
          avatar : 'http://www.adweek.com/socialtimes/files/2012/03/twitter-egg-icon.jpg',
        },
        {
          username: 'Zack', 
          password: 'moo',
          first_name: 'Zack',
          last_name: 'moo',
          address: 'bistrocity',
          email: 'sample@sample.com',
          emergency_contact : 'test1',
          avatar : 'http://www.adweek.com/socialtimes/files/2012/03/twitter-egg-icon.jpg',
        },
        {
          username: 'Zack', 
          password: 'moo',
          first_name: 'Zack',
          last_name: 'moo',
          address: 'bistrocity',
          email: 'sample@sample.com',
          emergency_contact : 'test1',
          avatar : 'http://www.adweek.com/socialtimes/files/2012/03/twitter-egg-icon.jpg',
        },
      ])
    })
    .catch(function(error) {
      console.error('error seeding users', error)
    })
};