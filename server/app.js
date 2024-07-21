const mongoose = require("mongoose");
require("dotenv").config();

// Database Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    console.log("==============Mongodb Database Connected Successfully==============")
  )
  .catch((err) => console.log("Database Not Connected !!!"));
