import { listTasks, registerTask } from '../services/task.service';

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

export { getAll, newTask };
