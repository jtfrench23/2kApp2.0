import express from "express";
import { getGames } from "../controllers/games.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */

router.get("/:userId/games", verifyToken, getGames);



export default router;