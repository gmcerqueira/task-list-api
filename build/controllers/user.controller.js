"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _userservice = require('../services/user.service');

const secret = process.env.SECRET || 'test';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const signUp = async (req, res, next) => {
  const userCreate = await _userservice.createNewUser.call(void 0, req.body);

  if (userCreate.err) return next(userCreate.err);

  return res.status(200).json({ userId: userCreate });
};

const login = async (req, res, next) => {
  const user = await _userservice.verifyLogin.call(void 0, req.body);

  if (user.err) return next(user.err);

  const token = _jsonwebtoken2.default.sign(user, secret, jwtConfig);

  return res.status(200).json({ token, user });
};

exports.login = login; exports.signUp = signUp;
