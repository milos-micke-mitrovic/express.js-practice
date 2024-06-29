import express from "express";
import morgan from "morgan";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const message = "Hello from Express!";
  console.log(message);
  res.status(200).send({ message });
});

app.use("/auth", routes.auth);
app.use("/api", routes.api);

app.use(errorHandler);

export default app;
