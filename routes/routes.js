import Router from "express";
import { TaskController } from "../controller/TaskController.js";

const routes = Router();
const taskController = new TaskController();

routes.get("/", taskController.getAll);
routes.post("/create", taskController.createTask);

export { routes };