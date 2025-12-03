const mongoose = require("mongoose");
require("dotenv").config();

// connect
mongoose
  .connect(process.env.MONGODB_URI, {dbName: "508cheers"})
  .then(() => {
    console.log("-- Database Connected");
    return seedPartners();
  })
  .catch((err) => {
    console.error("Mongo error:", err);
  });

const partnerSchema = {
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
};

const Partner = mongoose.model("Partner", partnerSchema);

// 👇 require the JSON file
const partnersData = require("./partner_data.json"); 

async function seedPartners() {
  try {


    const result = await Partner.insertMany(partnersData);
    console.log(`Inserted ${result.length} partners`);
  } catch (err) {
    console.error("Seed error:", err);
  } finally {
    await mongoose.connection.close();
    console.log("Connection closed");
  }
}