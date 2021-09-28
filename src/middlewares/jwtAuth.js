import jwt from 'jsonwebtoken';
import User from '../models/user.model';

const secret = process.env.SECRET || 'test';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, secret);
    const user = await User.findByEmail(decoded.email);

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.userData = user;

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: err.message });
  }

  return true;
};
