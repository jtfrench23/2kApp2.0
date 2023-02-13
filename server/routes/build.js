import express from "express";
import {
    createBuild,
    getBuild,
    getBuildsByGamertag,
    editBuild,
    deleteBuild
} from "../controllers/build.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
// Create

router.post("/create_build", verifyToken, createBuild);

// Read

router.get("/:id", verifyToken, getBuild);

router.get("/all_builds", verifyToken, getBuildsByGamertag);

// Update

router.patch("/:id/update", verifyToken, editBuild);

// Delete

router.delete("/:id/delete", verifyToken, deleteBuild);

export default router;