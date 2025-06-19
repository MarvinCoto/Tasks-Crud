//importo la librería que acabo de instalar
import dotenv from "dotenv";

// Ejecuto "Dotenv"
// me ayudará a acceder al .env
dotenv.config();

export const config = {
    db: {
        URI: process.env.DB_URI || "mongodb+srv://MarvinCoto:marvinjavierCoto1@cluster0.vxund.mongodb.net/TasksCrud",
    },
    server: {
        port: process.env.PORT || 4000,
    }
};