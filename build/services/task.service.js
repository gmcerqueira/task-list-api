"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongodb = require('mongodb');


var _taskmodel = require('../models/task.model');

const validateUserAccess = async (taskId, user) => {
  const { _id } = user;
  const taskFound = await _taskmodel.findById.call(void 0, taskId);

  if (
    !taskFound
    || _mongodb.ObjectId.call(void 0, _id).toString() !== _mongodb.ObjectId.call(void 0, taskFound.userId).toString()
  ) {
    return false;
  }

  return taskFound;
};

const listTasks = async (user) => {
  const { _id } = user;
  const list = await _taskmodel.getAll.call(void 0, _id);

  return list;
};

const registerTask = async (text, user) => {
  const { _id } = user;
  const taskRegister = await _taskmodel.create.call(void 0, _id, text);

  return taskRegister.insertedId;
};

const findTask = async (taskId, user) => {
  const taskFound = await validateUserAccess(taskId, user);
  if (!taskFound) return { err: { accessDenied: true } };
  return taskFound;
};

const modTaskText = async (_id, user, text) => {
  const taskFound = await validateUserAccess(_id, user);

  if (!taskFound) return { err: { accessDenied: true } };

  const taskEdited = await _taskmodel.editTaskText.call(void 0, _id, text);

  if (!taskFound) return { err: { accessDenied: true } };
  if (!taskEdited) return { err: { taskNotFound: true } };

  return _taskmodel.findById.call(void 0, _id);
};

const modTaskStatus = async (_id, user) => {
  const taskFound = await validateUserAccess(_id, user);

  if (!taskFound) return { err: { accessDenied: true } };

  const newStatus = taskFound.status === 'pending' ? 'done' : 'pending';
  const taskEdited = await _taskmodel.editTaskStatus.call(void 0, _id, newStatus);

  if (!taskFound) return { err: { accessDenied: true } };
  if (!taskEdited) return { err: { taskNotFound: true } };

  return _taskmodel.findById.call(void 0, _id);
};



exports.listTasks = listTasks; exports.registerTask = registerTask; exports.findTask = findTask; exports.modTaskText = modTaskText; exports.modTaskStatus = modTaskStatus;
