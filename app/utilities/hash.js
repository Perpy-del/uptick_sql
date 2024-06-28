const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRound = Number(process.env.DEV_BCRYPT_SALT_ROUND)
  return new Promise((resolve, reject) => {
    try {
      const hashedPassword = bcrypt.hash(password, saltRound);
      resolve(hashedPassword);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

module.exports = {
    hashPassword
}
