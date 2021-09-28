import { create, findByEmail } from '../models/user.model';

const verifyWithExists = async (email) => {
  const exists = await findByEmail(email);

  if (exists) return true;

  return false;
};

const createNewUser = async (newUser) => {
  const { login, email } = newUser;

  if (verifyWithExists(email)) return false;

  const userCreate = await create(login, email);

  return userCreate;
};

const name = () => {};

export { createNewUser, name };
