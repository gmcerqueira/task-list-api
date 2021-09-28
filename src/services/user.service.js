import { create, findByEmail, findUserLogin } from '../models/user.model';

const verifyWithExists = async (email) => {
  const exists = await findByEmail(email);

  if (exists) return true;

  return false;
};

const createNewUser = async (newUser) => {
  const { email, password } = newUser;

  if (await verifyWithExists(email)) return false;

  const userCreate = await create(email, password);

  return userCreate;
};

const verifyLogin = async (user) => {
  const { email, password } = user;
  const userLogged = await findUserLogin(email, password);

  if (!userLogged) return false;

  return userLogged;
};

export { createNewUser, verifyLogin };
