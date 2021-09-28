import { Router } from "express";

const routes = new Router();

routes.get("/", (res, req) => {
  res.status(200).json({ ok: "connected" });
});

export default routes;
