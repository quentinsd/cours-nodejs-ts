import express, { Request, Response, NextFunction } from "express";
import wilderServices from "../services/wilderServices";
import Wilder from "../models/Wilder";

const router = express.Router();

router.post(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name, city, skills } = req.body.newWilder;
    const results: Wilder = await wilderServices.create(name, city, skills);
    res.json({ success: true, results });
  }
);

router.get(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const results: Array<Wilder> = await wilderServices.read();
      res.json(results);
    } catch (e) {
      next(e);
    }
  }
);
router.put("/:name", async (req: Request<{ name: string }>, res: Response) => {
  const { city, skills } = req.body;
  const name = req.params.name;
  const results = await wilderServices.update(name, city, skills);
  res.json(results);
});

router.delete(
  "/:name",
  async (req: Request<{ name: string }>, res: Response) => {
    const name = req.params.name;
    const results = await wilderServices.delete(name);
    res.json(results);
  }
);

export default router;
