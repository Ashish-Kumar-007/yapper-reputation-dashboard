const mongoose = require("mongoose");
const Yapper = require("./models/Yapper");
const dotenv = require("dotenv");
dotenv.config();

const mockYapperData = require("./mockData").mockYapperData;

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log("Database connected!");

  try {
    // Optionally clear existing data
    // await Yapper.deleteMany({});

    // Insert mock data
    for (const data of mockYapperData) {
      await Yapper.create(data);
      console.log("Inserted mock Yapper:", data);
    }

    console.log("All mock data inserted!");
  } catch (err) {
    console.error("Error inserting data:", err);
  } finally {
    mongoose.disconnect();
  }
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});
