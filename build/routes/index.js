"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _express = require('express');







var _taskcontroller = require('../controllers/task.controller');
var _usercontroller = require('../controllers/user.controller');
var _jwtAuth = require('../middlewares/jwtAuth'); var _jwtAuth2 = _interopRequireDefault(_jwtAuth);
var _erros = require('../middlewares/erros'); var _erros2 = _interopRequireDefault(_erros);

const routes = new (0, _express.Router)();

routes.use(_cors2.default.call(void 0, ));

routes.get('/', (_req, res) => {
  res.status(200).json({ connection: true });
});

routes.get('/tasks', _jwtAuth2.default, _taskcontroller.getAll);
routes.post('/tasks/create', _jwtAuth2.default, _taskcontroller.newTask);
routes.get('/tasks/:id', _jwtAuth2.default, _taskcontroller.getTask);
routes.put('/tasks/:id', _jwtAuth2.default, _taskcontroller.editTaskText);
routes.delete('/tasks/:id', _jwtAuth2.default, _taskcontroller.deleteTask);
routes.put('/tasks/check/:id', _jwtAuth2.default, _taskcontroller.editTaskStatus);

routes.post('/signup', _usercontroller.signUp);
routes.post('/login', _usercontroller.login);

routes.use(_erros2.default);

exports. default = routes;
