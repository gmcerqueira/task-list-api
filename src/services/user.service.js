import UserModel from '../models/user.model';

class UserService {
  returnUser(user) {
    const { password, ...newUser } = user;

    return newUser;
  }

  async verifyWithExists(email) {
    const exists = await UserModel.findByEmail(email);

    if (exists) return true;

    return false;
  }

  async createNewUser(newUser) {
    const { email, password } = newUser;

    if (await this.verifyWithExists(email)) return false;

    const userCreate = await UserModel.create(email, password);

    return userCreate.insertedId;
  }

  async verifyLogin(user) {
    const { email, password } = user;
    const userLogged = await UserModel.findUserLogin(email, password);

    if (!userLogged) return false;

    return this.returnUser(userLogged);
  }
}

export default new UserService();
