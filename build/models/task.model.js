"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongodb = require('mongodb');
var _connection = require('./connection'); var _connection2 = _interopRequireDefault(_connection);

const getAll = async (userId) => {
  const db = await _connection2.default.call(void 0, );
  const list = await db.collection('tasks').find({ userId }).toArray();

  return list;
};

const create = async (task) => {
  const db = await _connection2.default.call(void 0, );
  const taskCreate = await db.collection('tasks').insertOne(task);

  return taskCreate;
};

const findById = async (id) => {
  const db = await _connection2.default.call(void 0, );
  const taskFound = await db.collection('tasks').findOne(_mongodb.ObjectId.call(void 0, id));

  return taskFound;
};

exports.getAll = getAll; exports.create = create; exports.findById = findById;
