"use strict";
const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./tools/errorsHandler");
const wilderController = require("./controllers/wildersController");
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log(new Date());
    console.log(req.body);
    next();
});
mongoose
    .connect("mongodb://127.0.0.1:27017/wilderdb", {
    autoIndex: true,
})
    .then(() => console.log('Connected'))
    .catch(err => console.log(err));
app.use('/wilders', wilderController);
app.use(errorHandler.error);
app.listen(3000, () => console.log("Server started on 3000"));
//# sourceMappingURL=index.js.map