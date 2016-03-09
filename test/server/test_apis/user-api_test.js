require('../../test-helper');

var db = require(__root + '/lib/db');
var request = require('supertest-as-promised');
var routes = require(__server + '/index.js');

describe('User API', function () {

  var app = TestHelper.createApp();
  app.use('/user', routes);
  app.testReady();

  // beforeEach(function () {
  //   return db.deleteEverything();
});

it('Should insert user', function (app) {
  var attrs = {
    username: 'Cheenus',
    password: 'abc123',
    first_name: 'Don',
    last_name: 'Cheen',
    street_address: '700 Priced Dr',
    city: 'Austin',
    state: 'Texas',
    zipcode: 123456,
    phone_number: 4051234567890,
    email: 'doncheen@hotmail.com',
    emergency_contact: 'Nobody.',
    avatar: 'http://www.vinylrevinyl.com/wp-content/uploads/2008/12/rick-james.jpg',
  };

  //Mocha will wait for returned promises to complete
  return request(app)
      .post('/user')
      .send(attrs)
      .expect(201)
      .expect(function (response) {
        var user = response.body;

        expect(user.id).to.not.be.undefined;
        expect(user.first_name).to.equal('Don');
        expect(user.address).to.equal('700 Priced Dr');
      })
      .then(function () {

        return request(app)
          .get('/user')
          .expect(200)
          .expect(function (response) {
            var users = response.body;
            expect(users).to.be.an.instanceOf(Array);
            expect(users).to.have.length(1);
            expect(users[0].name).to.equal('Don');
          });
      });
});

// });
