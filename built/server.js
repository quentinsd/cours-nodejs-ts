"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const wilderController_1 = __importDefault(require("./controllers/wilderController"));
const cors_1 = __importDefault(require("cors"));
const port = 4000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/api/wilders", wilderController_1.default);
(0, mongoose_1.connect)("mongodb://localhost:27017/wilderdb", { autoIndex: true }, (err) => {
    if (!err) {
        console.log("MongoDB Connection Succeeded.");
    }
    else {
        console.log("Error in DB connection: " + err);
    }
});
app.use((err, req, res, next) => {
    res.status(500).send("Something broke!");
});
app.listen(port, () => console.log("Server started on " + port));
//# sourceMappingURL=server.js.map