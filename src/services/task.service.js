import { findAll, create } from '../models/task.model';

const listTasks = async (user) => {
  const { _id } = user;
  const list = await findAll(_id);

  return list;
};

const registerTask = async (text, user) => {
  const { _id } = user;
  const task = await create(text, _id);

  return task;
};

export { listTasks, registerTask };
