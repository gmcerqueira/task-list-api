import { listTasks } from '../services/task.service';

const getAll = async (req, res) => {
  const list = await listTasks();

  res.status(200).json({ tasks: list });
};

const name = () => {};

export { getAll, name };
