const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
//require our routs
const ProfileRouter = require("./routes/api/profile");
const Registration = require("./routes/api/users");
const Authorization = require("./routes/api/auth");
const Posts = require("./routes/api/posts");

const app = express();
connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token"
  );
  next();
});

app.get("/", (req, res) => res.send("Server running..."));
//bind our routs
app.use("/api/users", Registration);
app.use("/api/profile", ProfileRouter);
app.use("/api/auth", Authorization);
app.use("/api/posts", Posts);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started..."));
