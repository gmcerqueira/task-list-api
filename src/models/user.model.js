import connection from './connection';

const create = async (email, password) => {
  const db = await connection();
  const user = await db.collection('users').insertOne({ email, password });

  return user;
};

const findByEmail = async (email) => {
  const db = await connection();
  const user = await db.collection('users').findOne({ email });

  return user;
};

const findUserLogin = async (email, password) => {
  const db = await connection();
  const user = await db.collection('users').findOne({ email, password });

  return user;
};

export { create, findByEmail, findUserLogin };
