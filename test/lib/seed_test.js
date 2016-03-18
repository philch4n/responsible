const dbCleaner = require('knex-cleaner');
const db = require('../../lib/db');

const User = require('../../server/models/user');
const Friend = require('../../server/models/friends');

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
Seed.user1.make = function () {
  return User.createUser(Seed.user1);
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
Seed.user2.make = function () {
  return User.createUser(Seed.user2);
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
Seed.user3.make = function () {
  return User.createUser(Seed.user3);
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
Seed.user4.make = function () {
  return User.createUser(Seed.user4);
};

Seed.makeFriend = function (id1, id2) {
  return Friend.createFriendship(id1, id2);
};

Seed.makeRider = function (rider) {
  return Ride.createRider(rider);
};

// Seed.makeRiders = function () {
//   var rider1 = {
//     location: '700 E. 8th street Austin, Tx',
//   };
//   var rider2 = {
//     location: '1000 Freckle Face Weigh',
//   };

//   return Seed.user1.make()
//     .then(function (user1) {
//       rider1.foreign_rider = user1.user_id;
//       return Seed.user2.make();
//     })
//     .then(function (user2) {
//       rider2.foreign_rider = user2.user_id;
//       return Seed.makeRider(rider1);
//     })
//     .then(function () {
//       return Seed.makeRider(rider2);
//     });
// };

Seed.cleaner = function () {
  return dbCleaner.clean(db, { mode: 'truncate' });
};

Seed.runner = function * () {

  const user1Id = yield Seed.user1.make();
  const user2Id = yield Seed.user2.make();
  const user3Id = yield Seed.user3.make();
  const user4Id = yield Seed.user4.make();

  const friendId1 = yield Seed.makeFriends(user1Id[0].user_id, user3Id[0].user_id);
  const friendId2 = yield Seed.makeFriends(user2Id[0].user_id, user4Id[0].user_id);

  const rider1  = {
    foreign_rider: user1Id[0].user_id,
    location: '700 E. 8th street Austin, Tx',
  };
  const rider2  = {
    foreign_rider: user2Id[0].user_id,
    location: '1000 Freckle Face Weigh',
  };
  const riderId1 = yield Seed.makeRider(rider1);
  const riderId2 = yield Seed.makeRider(rider2);

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
