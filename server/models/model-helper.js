const R = require('ramda');

global.reportError = ramda.curry(function (description, error) {
  console.error('~~~ ', description, '~~~');
  console.error(error);

  if (error instanceof Error) throw error;
});
