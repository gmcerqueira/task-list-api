import {
  listTasks,
  registerTask,
  findTask,
  modTaskText,
  modTaskStatus,
  removeTask,
} from '../services/task.service';

const getAll = async (req, res) => {
  const user = req.userData;
  const list = await listTasks(user);

  res.status(200).json({ tasks: list });
};

const newTask = async (req, res) => {
  const user = req.userData;
  const text = req.body.task;

  const taskId = await registerTask(text, user);

  res.status(200).json({ taskId });
};

const getTask = async (req, res, next) => {
  const { id } = req.params;
  const user = req.userData;

  const task = await findTask(id, user);
  if (task.err) return next(task.err);

  return res.status(200).json(task);
};

const editTaskText = async (req, res, next) => {
  const { id } = req.params;
  const user = req.userData;
  const text = req.body.task;

  const task = await modTaskText(id, user, text);
  if (task.err) return next(task.err);

  return res.status(200).json(task);
};

const editTaskStatus = async (req, res, next) => {
  const { id } = req.params;
  const user = req.userData;

  const task = await modTaskStatus(id, user);

  if (task.err) return next(task.err);

  return res.status(200).json(task);
};

const deleteTask = async (req, res, next) => {
  const { id } = req.params;
  const user = req.userData;

  const task = await removeTask(id, user);

  if (task.err) return next(task.err);

  return res.status(200).json(task);
};

export {
  getAll, newTask, getTask, editTaskText, editTaskStatus, deleteTask,
};
