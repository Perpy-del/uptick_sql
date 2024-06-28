const service = require('../../services/authService');

async function createUser(request, response) {
  try {
    const result = await service.registerUser(request.body);

    response.json({ data: result });
  } catch (error) {
    console.log( 'Error querying database: ', error );

    response.status(error.statusCode || 500).json({ data: { error: `${error.message}` } });
  }
}

module.exports = {
    createUser
}