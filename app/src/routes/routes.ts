import express from "express";
import { authMiddleware, paramMiddleware } from "../middlewares/auth.middleware";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.controller";

const router = express.Router();

router.get("/users/:id", paramMiddleware, getUser);
router.get("/users", getUsers);
router.post("/users", authMiddleware, createUser);
router.put("/users/:id", paramMiddleware, authMiddleware, updateUser);
router.delete("/users/:id", paramMiddleware, deleteUser);

export default router;