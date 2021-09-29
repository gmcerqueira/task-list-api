import { getAll, create, findById } from '../models/task.model';

const listTasks = async (user) => {
  const { _id } = user;
  const list = await getAll(_id);

  return list;
};

const registerTask = async (text, user) => {
  const { _id } = user;
  const task = {
    text,
    userId: _id,
    status: 'pending',
    created: new Date(),
  };
  const taskRegister = await create(task);

  return taskRegister.insertedId;
};

const findTask = async (id) => {
  const taskFound = await findById(id);

  return taskFound;
};

export { listTasks, registerTask, findTask };
