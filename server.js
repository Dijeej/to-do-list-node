import express from "express";
import path from "path";
import { routes } from "./routes/routes.js";
import { connectToDB } from "./database/db.js"; // Importação correta da função

connectToDB();  // Conectando ao banco de dados
const server = express();

server.set("view engine", "ejs");

server.use(express.json());
server.use(express.urlencoded({ extended: true })); 
server.use(express.static(path.resolve("public")));
server.use(routes);

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3000,
});
