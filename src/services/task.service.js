import taskModel from '../models/task.model';

class TaskService {
  async listTasks(user) {
    const { _id } = user;
    const list = await taskModel.findAll(_id);

    return list;
  }

  async registerTask(text, user) {
    const { _id } = user;
    const task = await taskModel.create(text, _id);

    return task;
  }
}

export default new TaskService();
