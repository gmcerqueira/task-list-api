import { getAll, create } from '../models/task.model';

const listTasks = async (user) => {
  const { _id } = user;
  const list = await getAll(_id);

  return list;
};

const newTask = async (text, user) => {
  const { _id } = user;
  const task = await create(text, _id);

  return task;
};

export { listTasks, newTask };
