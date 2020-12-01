const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("config");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = config.get("mongoURI");

//connect
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));

app.use("/exercises", require("./routes/exercises"));
app.use("/users", require("./routes/users"));

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
