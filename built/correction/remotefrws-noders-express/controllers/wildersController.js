"use strict";
const express = require("express");
const wilderService = require("../services/wilderService");
const router = express.Router();
/**
 * GET /wilders
 * Retrieve all wilders
 */
router.get("/", async (req, res, next) => {
    try {
        const results = await wilderService.read();
        res.json(results);
    }
    catch (e) {
        next(e);
    }
});
/**
 * GET /wilders/6141ed44e7b4f3eaab9359e8
 * Retrieve one wilder
 */
router.get("/:id", async (req, res) => {
    const results = await wilderService.readOne(req.params.id);
    res.json(results);
});
/**
 * POST /wilders
 * Create a new wilder
 */
router.post("/", async (req, res) => {
    const { name, city, skills } = req.body;
    const wilder = await wilderService.create(name, city, skills);
    res.json(wilder);
});
/**
 * PUT /wilders/:id
 * Update a wilder
 */
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { name, city, skills } = req.body;
    const wilderupdated = await wilderService.update(id, name, city, skills);
    res.json(wilderupdated);
});
/**
 * DELETE /wilders/:id
 * Delete a user
 */
router.delete("/:id", async (req, res) => {
    await wilderService.delete(req.params.id);
    res.status(204).send();
});
module.exports = router;
//# sourceMappingURL=wildersController.js.map