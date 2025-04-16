import express from "express";
import routes from "./routes/index.js";
import db from "./config/dbConnect.js";

const app = express();
routes(app);

app.post("/cadastro", (req, res) => {
    const livro = req.body;
    res.status(200).json(livro)
})

export default app;