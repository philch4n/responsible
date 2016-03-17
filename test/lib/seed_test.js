const dbCleaner = require('knex-cleaner');
const db = require('../../lib/db');

var Seed = {};
module.exports = Seed;

Seed.user1 = {
  username: 'Cheenus',
  password: 'abc123',
  first_name: 'Don',
  last_name: 'Cheen',
  street_address: '700 Priced Dr',
  city: 'Austin',
  state: 'Texas',
  zipcode: 123456,
  phone_number: 1,
  email: 'doncheen@hotmail.com',
  emergency_contact: 'Nobody.',
  avatar: 'yahoo.com',
};

Seed.user2 = {
  username: 'GregB',
  password: '123abc',
  first_name: 'Greg',
  last_name: 'Brady',
  street_address: '700 Bunch Dr',
  city: 'Bonobo',
  state: 'Africa',
  zipcode: 654321,
  phone_number: 2,
  email: 'gregb@hotmail.com',
  emergency_contact: 'Marsha Marsha Marsha',
  avatar: 'google.com',
};

Seed.user3 = {
  username: 'CharlieBrizzown',
  password: 'cheesePlease',
  first_name: 'Charlie',
  last_name: 'Brizz',
  street_address: '700 Brizz Rd',
  city: 'Norman',
  state: 'Oklahoma',
  zipcode: 73036,
  phone_number: '405-441-9910',
  email: 'charbrizz@hotmail.com',
  emergency_contact: 'Snoopy',
  avatar: 'hotmail.com',
};

Seed.user4 = {
  username: 'GumpDump(69)[420]weed',
  password: 'jennyFoundWaysToExpandHerMind',
  first_name: 'Forest',
  last_name: 'Gump',
  street_address: '103 Gump Dr',
  city: 'Greenbow',
  state: 'Alabama',
  zipcode: 654321,
  phone_number: '710-420-6969',
  email: 'bubbaIsGone@hotmail.com',
  emergency_contact: 'Jenny, oh wait...',
  avatar: 'gumpshrimp.com',
};

Seed.cleaner = function () {
  return dbCleaner.clean(db, { mode: 'truncate' });
};

Seed.runner = function * () {

  const user1Id = yield db('users').insert(Seed.user1, ['user_id']);
  const user2Id = yield db('users').insert(Seed.user2, ['user_id']);
  const user3Id = yield db('users').insert(Seed.user3, ['user_id']);
  const user4Id = yield db('users').insert(Seed.user4, ['user_id']);
  const friend1 = {
    foreign_friend1: user1Id[0].user_id,
    foreign_friend2: user3Id[0].user_id,
  };
  const friend2 = {
    foreign_friend1: user2Id[0].user_id,
    foreign_friend2: user4Id[0].user_id,
  };
  const friendId1 = yield db('friends').insert(friend1, ['friendship_id']);
  const friendId2 = yield db('friends').insert(friend2, ['friendship_id']);
  const rider1  = {
    foreign_rider: user1Id[0].user_id,
    location: '700 E. 8th street Austin, Tx',
  };
  const rider2  = {
    foreign_rider: user2Id[0].user_id,
    location: '1000 Freckle Face Weigh',
  };
  const riderId1 = yield db('riders').insert(rider1, ['rider_id']);
  const riderId2 = yield db('riders').insert(rider2, ['rider_id']);
  const driver1 = {
    foreign_driver: user3Id[0].user_id,
    location: '1826 Niblick Way',
  };
  const driver2 = {
    foreign_driver: user4Id[0].user_id,
    location: '100 Shark Lane',
  };
  const driverID1 = yield db('drivers').insert(driver1, 'driver_id');
  const driverID2 = yield db('drivers').insert(driver2, 'driver_id');

  return { user1Id, user2Id, user3Id, user4Id,
    friend1, friend2, rider1, rider2,
    riderId1, riderId2, driver1, driver2,
    driverID1, driverID2,
  };
};
