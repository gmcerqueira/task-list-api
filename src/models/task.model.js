import connection from './connection';

const getAll = async (userId) => {
  const db = await connection();

  const list = await db.collection('tasks').find({ userId }).toArray();

  return list;
};

const create = async (text, userId) => {
  const db = await connection();
  const task = await db
    .collection('tasks')
    .insertOne({ text, userId, created: new Date() });

  return task;
};

export { getAll, create };
