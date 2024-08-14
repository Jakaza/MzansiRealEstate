import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
const router = express.Router();


router.post("/register", (req ,res ) =>{
    res.json({message: "Sucess"});
});
router.post("/login", (req ,res ) =>{
    res.json({message: "Sucess"});
});
router.post("/logout", (req ,res ) =>{
    res.json({message: "Sucess"});
});

export default router;