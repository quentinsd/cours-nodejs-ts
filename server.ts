import express, { Request, Response, NextFunction } from "express";
import { connect } from "mongoose";
import wilderController from "./controllers/wilderController";
import cors from "cors";

const port = 4000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/wilders", wilderController);

connect("mongodb://localhost:27017/wilderdb", { autoIndex: true }, (err) => {
  if (!err) {
    console.log("MongoDB Connection Succeeded.");
  } else {
    console.log("Error in DB connection: " + err);
  }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send("Something broke!");
});
app.listen(port, () => console.log("Server started on " + port));
