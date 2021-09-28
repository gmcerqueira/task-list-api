import { create, findByEmail, login } from '../models/user.model';

const returnUser = (user) => {
  const { password, ...newUser } = user;

  return newUser;
};

const verifyWithExists = async (email) => {
  const exists = await findByEmail(email);

  if (exists) return true;

  return false;
};

const createNewUser = async (newUser) => {
  const { email, password } = newUser;

  if (await verifyWithExists(email)) return false;

  const userCreate = await create(email, password);

  return userCreate.insertedId;
};

const verifyLogin = async (user) => {
  const { email, password } = user;
  const userLogged = await login(email, password);

  if (!userLogged) return false;

  return returnUser(userLogged);
};

export { createNewUser, verifyLogin };
