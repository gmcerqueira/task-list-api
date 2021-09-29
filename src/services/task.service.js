import { getAll, create } from '../models/task.model';

const listTasks = async (user) => {
  const { _id } = user;
  const list = await getAll(_id);

  return list;
};

const registerTask = async (text, user) => {
  const { _id } = user;
  const task = {
    text, userId: _id, status: 'pending', created: new Date(),
  };
  const taskRegister = await create(task);

  return taskRegister.insertedId;
};

export { listTasks, registerTask };
