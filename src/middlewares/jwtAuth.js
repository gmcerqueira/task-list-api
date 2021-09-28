import jwt from 'jsonwebtoken';
import { searchEmail } from '../services/user.service';

const secret = process.env.SECRET || 'test';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, secret);
    const user = await searchEmail(decoded.email);

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.userData = user;

    next();
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }

  return true;
};
