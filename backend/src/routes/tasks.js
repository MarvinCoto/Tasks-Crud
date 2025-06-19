import express from "express";
import tasksController from "../controllers/tasksController.js";

//Router nos ayuda a colocar los métodos que tendrá mi ruta
const router = express.Router();

router.route("/")
.get(tasksController.getTasks)
.post(tasksController.createTasks)

router.route("/:id")
.put(tasksController.updateTasks)
.delete(tasksController.deleteTasks);

export default router;