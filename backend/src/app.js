import express from "express";
import routes from "./routes/index.js";
import cors from "cors"

const app = express();

app.use(cors({
    origin: 'https://potential-orbit-pw6wwwpp54pcr449-3000.app.github.dev',
    credentials: true
}));



routes(app);

export default app;