import { create } from '../models/user.model';

const createNewUser = async (newUser) => {
  const { login, password } = newUser;
  const userCreate = await create(login, password);

  return userCreate;
};

const name = () => {};

export { createNewUser, name };
