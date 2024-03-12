import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { create } from "../controllers/user.controller";

const router = express.Router();

router.post("/users", authMiddleware, create);

export default router;