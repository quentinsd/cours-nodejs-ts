"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wilderServices_1 = __importDefault(require("../services/wilderServices"));
const router = express_1.default.Router();
router.post("/", async (req, res, next) => {
    const { name, city, skills } = req.body;
    const results = await wilderServices_1.default.create(name, city, skills);
    res.json({ success: true, results });
});
router.get("/", async (req, res, next) => {
    try {
        const results = await wilderServices_1.default.read();
        res.json(results);
    }
    catch (e) {
        next(e);
    }
});
router.put("/:name", async (req, res) => {
    const { city, skills } = req.body;
    const name = req.params.name;
    const results = await wilderServices_1.default.update(name, city, skills);
    res.json(results);
});
router.delete("/:name", async (req, res) => {
    const name = req.params.name;
    const results = await wilderServices_1.default.delete(name);
    res.json(results);
});
exports.default = router;
//# sourceMappingURL=wilderController.js.map