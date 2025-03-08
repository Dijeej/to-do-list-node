import Router from "express";
import { TaskController } from "../controller/TaskController.js";

const routes = Router();
const taskController = new TaskController();

routes.get("/", taskController.getAll);
routes.post("/create", taskController.createTask);
routes.get("/getById/:id/:method", taskController.getById);
routes.post("/update/:id", taskController.updateTask);
routes.get("/delete/:id", taskController.deleteTask);
routes.get("/taskDoneUndone/:id", taskController.taskDoneUndone);

export { routes };