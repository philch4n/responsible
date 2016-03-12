require('../../test-helper');
var db = require('../../../lib/db');
var request = require('supertest');
var routes = require(__server + '/index.js');
const dbCleaner = require('knex-cleaner');

var testUser1 = {
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

var testUser2 = {
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

describe('Messages API', function () {

  beforeEach(function () {
    return dbCleaner.clean(db, { mode: 'truncate' });
  });

  var app = TestHelper.createApp();
  app.use('/', routes);
  app.testReady();

  it_('Should Post a message', function * () {
    var user1IdOnInsert = null;
    var user2IdOnInsert = null;
    var ride1IdOnInsert = null;

    yield request(app)
      .post('/user')
      .send(testUser1)
      .expect(201)
      .expect(function (response) {
        var user = response.body[0];
        user1IdOnInsert = user.user_id;
        expect(user.user_id).to.not.be.undefined;
        expect(user.first_name).to.equal('Don');
        expect(user.username).to.equal('Cheenus');
      });

    yield request(app)
      .post('/user')
      .send(testUser2)
      .expect(201)
      .expect(function (response) {
        var user = response.body[0];
        user2IdOnInsert = user.user_id;
        expect(user.user_id).to.not.be.undefined;
        expect(user.first_name).to.equal('Greg');
        expect(user.username).to.equal('GregB');
      });

    var ride1 = {
      foreign_driver: user1IdOnInsert,
      foreign_rider: user2IdOnInsert,
    };

    yield request(app)
      .post('/rides')
      .send(ride1)
      .expect(201)
      .expect(function (response) {
        var ride = response.body[0];
        ride1IdOnInsert = ride.ride_id;
        expect(ride.ride_id).to.not.be.undefined;
        expect(ride.foreign_driver).to.equal(user1IdOnInsert);
        expect(ride.foreign_rider).to.equal(user2IdOnInsert);
      });

    var message1 = {
      foreign_ride: ride1IdOnInsert,
      message: 'Hey this is is Greg',
      author: 'GregB',
    };

    yield request(app)
      .post('/messages')
      .send(message1)
      .expect(201)
      .expect(function (message) {
        var message = message.body[0];
        expect(message.messages_id).to.not.be.undefined;
        expect(message.message).to.equal('Hey this is is Greg');
        expect(message.author).to.equal('GregB');
      });
  });

  it_('Should get all messages', function * () {
    var user1IdOnInsert = null;
    var user2IdOnInsert = null;
    var ride1IdOnInsert = null;

    yield request(app)
      .post('/user')
      .send(testUser1)
      .expect(201)
      .expect(function (response) {
        var user = response.body[0];
        user1IdOnInsert = user.user_id;
        expect(user.user_id).to.not.be.undefined;
        expect(user.first_name).to.equal('Don');
        expect(user.username).to.equal('Cheenus');
      });

    yield request(app)
      .post('/user')
      .send(testUser2)
      .expect(201)
      .expect(function (response) {
        var user = response.body[0];
        user2IdOnInsert = user.user_id;
        expect(user.user_id).to.not.be.undefined;
        expect(user.first_name).to.equal('Greg');
        expect(user.username).to.equal('GregB');
      });

    var ride1 = {
      foreign_driver: user1IdOnInsert,
      foreign_rider: user2IdOnInsert,
    };

    yield request(app)
      .post('/rides')
      .send(ride1)
      .expect(201)
      .expect(function (response) {
        var ride = response.body[0];
        ride1IdOnInsert = ride.ride_id;
        expect(ride.ride_id).to.not.be.undefined;
        expect(ride.foreign_driver).to.equal(user1IdOnInsert);
        expect(ride.foreign_rider).to.equal(user2IdOnInsert);
      });

    var message1 = {
      foreign_ride: ride1IdOnInsert,
      message: 'Hey this is is Greg',
      author: 'GregB',
    };

    yield request(app)
      .post('/messages')
      .send(message1)
      .expect(201)
      .expect(function (message) {
        var message = message.body[0];
        expect(message.messages_id).to.not.be.undefined;
        expect(message.message).to.equal('Hey this is is Greg');
        expect(message.author).to.equal('GregB');
      });

    yield request(app)
      .get('/messages')
      .expect(200)
      .expect(function (response) {
        var message = response.body;
        var first = response.body[0];
        expect(message).to.be.an.instanceOf(Array);
        expect(message).to.have.length(1);
        expect(first.message).to.equal('Hey this is is Greg');
      });
  });

  it_('Should get message by id', function * () {
    var user1IdOnInsert = null;
    var user2IdOnInsert = null;
    var ride1IdOnInsert = null;
    var msg1IdOnInsert  = null;

    yield request(app)
      .post('/user')
      .send(testUser1)
      .expect(201)
      .expect(function (response) {
        var user = response.body[0];
        user1IdOnInsert = user.user_id;
        expect(user.user_id).to.not.be.undefined;
        expect(user.first_name).to.equal('Don');
        expect(user.username).to.equal('Cheenus');
      });

    yield request(app)
      .post('/user')
      .send(testUser2)
      .expect(201)
      .expect(function (response) {
        var user = response.body[0];
        user2IdOnInsert = user.user_id;
        expect(user.user_id).to.not.be.undefined;
        expect(user.first_name).to.equal('Greg');
        expect(user.username).to.equal('GregB');
      });

    var ride1 = {
      foreign_driver: user1IdOnInsert,
      foreign_rider: user2IdOnInsert,
    };

    yield request(app)
      .post('/rides')
      .send(ride1)
      .expect(201)
      .expect(function (response) {
        var ride = response.body[0];
        ride1IdOnInsert = ride.ride_id;
        expect(ride.ride_id).to.not.be.undefined;
        expect(ride.foreign_driver).to.equal(user1IdOnInsert);
        expect(ride.foreign_rider).to.equal(user2IdOnInsert);
      });

    var message1 = {
      foreign_ride: ride1IdOnInsert,
      message: 'Hey this is is Greg',
      author: 'GregB',
    };

    yield request(app)
      .post('/messages')
      .send(message1)
      .expect(201)
      .expect(function (message) {
        var message = message.body[0];
        msg1IdOnInsert = message.messages_id;
        expect(message.messages_id).to.not.be.undefined;
        expect(message.message).to.equal('Hey this is is Greg');
        expect(message.author).to.equal('GregB');
      });

    yield request(app)
      .get('/messages/' + msg1IdOnInsert)
      .expect(200)
      .expect(function (response) {
        var message = response.body;
        expect(message.message).to.equal('Hey this is is Greg');
      });
  });

  it_('Should delete message by id', function * () {
    var user1IdOnInsert = null;
    var user2IdOnInsert = null;
    var ride1IdOnInsert = null;
    var msg1IdOnInsert  = null;

    yield request(app)
      .post('/user')
      .send(testUser1)
      .expect(201)
      .expect(function (response) {
        var user = response.body[0];
        user1IdOnInsert = user.user_id;
        expect(user.user_id).to.not.be.undefined;
        expect(user.first_name).to.equal('Don');
        expect(user.username).to.equal('Cheenus');
      });

    yield request(app)
      .post('/user')
      .send(testUser2)
      .expect(201)
      .expect(function (response) {
        var user = response.body[0];
        user2IdOnInsert = user.user_id;
        expect(user.user_id).to.not.be.undefined;
        expect(user.first_name).to.equal('Greg');
        expect(user.username).to.equal('GregB');
      });

    var ride1 = {
      foreign_driver: user1IdOnInsert,
      foreign_rider: user2IdOnInsert,
    };

    yield request(app)
      .post('/rides')
      .send(ride1)
      .expect(201)
      .expect(function (response) {
        var ride = response.body[0];
        ride1IdOnInsert = ride.ride_id;
        expect(ride.ride_id).to.not.be.undefined;
        expect(ride.foreign_driver).to.equal(user1IdOnInsert);
        expect(ride.foreign_rider).to.equal(user2IdOnInsert);
      });

    var message1 = {
      foreign_ride: ride1IdOnInsert,
      message: 'Hey this is is Greg',
      author: 'GregB',
    };

    yield request(app)
      .post('/messages')
      .send(message1)
      .expect(201)
      .expect(function (message) {
        var message = message.body[0];
        msg1IdOnInsert = message.messages_id;
        expect(message.messages_id).to.not.be.undefined;
        expect(message.message).to.equal('Hey this is is Greg');
        expect(message.author).to.equal('GregB');
      });

    yield request(app)
      .delete('/messages/' + msg1IdOnInsert)
      .expect(200);
  });

});
