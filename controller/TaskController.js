import Task  from "../models/Task.js";

let message = "";
let type = "";

class TaskController {
    async getAll(req, res) {
        try{
            setTimeout(() => {
                message = "";
                type = "";
            }, 2000);
            const tasksList = await Task.find();
            return res.render("index", {
                tasksList, 
                task: null, 
                taskDelete: null,
                message, 
                type
            });
        } catch (err) {
            res.status(500).send({error: err.message});
        }
    }

    async createTask (req, res) {
        const task = req.body;
        if(!task.task) {
            message = "Insira alguma tarefa antes de adicionar";
            type = "danger";
            return res.redirect("/");
        } 
        try {
            await Task.create(task);
            message = "Tarefa adicionada com sucesso";
            type = "success";
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
                res.render("index", {
                    task, 
                    taskDelete: null, 
                    tasksList,
                    message, 
                    type
                });
            } else {
                res.render("index", {
                    task: null, 
                    taskDelete: task, 
                    tasksList,
                    message,
                    type
                });
            }
        } catch (err) {
            res.status(500).send({error: err.message});
        }
    }
    async updateTask (req, res) {
        try {
            const task = req.body 
            await Task.updateOne({_id: req.params.id }, task);
            message = "Tarefa alterada com sucesso";
            type = "success"
            res.redirect("/");
        } catch (err) {
            res.status(500).send({error: err.message});
        }
    }
    async deleteTask (req, res) {
        try {
            await Task.deleteOne({_id: req.params.id});
            message = "Tarefa apagada com sucesso";
            type = "success";
            res.redirect("/");
        } catch (err) {
            res.status(500).send({error: err.message});
        }
    }
}

export { TaskController };