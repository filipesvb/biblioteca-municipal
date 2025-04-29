import "dotenv/config";
import express from "express";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  })
);

routes(app);

export default app;
