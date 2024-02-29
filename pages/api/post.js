const { connectDB } = require("../../mongodb");
import database from "../../models/Schema";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      await connectDB();
      const { formData } = req.body;
      const data = new database(formData);
      await data.save()
      console.log("Received data:", formData);

      res.status(200).json({ message: "Form data received", formData });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  // if (req.method === "POST") {
  //   try {
  //     await connectDB();
  //     const { username, email, password } = req.body;
  //     NextResponse.json(username, email, password);
  //     const newUser = await database.create(data);
  //     newUser.save();
  //     NextResponse.json(newUser);
  //     console.log("User saved!");

  //     res.status(200).json({ message: "POST request received", data });
  //   } catch (error) {
  //     console.error("Error handling POST request:", error);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
  // }else {
  //   res.status(405).json({ error: "Method Not Allowed" });
  // }
}
