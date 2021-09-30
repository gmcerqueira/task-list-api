import jwt from 'jsonwebtoken';
import { createNewUser, verifyLogin } from '../services/user.service';

const secret = process.env.SECRET || 'test';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const signUp = async (req, res, next) => {
  const userCreate = await createNewUser(req.body);

  if (userCreate.err) return next(userCreate.err);

  return res.status(200).json({ userId: userCreate });
};

const login = async (req, res, next) => {
  const logged = await verifyLogin(req.body);

  if (logged.err) return next(logged.err);

  const token = jwt.sign(logged, secret, jwtConfig);

  return res.status(200).json({ token });
};

export { login, signUp };
