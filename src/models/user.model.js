import connection from './connection';

const create = async (newUser) => {
  const db = await connection();
  const user = await db.collection('users').insertOne(newUser);

  return user;
};

const findByEmail = async (email) => {
  const db = await connection();
  const user = await db.collection('users').findOne({ email });

  return user;
};

const login = async (email, password) => {
  const db = await connection();
  const user = await db.collection('users').findOne({ email, password });

  return user;
};

export { create, findByEmail, login };
