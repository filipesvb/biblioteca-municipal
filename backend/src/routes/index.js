import express from "express";
import livros from "./livroRoutes.js"
import cadastro from "./cadastroRoutes.js"
import methodOverride from "method-override"
import cors from "cors"

const routes = (app) => {
    

    app.get("/", (req, res) => {
        res.status(200).send("Página inicial");
    })
    
    app.use("/static", express.static("src/public"));
    app.use(express.urlencoded({ extended: true }));
    app.use(methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
          // look in urlencoded POST bodies and delete it
          var method = req.body._method
          delete req.body._method
          return method
        }
    }))    
    app.use(express.json(), livros, cadastro);
    
    

}

export default routes;