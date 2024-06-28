const User = require('../../db/models/user');
const BadUserRequestError = require('../errors/BadUserRequestError');
const hash = require('../utilities/hash');

async function registerUser(userData) {
  const existingUser = await User.findOne({where: { email: userData.email}});

  if (existingUser) {
    throw new BadUserRequestError("User already exists. Please log in")
  }

  if (userData.password !== userData.confirmPassword) {
    throw new BadUserRequestError("Password and Confirm Password do not match")
  }

  const passwordHash = await hash.hashPassword(userData.password);

  const newUser = await User.create({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: passwordHash,
    confirmPassword: passwordHash
  })

  const {firstName, lastName, email, password, createdAt, updatedAt} = newUser;
  const data = {firstName, lastName, email, password, createdAt, updatedAt}

  return data
}

module.exports = {
    registerUser
}