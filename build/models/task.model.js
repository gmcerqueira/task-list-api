"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongodb = require('mongodb');
var _connection = require('./connection'); var _connection2 = _interopRequireDefault(_connection);

const getAll = async (userId) => {
  const db = await _connection2.default.call(void 0, );
  const list = await db.collection('tasks').find({ userId }).toArray();

  return list;
};

const create = async (_id, text) => {
  const db = await _connection2.default.call(void 0, );
  const taskCreate = await db.collection('tasks').insertOne({
    userId: _id,
    text,
    status: 'pending',
    created: new Date(),
  });

  return taskCreate;
};

const findById = async (id) => {
  const db = await _connection2.default.call(void 0, );
  const taskFound = await db.collection('tasks').findOne(_mongodb.ObjectId.call(void 0, id));

  return taskFound;
};

const editTaskText = async (_id, text) => {
  const db = await _connection2.default.call(void 0, );
  const taskEdited = await db
    .collection('tasks')
    .updateOne({ _id: _mongodb.ObjectId.call(void 0, _id) }, { $set: { text, lastUpdate: new Date() } });
  console.log(taskEdited);

  return taskEdited.matchedCount;
};

const editTaskStatus = async (_id, status) => {
  const db = await _connection2.default.call(void 0, );
  const taskEdited = await db
    .collection('tasks')
    .updateOne({ _id: _mongodb.ObjectId.call(void 0, _id) }, { $set: { status, lastUpdate: new Date() } });

  return taskEdited.matchedCount;
};

const deleteTask = async (_id) => {
  const db = await _connection2.default.call(void 0, );
  const taskEdited = await db
    .collection('tasks')
    .deleteOne({ _id: _mongodb.ObjectId.call(void 0, _id) });

  return taskEdited.deletedCount;
};



exports.getAll = getAll; exports.create = create; exports.findById = findById; exports.editTaskText = editTaskText; exports.editTaskStatus = editTaskStatus; exports.deleteTask = deleteTask;
