import database from "../../models/Schema";

const { connectDB } = require("../../mongodb");

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method === "POST") {
      const { username, password } = req.body;
      const user = await database.findOne({username :  req.body.username });
     
      if(user.password != req.body.password){
        return res.status(401).json({ error: "User credential invalid!" });
      }
      return res.status(200).json({ message: "Login successful", user });

    } else {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error during request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
