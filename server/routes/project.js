import express from "express";
import { verifyUser } from "../utils/verifyToken.js";
import {  createProject, deleteProject, getProject, getProjects, updateProject } from "../controllers/project.js";

const router = express.Router();
//CREATE
router.post("/", verifyUser, createProject);
//UPDATE
router.put("/update/:id", verifyUser, updateProject);
//DELETE
router.delete("/delete/:id", verifyUser, deleteProject);
//GET
router.get("/:id",verifyUser, getProject);
//GET ALL
router.get("/",verifyUser, getProjects);


export default router;
