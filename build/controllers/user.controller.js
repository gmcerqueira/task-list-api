"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _expressrescue = require('express-rescue'); var _expressrescue2 = _interopRequireDefault(_expressrescue);
var _userservice = require('../services/user.service');

const secret = process.env.SECRET || 'test';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const singUp = _expressrescue2.default.call(void 0, async (req, res, next) => {
  const userCreate = await _userservice.createNewUser.call(void 0, req.body);

  if (userCreate.err) return next(userCreate.err);

  return res.status(200).json({ userId: userCreate });
});

const login = async (req, res, next) => {
  const logged = await _userservice.verifyLogin.call(void 0, req.body);

  if (logged.err) return next(logged.err);

  const token = _jsonwebtoken2.default.sign(logged, secret, jwtConfig);

  return res.status(200).json({ token });
};

exports.login = login; exports.singUp = singUp;
