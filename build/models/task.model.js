"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _connection = require('./connection'); var _connection2 = _interopRequireDefault(_connection);

const getAll = async (userId) => {
  const db = await _connection2.default.call(void 0, );
  const list = await db.collection('tasks').find({ userId }).toArray();

  return list;
};

const create = async (text, userId) => {
  const db = await _connection2.default.call(void 0, );
  const task = await db
    .collection('tasks')
    .insertOne({ text, userId, created: new Date() });

  return task;
};

exports.getAll = getAll; exports.create = create;
