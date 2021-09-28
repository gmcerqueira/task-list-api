import connection from './connection';

class TaskModel {
  async findAll(userId) {
    const db = await connection();

    const list = await db.collection('tasks').find({ userId }).toArray();

    return list;
  }

  async create(text, userId) {
    const db = await connection();
    const task = await db
      .collection('tasks')
      .insertOne({ text, userId, created: new Date() });

    return task;
  }
}

export default new TaskModel();
