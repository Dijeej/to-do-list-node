import Task  from "../models/Task.js";

class TaskController {
    async getAll(req, res) {
        try{
            const tasksList = await Task.find();
            return res.render("index", {tasksList, task: null, taskDelete: null});
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

    async getById (req, res) {
        try {        
            const task = await Task.findOne({_id: req.params.id});
            const tasksList = await Task.find();
            if (req.params.method === "update") {
                res.render("index", {task, taskDelete: null, tasksList});
            } else {
                res.render("index", {task: null, taskDelete: task, tasksList});
            }
        } catch (err) {
            res.status(500).send({error: err.message});
        }
    }
    async updateTask (req, res) {
        try {
            const task = req.body 
            await Task.updateOne({_id: req.params.id }, task);
            res.redirect("/");
        } catch (err) {
            res.status(500).send({error: err.message});
        }
    }
    async deleteTask (req, res) {
        try {
            await Task.deleteOne({_id: req.params.id});
            res.redirect("/");
        } catch (err) {
            res.status(500).send({error: err.message});
        }
    }
}

export { TaskController };