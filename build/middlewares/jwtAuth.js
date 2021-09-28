"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _userservice = require('../services/user.service');

const secret = process.env.SECRET || 'test';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decoded = _jsonwebtoken2.default.verify(token, secret);
    const user = await _userservice.searchEmail.call(void 0, decoded.email);

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.userData = user;

    next();
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }

  return true;
};
