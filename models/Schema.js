const mongoose = require("mongoose");

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

// export default mongoose.models.Post || mongoose.model("database", SignupSchema);

// const database = mongoose.model("database", SignupSchema);
export default mongoose.models.database || mongoose.model("database", SignupSchema);
  

// module.exports = database;
