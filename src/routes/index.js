import express from "express";
import livros from "./livroRoutes.js"
import formulario from "../views/cadastroView.js"

const routes = (app) => {

    app.get("/", (req, res) => {
        res.status(200).send("Página inicial");
    })
    app.get("/cadastro", (req, res) => {
        res.status(200).send(formulario())
    })

    app.use(express.json(), livros);

}

export default routes;