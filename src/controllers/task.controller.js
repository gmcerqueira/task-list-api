import task from '../services/task.service';

const getAll = async (req, res) => {
  const list = await task.getAll();

  res.status(200).json({ tasks: list });
};

export { getAll };
