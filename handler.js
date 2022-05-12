'use strict';

module.exports.hello = (event, context, callback)  => {

  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Hola Mundo XD'
      }),
  };

  return callback(null, response);
};
