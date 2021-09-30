"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _joi = require('joi'); var _joi2 = _interopRequireDefault(_joi);
var _usermodel = require('../models/user.model');

const verifyNewUser = (user) => {
  const { error } = _joi2.default.object({
    firstName: _joi2.default.string().not().empty().min(3)
      .required(),
    lastName: _joi2.default.string().not().empty().min(3)
      .required(),
    email: _joi2.default.string().email().not().empty()
      .required(),
    password: _joi2.default.string().not().empty().min(6)
      .required(),
  }).validate(user);

  return error;
};

const returnUser = (user) => {
  const { password, ...newUser } = user;

  return newUser;
};

const verifyWithExists = async (email) => {
  const exists = await _usermodel.findByEmail.call(void 0, email);

  if (exists) return true;

  return false;
};

const createNewUser = async (newUser) => {
  const entriesError = verifyNewUser(newUser);

  if (entriesError) return { err: entriesError };
  if (await verifyWithExists(newUser.email)) return { err: { emailExists: true } };

  const userCreate = await _usermodel.create.call(void 0, newUser);

  return userCreate.insertedId;
};

const verifyLogin = async (user) => {
  const { email, password } = user;
  const userLogged = await _usermodel.login.call(void 0, email, password);

  if (!userLogged) return { err: { incorrectUserInfo: true } };

  return returnUser(userLogged);
};

const searchEmail = async (email) => {
  const user = await _usermodel.findByEmail.call(void 0, email);

  if (!user) return { err: { userNotFound: true } };

  return returnUser(user);
};

exports.createNewUser = createNewUser; exports.verifyLogin = verifyLogin; exports.searchEmail = searchEmail;
