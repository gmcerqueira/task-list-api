import connection from './connection';

class UserModel {
  async create(email, password) {
    const db = await connection();
    const user = await db.collection('users').insertOne({ email, password });

    return user;
  }

  async findByEmail(email) {
    const db = await connection();
    const user = await db.collection('users').findOne({ email });

    return user;
  }

  async findUserLogin(email, password) {
    const db = await connection();
    const user = await db.collection('users').findOne({ email, password });

    return user;
  }
}

export default new UserModel();
