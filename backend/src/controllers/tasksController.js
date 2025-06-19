//Array de métodos (C R U D)
const tasksController = {};
import tasksModel from "../models/Tasks.js"

// SELECT
tasksController.getTasks = async (req, res) => {
    const tasks = await tasksModel.find()
    res.json(tasks)
}

// INSERT
tasksController.createTasks = async (req, res) => {
    const { title, description, completed } = req.body;
    const newTask = new tasksModel({title, description, completed});
    await newTask.save();

    res.json({ message: "tasks saved"});
}

// DELETE
tasksController.deleteTasks = async (req, res) => {
    await tasksModel.findByIdAndDelete(req.params.id)
    res.json({ message: "task deleted"})
}

// UPDATE 
tasksController.updateTasks = async (req, res) => {
    //Solicito todos los valores 
    const {title, description, completed} = req.body;
    //Actualizo
    await tasksModel.findByIdAndUpdate(req.params.id, {title, description, completed}, {new: true});
    //Muestro un mensaje que todo se actualizó
    res.json({message: "task updated"});
};

export default tasksController;