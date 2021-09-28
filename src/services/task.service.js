import taskModel from '../models/task.model';

const listTasks = async (user) => {
  const { _id } = user;
  const list = await taskModel.findAll(_id);

  return list;
};

const registerTask = async (text, user) => {
  const { _id } = user;
  const task = await taskModel.create(text, _id);

  return task;
};

export { listTasks, registerTask };
