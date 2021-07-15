import express from "express";
import * as bodyParser from "body-parser";
import path from "path";

const routes = require("./routes/index");
const cors = require("cors");
const errorHandler = require("./_middleware/error-handler");

const { PORT } = process.env;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.set("port", PORT || 5000);

app.use("/api", routes);

// serve React app
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// global error handler
app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log(`🚀 Server is listening on port ${app.get("port")}`);
});
