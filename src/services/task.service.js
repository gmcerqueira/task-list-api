import { findAll } from '../models/task.model';

const listTasks = async () => {
  const list = await findAll();

  return list;
};

const name = () => {};

export { listTasks, name };
