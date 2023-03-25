const mongoose = require("mongoose");
require("dotenv").config();
const MONGOURI =
  "mongodb+srv://so_hell:t17UiXMq93Zf81z8@cluster0.gsmjilp.mongodb.net/?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
