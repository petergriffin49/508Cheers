const mongoose = require("mongoose");
require("dotenv").config();

// connect
mongoose
  .connect(process.env.MONGODB_URI, {dbName: "508cheers"})
  .then(() => {
    console.log("-- Database Connected");
    return seedMeals();
  })
  .catch((err) => {
    console.error("Mongo error:", err);
  });

// const partnerSchema = {
//   name: {
//     type: String,
//     required: true,
//   },
//   img: {
//     type: String,
//   },
// };
//
// const Partner = mongoose.model("Partner", partnerSchema);
//
// // 👇 require the JSON file
// const partnersData = require("./data/json/partner_data.json");

const mealSchema = new mongoose.Schema({
    InfoSection: {
        infoPostion: { type: String, required: true },
        infoNumber: { type: String, required: true },
        infoTxt: { type: String, required: true },
    }
});
const Meals = mongoose.model("Meal", mealSchema);

const mealsData = require("./data/json/meals_data.json");

// async function seedPartners() {
//   try {
//     //delete everything. be careful.
//     await Partner.deleteMany({});
//
//
//     const result = await Partner.insertMany(partnersData);
//     console.log(`Inserted ${result.length} partners`);
//   } catch (err) {
//     console.error("Seed error:", err);
//   } finally {
//     await mongoose.connection.close();
//     console.log("Connection closed");
//   }
// }

async function seedMeals() {
    try {
        await Meals.deleteMany({});

        const res = await Meals.insertMany(mealsData);
        console.log(`Inserted ${res.length} meals`);
    } catch (err) {
        console.error("Seed error:", err);
    } finally {
        await mongoose.connection.close();
        console.log("Connection closed");
    }
}