const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("db connected");
}

module.exports = connectDB;


// const mongoose = require("mongoose");

// async function connectDB() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       family: 4, // 🔥 forces IPv4
//     });
//     console.log("db connected");
//   } catch (error) {
//     console.error("DB connection error:", error);
//   }
// }

// module.exports = connectDB;
