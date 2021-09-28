import { Router } from 'express';
import TaskController from '../controllers/task.controller';
import { singUp, login } from '../controllers/user.controller';
import validateJWT from '../middlewares/jwtAuth';

const routes = new Router();

routes.get('/', (_req, res) => {
  res.status(200).json({ ok: 'connected' });
});

routes.get('/tasks', validateJWT, TaskController.getAll);
routes.post('/tasks/create', validateJWT, TaskController.newTask);

routes.post('/singup', singUp);
routes.post('/login', login);

export default routes;
