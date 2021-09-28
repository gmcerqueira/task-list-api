import connection from './connection';

const findAll = async () => {
  const db = await connection();
  const list = db.collection('tasks').find().toArray();

  return list;
};
const name = () => {};

export { findAll, name };
