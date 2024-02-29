const mongoose = require("mongoose");

export const connectionString =
  "mongodb+srv://joyalcorda510:vDfnmC8sucEiLqU6@cluster0.ntjulpm.mongodb.net/ValorantDatabase?retryWrites=true&w=majority&appName=Cluster0";

export async function connectDB() {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}
