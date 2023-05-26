const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DB_HOST)
  .then(() => {
    console.log("db connection established");
    app.listen(3000, () => {
      console.log("server run on port: 3000!");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
