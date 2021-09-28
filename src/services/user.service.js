import Joi from 'joi';
import { create, findByEmail, login } from '../models/user.model';

const verifyNewUser = (user) => {
  const { error } = Joi.object({
    email: Joi.string().email().not().empty()
      .required(),
    password: Joi.string().not().empty().min(6)
      .required(),
  }).validate(user);

  return error;
};

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
  const entriesError = verifyNewUser(newUser);

  if (entriesError) return { err: entriesError };

  const { email, password } = newUser;

  if (await verifyWithExists(email)) return { err: { emailExists: true } };

  const userCreate = await create(email, password);

  return userCreate.insertedId;
};

const verifyLogin = async (user) => {
  const { email, password } = user;
  const userLogged = await login(email, password);

  if (!userLogged) return { err: { incorrectUserInfo: true } };

  return returnUser(userLogged);
};

export { createNewUser, verifyLogin };
