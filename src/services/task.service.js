import { ObjectId } from 'mongodb';
import {
  getAll, create, findById, editTask,
} from '../models/task.model';

const validateUserAccess = async (taskId, user) => {
  const { _id } = user;
  const taskFound = await findById(taskId);

  if (
    !taskFound
    || ObjectId(_id).toString() !== ObjectId(taskFound.userId).toString()
  ) {
    return false;
  }

  return taskFound;
};

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

const findTask = async (taskId, user) => {
  const taskFound = await validateUserAccess(taskId, user);
  if (!taskFound) return { err: { accessDenied: true } };
  return taskFound;
};

const modTask = async (taskId, user, text) => {
  const taskFound = await validateUserAccess(taskId, user);

  if (!taskFound) return { err: { accessDenied: true } };

  const { _id } = taskFound;
  const taskEdited = await editTask(_id, text);

  if (!taskFound) return { err: { accessDenied: true } };
  if (!taskEdited) return { err: { taskNotFound: true } };

  return findById(taskId);
};

export {
  listTasks, registerTask, findTask, modTask,
};
