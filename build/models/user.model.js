"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _connection = require('./connection'); var _connection2 = _interopRequireDefault(_connection);

const create = async (email, password) => {
  const db = await _connection2.default.call(void 0, );
  const user = await db.collection('users').insertOne({ email, password });

  return user;
};

const findByEmail = async (email) => {
  const db = await _connection2.default.call(void 0, );
  const user = await db.collection('users').findOne({ email });

  return user;
};

const login = async (email, password) => {
  const db = await _connection2.default.call(void 0, );
  const user = await db.collection('users').findOne({ email, password });

  return user;
};

exports.create = create; exports.findByEmail = findByEmail; exports.login = login;
