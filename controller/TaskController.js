import Task  from "../models/Task.js";

class TaskController {
    async getAll(req, res) {
        try{
            const tasksList = await Task.find();
            return res.render("index", {tasksList});
        } catch (err) {
            res.status(500).send({error: err.message});
        }
    }
    async createTask (req, res) {
        const task = req.body;
        if(!task.task) {
            return res.redirect("/");
        } 
        try {
            await Task.create(task);
            return res.redirect("/"); 
        } catch (err) {
            res.status(500).send({error: err.message});
        }
    }
}

export { TaskController };