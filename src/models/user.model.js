import connection from './connection';

const create = async (username, password) => {
  const db = await connection();
  const user = await db.collection('users').insertOne({ username, password });

  return user;
};

const name = () => {};

export { create, name };
