import express from "express";
import { indexRouter } from "./routes/index.route.js";
const corsOptions = {
    origin: '*', // Allow all origins (for testing only)
  };
import cors from "cors";

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

export { app };