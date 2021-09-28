import connection from './connection';

const getAll = async () => {
  const db = await connection();
  const list = db.collection('tasks').find().toArray();

  return list;
};

module.exports = {
  getAll,
};
