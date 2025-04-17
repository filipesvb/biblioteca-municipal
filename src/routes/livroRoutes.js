import express from "express";
import LivroController from "../controllers/livroController.js"
const routes = express.Router();

routes.get("/livros", LivroController.listar);
routes.post("/livros", LivroController.cadastrar);


export default routes;