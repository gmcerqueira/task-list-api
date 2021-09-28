import { ObjectId } from 'mongodb';
import connection from './connection';

const findAll = async (id) => {
  const db = await connection();

  const list = await db.collection('tasks').find({ userId: ObjectId(id) }).toArray();

  return list;
};

const create = async (text, userId) => {
  const db = await connection();
  const task = await db
    .collection('tasks')
    .insertOne({ text, userId, created: new Date() });

  return task;
};

export { findAll, create };
