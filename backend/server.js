const { readdirSync } = require("fs");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

const options = {
  origin: "http://example.com",
};
app.use(cors(options));

readdirSync("./routes").map((route) =>
  app.use("/api/v1", require(`./routes/${route}`))
);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 4444;
app.listen(port, () => {
  console.log(`server is running on port ${port} ...`);
});
