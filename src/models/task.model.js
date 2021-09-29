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
  const taskEdited = await db.collection('tasks').updateOne({ _id }, { $set: { text, lastUpdate: new Date() } });

  return taskEdited.acknowledged;
};

export {
  getAll, create, findById, editTaskText,
};
