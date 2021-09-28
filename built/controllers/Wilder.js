"use strict";
const express = require("express");
const wilderServices = require("../services/wilderServices");
const router = express.Router();
function runAsyncWrapper(callback) {
    return function (req, res, next) {
        callback(req, res, next).catch(next);
    };
}
router.post("/", async (req, res, next) => {
    const { name, city, skills } = req.body;
    const results = await wilderServices.create(name, city, skills);
    res.json({ success: true, results });
});
router.get("/", async (req, res, next) => {
    try {
        const results = await wilderServices.read();
        res.json(results);
    }
    catch (e) {
        next(e);
    }
});
router.put("/:name", async (req, res) => {
    const { city, skills } = req.body;
    const name = req.params.name;
    const results = await wilderServices.update(name, city, skills);
    res.json(results);
});
router.delete("/:name", async (req, res) => {
    const name = req.params.name;
    const results = await wilderServices.delete(name);
    res.json(results);
});
module.exports = router;
//# sourceMappingURL=Wilder.js.map