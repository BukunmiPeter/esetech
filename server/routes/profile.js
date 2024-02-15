import express from "express";
import { verifyUser } from "../utils/verifyToken.js";
import { createProfile, getProfile, updateProfile } from "../controllers/profile.js";


const router = express.Router();
//CREATE
router.post("/", verifyUser, createProfile);
//UPDATE
router.put("/update/:id", verifyUser, updateProfile);
//GET
router.get("/:id",verifyUser, getProfile);



export default router;
