const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routesUrls = require("./routes/routes");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://talha:talha@cluster0.ye6xc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => console.log("Database Connected")
);

app.use(express.json());
app.use(cors());

app.use("/app", routesUrls);

app.listen(3001, () => console.log("server is up and running at Port: 3001"));
