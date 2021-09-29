"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _taskservice = require('../services/task.service');

const getAll = async (req, res) => {
  const user = req.userData;
  const list = await _taskservice.listTasks.call(void 0, user);

  res.status(200).json({ tasks: list });
};

const newTask = async (req, res) => {
  const user = req.userData;
  const text = req.body.task;

  const taskId = await _taskservice.registerTask.call(void 0, text, user);

  res.status(200).json({ taskId });
};

const getTask = async (req, res, next) => {
  const { id } = req.params;
  const user = req.userData;

  const task = await _taskservice.findTask.call(void 0, id, user);
  if (task.err) return next(task.err);

  return res.status(200).json(task);
};

exports.getAll = getAll; exports.newTask = newTask; exports.getTask = getTask;
