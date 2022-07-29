import { Router } from "express";
import iechoController from "../controllers/iechoController";

const router = Router();

router.get("/iecho", iechoController);

export default router;
