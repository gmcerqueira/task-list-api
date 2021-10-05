import { ObjectId } from 'mongodb';
import connection from './connection';

const getAll = async (userId) => {
  const db = await connection();
  const list = await db.collection('tasks').find({ userId }).toArray();

  return list;
};

const create = async (_id, text) => {
  const db = await connection();
  const taskCreate = await db.collection('tasks').insertOne({
    userId: _id,
    text,
    status: 'pending',
    created: new Date(),
  });

  return taskCreate;
};

const findById = async (id) => {
  const db = await connection();
  const taskFound = await db.collection('tasks').findOne(ObjectId(id));

  return taskFound;
};

const editTaskText = async (_id, text) => {
  const db = await connection();
  const taskEdited = await db
    .collection('tasks')
    .updateOne({ _id: ObjectId(_id) }, { $set: { text, lastUpdate: new Date() } });
  console.log(taskEdited);

  return taskEdited.matchedCount;
};

const editTaskStatus = async (_id, status) => {
  const db = await connection();
  const taskEdited = await db
    .collection('tasks')
    .updateOne({ _id: ObjectId(_id) }, { $set: { status, lastUpdate: new Date() } });

  return taskEdited.matchedCount;
};

const deleteTask = async (_id) => {
  const db = await connection();
  const taskEdited = await db
    .collection('tasks')
    .deleteOne({ _id: ObjectId(_id) });

  return taskEdited.deletedCount;
};

export {
  getAll, create, findById, editTaskText, editTaskStatus, deleteTask,
};
