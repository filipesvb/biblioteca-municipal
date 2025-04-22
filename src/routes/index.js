import express from "express";
import livros from "./livroRoutes.js"
import cadastro from "./cadastroRoutes.js"

const routes = (app) => {
    
    
    app.get("/", (req, res) => {
        res.status(200).send("Página inicial");
    })
    
    app.use("/static", express.static("src/public"));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json(), livros, cadastro);
    
    

}

export default routes;