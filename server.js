// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const { connectDB } = require("./mongodb");
// connectDB();

// const app = express();
// app.use(bodyParser.json());

// import database from "./models/Schema";

// console.log("nice");

// app.post("/signup", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
  
//     const newUser = await database.create({ username, email, password });
   
//     res
//       .status(201)
//       .json({ message: "User created successfully", user: newUser });
//   } catch (error) {
   
//     console.error("Error creating user:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
