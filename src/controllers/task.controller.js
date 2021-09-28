import TaskService from '../services/task.service';

const getAll = async (req, res) => {
  const user = req.userData;
  const list = await TaskService.listTasks(user);

  res.status(200).json({ tasks: list });
};

const newTask = async (req, res) => {
  const user = req.userData;

  const task = await TaskService.registerTask(req.body.task, user);

  res.status(200).json({ task });
};

export { getAll, newTask };
