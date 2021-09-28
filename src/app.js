import express from 'express';
import routes from './routes';
// import errors from './middlewares/erros';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    // this.server.use(errors);
  }

  routes() {
    this.server.use(routes);
  }
}
export default new App().server;
