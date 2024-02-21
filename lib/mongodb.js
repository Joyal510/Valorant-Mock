const mongoose = require("mongoose");

export const connectionString =
  "mongodb+srv://joyalcorda510:vDfnmC8sucEiLqU6@cluster0.ntjulpm.mongodb.net/ValorantDatabase?retryWrites=true&w=majority";

// mongoose.connect('mongodb+srv://joyalcorda510:vDfnmC8sucEiLqU6@cluster0.ntjulpm.mongodb.net/LoginSignpUp?retryWrites=true&w=majority')
// .then(()=> {
//     console.log("mongo database connected");
// }).catch(()=> {
//     console.log("failed to connect!");
// })


export async function connectDB() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

// connectDB();

// const SignupSchema = mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// const database = mongoose.model("database", SignupSchema);

// module.exports = database;
