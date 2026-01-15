import { Router } from "express";
import { getContent } from "../controllers/content.controller";

const router = Router();
router.get("/", getContent);
export default router;
