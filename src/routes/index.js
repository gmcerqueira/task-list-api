import { Router } from 'express';
import Task from '../controllers/task.controller';
import User from '../controllers/user.controller';
import validateJWT from '../middlewares/jwtAuth';

const routes = new Router();

routes.get('/', (_req, res) => {
  res.status(200).json({ ok: 'connected' });
});

routes.get('/tasks', validateJWT, Task.getAll);
routes.post('/tasks/create', validateJWT, Task.newTask);

routes.post('/singup', User.singUp);
routes.post('/login', User.login);

export default routes;
