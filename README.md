# Routes

## Tasks

- routes.get('/tasks', validateJWT, getAll);
- routes.post('/tasks/create', validateJWT, newTask);
- routes.get('/tasks/:id', validateJWT, getTask);
- routes.put('/tasks/:id', validateJWT, editTaskText);
- routes.put('/tasks/check/:id', validateJWT, editTaskStatus);

## User

- routes.post('/singup', singUp);
- routes.post('/login', login);

