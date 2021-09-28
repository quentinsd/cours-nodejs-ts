"use strict";
const express = require("express");
const mongoose = require("mongoose");
const WilderModel = require("./models/Wilder");
const wilderController = require("./controllers/Wilder");
const cors = require("cors");
const port = 4000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/wilders", wilderController);
mongoose.connect("mongodb://localhost:27017/wilderdb", { autoIndex: true }, (err) => {
    if (!err) {
        console.log("MongoDB Connection Succeeded.");
    }
    else {
        console.log("Error in DB connection: " + err);
    }
});
// app.post("/api/wilder", runAsyncWrapper(wilderController.create));
// app.put("/api/wilder/:name", runAsyncWrapper(wilderController.update));
// app.delete("/api/wilder/:name", runAsyncWrapper(wilderController.delete));
// app.get("/api/wilder", runAsyncWrapper(wilderController.read));
// function runAsyncWrapper(callback) {
//   return function (req, res, next) {
//     callback(req, res, next).catch(next);
//   };
// }
app.use((err, req, res, next) => {
    res.status(500).send("Something broke!");
});
app.listen(port, () => console.log("Server started on " + port));
//# sourceMappingURL=index.js.map