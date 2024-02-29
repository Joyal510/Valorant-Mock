// import database from "../models/Schema";

export default async function Loginhandler(req, res) {
  try {
    await connectDB();
    if (req.method === "POST") {
      const { LoginData } = req.body;
      res.status(200).json({ message: "User is valid", LoginData });
      console.log(LoginData);
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
