import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();
//this /login means auth/login (we defined auth/ by default in server.js)
router.post("/login", login);

export default router;