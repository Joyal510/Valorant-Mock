

const express = require("express");
const bodyParser = require("body-parser");
// const database = require("./lib/mongodb");

const mongoose = require("mongoose");
// import { connectionString } from "./lib/mongodb";

export function handler(data) {
  const currentData = data;
  console.log(currentData);
}
app.use(bodyParser.json());
const app = express();


const SignupSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const database = mongoose.model("database", SignupSchema);



app.post("/signup", async (req, res) => {
  const formData = req.body;
  console.log("Received form data:", formData);

  try {
    // Create a new user instance using the User model and the form data
    const newUser = new database({
      username: formData.username,
      email: formData.email,
      password: formData.password,
      // Add more fields as needed
    });
    
    // await newUser.save();

    console.log("User saved successfully");

    // Send a success response back to the client
    res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error saving user:", error);
    // Send an error response back to the client
    res.status(500).send("Error saving user");
  }
});

// export async function handler(formData, req, res) {
//   try {
//     // Use your Mongoose model to perform database operations
//     await mongoose.connect(connectionString);
//     const data = await database.create(formData);
//   } catch (error) {
//     console.error("Error querying MongoDB", error);
//     res.status(500).json({ message: "Error querying MongoDB" });
//   }
// }

// app.post("/login", async (req, res) => {
//   try {
//     const info = await database.findOne({ userId: req.body.userId });
//     if (
//       info.username === req.body.username &&
//       info.password === req.body.password
//     ) {
//       res.redirect("/home");
//     } else {
//       res.status(500).send("Internal Server Error");
//     }
//   } catch (error) {}
// });

// app.post("/signup", async (req, res) => {
//   try {
//     const data = await database.create(req.body);
//     res.redirect("/login");
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
//   try {
//     await mongoose.connect(connectionString);
//     console.log("database connected");
//     const data = await database.create(req.body);
//     res.redirect("/login");
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
