"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongodb = require('mongodb');
var _taskmodel = require('../models/task.model');

const validateUserAccess = async (taskId, user) => {
  const { _id } = user;
  const taskFound = await _taskmodel.findById.call(void 0, taskId);

  if (_mongodb.ObjectId.call(void 0, _id).toString() !== _mongodb.ObjectId.call(void 0, taskFound.userId).toString()) return false;

  return taskFound;
};

const listTasks = async (user) => {
  const { _id } = user;
  const list = await _taskmodel.getAll.call(void 0, _id);

  return list;
};

const registerTask = async (text, user) => {
  const { _id } = user;
  const task = {
    text,
    userId: _id,
    status: 'pending',
    created: new Date(),
  };
  const taskRegister = await _taskmodel.create.call(void 0, task);

  return taskRegister.insertedId;
};

const findTask = async (taskId, user) => {
  const taskFound = await validateUserAccess(taskId, user);
  if (!taskFound) return { err: { accessDenied: true } };
  return taskFound;
};

exports.listTasks = listTasks; exports.registerTask = registerTask; exports.findTask = findTask;
