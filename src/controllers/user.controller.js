import jwt from 'jsonwebtoken';
import { createNewUser, verifyLogin } from '../services/user.service';

const secret = process.env.SECRET || 'test';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const singUp = async (req, res) => {
  const userCreate = await createNewUser(req.body);

  if (!userCreate) {
    return res.status(409).json({ message: 'This email is already register' });
  }

  return res.status(200).json({ userId: userCreate });
};

const login = async (req, res) => {
  const logged = await verifyLogin(req.body);

  if (!logged) {
    return res.status(409).json({ message: 'Email or password incorrect' });
  }

  const token = jwt.sign(logged, secret, jwtConfig);

  return res.status(200).json({ token });
};

export { login, singUp };
