// Importo todo lo de la librería de Express
import express from "express";

import tasksRoutes from "./src/routes/tasks.js";

import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

//Creo una constante que es igual a la librería que importé
const app = express();


//Que acepte datos en json
app.use(express.json());


//Traemos el archivo json
/*const swaggerDocument = JSON.parse(
  fs.readFileSync(path.resolve("./DocumentacionTasksCrud.json"), "utf-8")
)*/

//app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//Definimos las rutas de las funciones que tendrá la página web

app.use("/api/tasks", tasksRoutes)

//Exporto la constante para poder usar express en otros archivos
export default app;