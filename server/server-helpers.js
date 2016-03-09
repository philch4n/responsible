var R       = require('ramda');

global.__models = __dirname + '/../models';

global.reportError = R.curry(function (description, error) {
  console.error('~~~', description, '~~~~');
  console.log(error);

  if (error instanceof Error) throw error;
});

global.sendStatusAndData = R.curry(function (res, status, data) {
  res.status(status).send(data);
});
