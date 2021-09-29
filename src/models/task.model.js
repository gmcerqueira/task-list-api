import connection from './connection';

const getAll = async (userId) => {
  const db = await connection();
  const list = await db.collection('tasks').find({ userId }).toArray();

  return list;
};

const create = async (task) => {
  const db = await connection();
  const taskCreate = await db
    .collection('tasks')
    .insertOne(task);

  return taskCreate;
};

export { getAll, create };
