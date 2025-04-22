import express from "express";
import view from "../views/cadastroView.js";

const routes = express.Router();

routes.get("/cadastro", view)
routes.get("/cadastro/:id", view)

export default routes;