import { createNewUser } from '../services/user.service';

const singUp = async (req, res) => {
  const userCreate = await createNewUser(req.body);

  res.status(200).json(userCreate);
};

const name = () => {};

export { singUp, name };
