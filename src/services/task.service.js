import { ObjectId } from 'mongodb';
import {
  getAll,
  create,
  findById,
  editTaskText,
  editTaskStatus,
  deleteTask,
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
  const taskRegister = await create(_id, text);

  return taskRegister.insertedId;
};

const findTask = async (taskId, user) => {
  const taskFound = await validateUserAccess(taskId, user);

  if (!taskFound) return { err: { accessDenied: true } };

  return taskFound;
};

const modTaskText = async (_id, user, text) => {
  const taskFound = await validateUserAccess(_id, user);

  if (!taskFound) return { err: { accessDenied: true } };

  const taskEdited = await editTaskText(_id, text);

  if (!taskEdited) return { err: { taskNotFound: true } };

  return findById(_id);
};

const modTaskStatus = async (_id, user) => {
  const taskFound = await validateUserAccess(_id, user);

  if (!taskFound) return { err: { accessDenied: true } };

  const newStatus = taskFound.status === 'pending' ? 'done' : 'pending';
  const taskEdited = await editTaskStatus(_id, newStatus);

  if (!taskEdited) return { err: { taskNotFound: true } };

  return findById(_id);
};

const removeTask = async (_id, user) => {
  const taskFound = await validateUserAccess(_id, user);

  if (!taskFound) return { err: { accessDenied: true } };

  const taskRemoved = await deleteTask(_id);

  if (!taskRemoved) return { err: { taskNotFound: true } };

  return true;
};

export {
  listTasks,
  registerTask,
  findTask,
  modTaskText,
  modTaskStatus,
  removeTask,
};
