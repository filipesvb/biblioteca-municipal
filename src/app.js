import express from "express";
import routes from "./routes/index.js";
import methodOverride from "method-override"


const app = express();
routes(app);
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
}))



export default app;