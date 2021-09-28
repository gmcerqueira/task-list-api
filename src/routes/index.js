import { Router } from 'express';
// import task from '../controllers/task.controller';
import { singUp, login } from '../controllers/user.controller';

const routes = new Router();

routes.get('/', (_req, res) => {
  res.status(200).json({ ok: 'connected' });
});

// routes.get('/tasks', task.getAll);

routes.post('/singup', singUp);
routes.post('/login', login);

export default routes;
