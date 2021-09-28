import jwt from 'jsonwebtoken';
import { findUserLogin } from '../models/user.model';

const secret = process.env.SECRET || 'test';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, secret);
    const user = await findUserLogin(decoded.email, decoded.password);

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }

    const { _id } = user;

    req.userId = _id;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }

  return true;
};
