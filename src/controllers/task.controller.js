import { listTasks, newTask } from '../services/task.service';

const getAll = async (req, res) => {
  const user = req.userData;
  const list = await listTasks(user);

  res.status(200).json({ tasks: list });
};

const create = async (req, res) => {
  const user = req.userData;

  const task = await newTask(req.body.task, user);

  res.status(200).json({ task });
};

export { getAll, create };
