const jwt = require('jsonwebtoken');

class AuthService {
  static getToken() {
    return jwt.sign(
      { user: 'somevaliduser' },
      process.env.SIGNING_KEY,
      { expiresIn: '2 days' },
    );
  }
}

module.exports = AuthService;
