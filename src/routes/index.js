import { Router } from 'express';
import { getAll, create } from '../controllers/task.controller';
import { singUp, login } from '../controllers/user.controller';
import validateJWT from '../middlewares/jwtAuth';

const routes = new Router();

routes.get('/', (_req, res) => {
  res.status(200).json({ ok: 'connected' });
});

routes.get('/tasks', validateJWT, getAll);
routes.post('/tasks/create', validateJWT, create);

routes.post('/singup', singUp);
routes.post('/login', login);

export default routes;
