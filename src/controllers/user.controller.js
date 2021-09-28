import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

const secret = process.env.SECRET || 'test';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

class UserController {
  async singUp(req, res) {
    const userCreate = await UserService.createNewUser(req.body);

    if (!userCreate) return res.status(409).json({ message: 'This email is already register' });

    return res.status(200).json({ userId: userCreate });
  }

  async login(req, res) {
    const logged = await UserService.verifyLogin(req.body);

    if (!logged) return res.status(409).json({ message: 'Email or password incorrect' });

    const token = jwt.sign(logged, secret, jwtConfig);

    return res.status(200).json({ token });
  }
}

export default new UserController();
