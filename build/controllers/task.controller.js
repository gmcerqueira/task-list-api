"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _taskservice = require('../services/task.service');

const getAll = async (req, res) => {
  const user = req.userData;
  const list = await _taskservice.listTasks.call(void 0, user);

  res.status(200).json({ tasks: list });
};

const newTask = async (req, res) => {
  const user = req.userData;
  const taskId = await _taskservice.registerTask.call(void 0, req.body.task, user);

  res.status(200).json({ taskId });
};

exports.getAll = getAll; exports.newTask = newTask;
