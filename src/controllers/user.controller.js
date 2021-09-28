import { createNewUser, verifyLogin } from '../services/user.service';

const singUp = async (req, res) => {
  const userCreate = await createNewUser(req.body);

  if (!userCreate) return res.status(409).json({ message: 'This email is already register' });

  return res.status(200).json(userCreate);
};

const login = async (req, res) => {
  const logged = await verifyLogin(req.body);

  if (!logged) return res.status(409).json({ message: 'Email or password incorrect' });

  return res.status(200).json({ logged });
};

export { singUp, login };
