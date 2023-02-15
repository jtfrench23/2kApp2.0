import express from "express";
import { 
    getGamesByUser,
    getGamesByBuild,
    createGame
    } from "../controllers/games.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Create

router.post("/create_game", verifyToken, createGame);

// Read

router.get("/:userID/user_games", verifyToken, getGamesByUser);
router.get("/:buildID/build_games", verifyToken, getGamesByBuild);


export default router;