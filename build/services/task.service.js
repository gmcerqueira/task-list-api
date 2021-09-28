"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _taskmodel = require('../models/task.model');

const listTasks = async (user) => {
  const { _id } = user;
  const list = await _taskmodel.getAll.call(void 0, _id);

  return list;
};

const registerTask = async (text, user) => {
  const { _id } = user;
  const task = await _taskmodel.create.call(void 0, text, _id);

  return task.insertedId;
};

exports.listTasks = listTasks; exports.registerTask = registerTask;
