import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";


export const register = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // HASH THE PASSWORD
  
      
      res.status(201).json({ message: "User created successfully" });
    } catch (err) {
     

      res.status(500).json({ message: "Failed to create user!" });
    }
  };
  
  export const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // CHECK IF THE USER EXISTS
  
  
      // CHECK IF THE PASSWORD IS CORRECT
  
  
      // GENERATE COOKIE TOKEN AND SEND TO THE USER
  
      // res.setHeader("Set-Cookie", "test=" + "myValue").json("success")

    } catch (err) {
    

      res.status(500).json({ message: "Failed to login!" });
    }
  };
  
  export const logout = (req, res) => {
    // res.clearCookie("token").status(200).json({ message: "Logout Successful" });
  };