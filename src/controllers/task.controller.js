import TaskService from '../services/task.service';

class TaskController {
  async getAll(req, res) {
    const user = req.userData;
    const list = await TaskService.listTasks(user);

    res.status(200).json({ tasks: list });
  }

  async newTask(req, res) {
    const user = req.userData;

    const task = await TaskService.registerTask(req.body.task, user);

    res.status(200).json({ task });
  }
}

export default new TaskController();
