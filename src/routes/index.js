import { Router } from 'express';
import task from '../controllers/task.controller';

const routes = new Router();

routes.get('/', (_req, res) => {
  res.status(200).json({ ok: 'connected' });
});

routes.get('/tasks', task.getAll);

export default routes;
