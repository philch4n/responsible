const R = require('ramda');

global.reportError = R.curry(function (description, error) {
  console.error('~~~ ', description, '~~~');
  console.error(error);

  if (error instanceof Error) throw error;
});
