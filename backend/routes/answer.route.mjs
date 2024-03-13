import express from "express";
import { getAgeAnalytics } from "../controllers/answer.controller.mjs";

const router = express.Router();

router.get("/age", getAgeAnalytics);

export default router