import { createNewUser } from '../services/user.service';

const singUp = async (req, res) => {
  const userCreate = await createNewUser(req.body);

  if (!userCreate) return res.status(409).json({ message: 'This email is already register' });

  return res.status(200).json(userCreate);
};

const name = () => {};

export { singUp, name };
