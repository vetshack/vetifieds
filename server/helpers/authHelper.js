let jwt = require('jsonwebtoken'),
    moment = require('moment');

module.exports = (function() {
  function generateToken(user) {
    let payload = {
      iss: 'vetified',
      sub: user._id,
      iat: moment().unix(),
      exp: moment().add(7, 'days').unix()
    };
    return jwt.sign(payload, process.env.TOKEN_SECRET);
  }

  function isAuthenticated() {
    let token = (this.headers.authorization
        && this.headers.authorization.split(' ')[1])
        || this.cookies.token;
    try {
      return jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
      return false;
    }
  }


  return {
    generateToken: generateToken,
    isAuthenticated: isAuthenticated,
  };

})();
