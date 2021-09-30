import cors from 'cors';
import { Router } from 'express';
import {
  getAll,
  newTask,
  getTask,
  editTaskText,
  editTaskStatus,
} from '../controllers/task.controller';
import { login, signUp } from '../controllers/user.controller';
import validateJWT from '../middlewares/jwtAuth';
import errors from '../middlewares/erros';

const routes = new Router();

routes.use(cors());

routes.get('/', (_req, res) => {
  res.status(200).json({ connection: true });
});

routes.get('/tasks', validateJWT, getAll);
routes.post('/tasks/create', validateJWT, newTask);
routes.get('/tasks/:id', validateJWT, getTask);
routes.put('/tasks/:id', validateJWT, editTaskText);
routes.put('/tasks/check/:id', validateJWT, editTaskStatus);

routes.post('/signup', signUp);
routes.post('/login', login);

routes.use(errors);

export default routes;
