var R       = require('ramda');

global.__models = __dirname + '/models';

global.reportError = R.curry(function (description, error) {
  console.error('~~~', description, '~~~~');
  console.log(error);

  if (error instanceof Error) throw error;
});

global.sendStatusAndData = R.curry(function (res, status, data) {
  res.status(status).send(data);
});

global.sendStatusAndError = R.curry(function (response, status, description, error) {
  try {
    reportError(description, error);
  } catch (error) {
    throw error;

    //  we throw the error again so we don't lose it! Always good to know when there's an error
  } finally {
    // code in a finally block _always_ executes.
    // we use it so that regardless whether the reportError above throws
    // an error, we will always send the client a response.
    return sendStatusAndData(response, status, error);
  }
});
