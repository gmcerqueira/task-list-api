import { create, findByEmail } from '../models/user.model';

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

const name = () => {};

export { createNewUser, name };
