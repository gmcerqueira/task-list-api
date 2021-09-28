import connection from './connection';

const findAll = async () => {
  const db = await connection();
  const list = db.collection('tasks').find().toArray();

  return list;
};

const create = async (text, userId) => {
  const db = await connection();
  const task = db.collection('tasks').insertOne({ text, userId, created: new Date() });

  return task;
};

export { findAll, create };
