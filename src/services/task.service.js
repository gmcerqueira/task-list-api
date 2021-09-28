import task from '../models/task.model';

const getAll = async () => {
  const list = await task.getAll();

  return list;
};

module.exports = { getAll };
