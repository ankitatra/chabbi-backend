const express = require("express");

const app = express();
const connection = require("./config/db");

const userRoutes = require("./Routes/user.route");

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("send data");
});
app.use("/user", userRoutes);

app.listen(8000, async () => {
  try {
    await connection;
    console.log("db is running");
  } catch (error) {
    console.log(error);
  }
  console.log(`port is running 8000`);
});
