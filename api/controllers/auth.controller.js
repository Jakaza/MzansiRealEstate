import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";


export const register = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // HASH THE PASSWORD

      const hashedPassword = await bcrypt.hash(password, 10);


      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });
  
      console.log(newUser);
      

      res.status(201).json({ message: "User created successfully" });

    } catch (err) {

        console.log(err);
        

      res.status(500).json({ message: "Failed to create user!" });
    }
  };
  
  export const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // CHECK IF THE USER EXISTS

      const user = await prisma.user.findUnique({
        where: { username },
      });

      if (!user) return res.status(400).json({ message: "Invalid Credentials!" });

      // CHECK IF THE PASSWORD IS CORRECT
  
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid)
        return res.status(400).json({ message: "Invalid Credentials!" });
  
      // GENERATE COOKIE TOKEN AND SEND TO THE USER

    
  
      // res.setHeader("Set-Cookie", "test=" + "myValue").json("success")

      const age = 1000 * 60 * 60 * 24 * 7;

      console.log("JWT_SECRET_KEY", JWT_SECRET_KEY);
      

    //   const token = jwt.sign(
    //     {
    //       id: user.id,
    //       isAdmin: false,
    //     },
    //     process.env.JWT_SECRET_KEY,
    //     { expiresIn: age }
    //   );

      return res.status(201).json({ message: "User successfully login" });

    } catch (err) {
    

      res.status(500).json({ message: "Failed to login!" });
    }
  };
  
  export const logout = (req, res) => {
    res.status(201).json({ message: "User successfully logout" });
    // res.clearCookie("token").status(200).json({ message: "Logout Successful" });
  };