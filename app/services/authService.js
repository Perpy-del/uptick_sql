const User = require('../../db/models/user');
const BadUserRequestError = require('../errors/BadUserRequestError');
const hash = require('../utilities/hash');

async function registerUser(userData) {
  const existingUser = await User.findOne({where: { email: userData.email}});

  if (existingUser) {
    throw new BadUserRequestError("User already exists. Please log in")
  }

  const passwordHash = await hash.hashPassword(userData.password);
  console.log(passwordHash);

  const newUser = await User.create({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: passwordHash
  })

  return newUser
}

module.exports = {
    registerUser
}